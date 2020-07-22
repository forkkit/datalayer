
import os
import json
import logging
import requests
import uuid
import smtplib
import json

from werkzeug.security import generate_password_hash, check_password_hash

from email.mime.text import MIMEText

from datalayer_utils import now_string, hash_password, verify_password

from datalayer_iam.store.solr import (
    index_user, user_exists, get_user_by_username, get_users_by_username, 
    get_users_by_email, search_users
)


logger = logging.getLogger("__name__")


DLA_JOIN_SEP = '{DLA_JOIN_V1}'

smtp_host = os.getenv('DLA_SMTP_HOST')
smtp_port = int(os.getenv('DLA_SMTP_PORT'))
smtp_username = os.getenv('DLA_SMTP_USERNAME')
smtp_password = os.getenv('DLA_SMTP_PASSWORD')


def tmp_password(token, password):
    return DLA_JOIN_SEP + token + DLA_JOIN_SEP + hash_password(password)

def create_account_and_notify_user(username, first_name, last_name , email, password):
    # Create Account.
    token = str(uuid.uuid4())
    index_user({
        "id": username,
        "type_s": "user",
        "first_name_t": first_name,
        "last_name_t": last_name,
        "email_s": email,
        "join_request_ts_dt": now_string(),
        "password_tmp_s": tmp_password(token, password),
    })
    # Notify User.
    smtp_server = smtplib.SMTP(  
        host = smtp_host,
        port = smtp_port
    )
    smtp_server.starttls()
    smtp_server.login(smtp_username, smtp_password)
    iam_root_url = os.getenv('DLA_IAM_ROOT_URL')
    """
    You may find the following resources helpful as you familiarize yourself with Datalayer.

    User Guide: https://dsp.docs.datalayer.io/use
    """
    text = f"""Thanks for signing up for Datalayer!

Please click the link below to confirm activation of your Datalayer account:

{iam_root_url}/api/iam/join/confirm?t={token}&u={username}

Datalayer is currently an early-release service.  We appreciate your
feedback, questions and suggestions.  As appropriate, we encourage you 
to use the Datalayer issue tracker or email our support team.

Issue Tracker: https://github.com/datalayer/datalayer/issues
Email Support: support@datalayer.io

Happy Data Analysis!

Sincerely, The Datalayer Team.
"""
    logger.info(f'Sending invitation mail to {email} with content {text}:')
    msg = MIMEText(text)
    msg['Subject'] = '[Datalayer] A warm welcome from Datalayer'
    msg['From'] = 'Datalayer <info@datalayer.io>'
    msg['To'] = email
    smtp_server.send_message(msg)
    smtp_server.quit()
    return { 'success': True, 'message': 'We have sent you an email. Check your inbox and click on the activation link' }


def confirm_user_join(username, token):
    user = get_user_by_username(username)
    if not user:
        logger.info(f'Can not find username {username}')
        return os.getenv('DLA_IAM_JOIN_ERROR')
    password_tmp = user.get('password_tmp_s', None)
    if not password_tmp:
        logger.info(f'Temporary credential does not exist for username {username}.')
        return os.getenv('DLA_IAM_JOIN_ERROR')
    if not password_tmp.startswith(DLA_JOIN_SEP):
        logger.info(f'Temporary credential does not start with {DLA_JOIN_SEP} for username {username}.')
        return os.getenv('DLA_IAM_JOIN_ERROR')
    if token not in password_tmp:
        logger.info(f'No token found in temporary credential for username {username}.')
        return os.getenv('DLA_IAM_JOIN_ERROR')
    password = password_tmp.split(DLA_JOIN_SEP)[2]
    logger.info(f'Password {password}.')
    index_user({
        "id": username,
        "join_confirmation_ts_dt": now_string(),
        "password_s": { "set": password }
    })
    logger.info(f'Account {username} has been created. Welcome to Datalayer!')
    return os.getenv('DLA_IAM_JOIN_SUCCESS')


def user_new_password(username, password):
    user = get_user_by_username(username)
    if not user:
        return { 'success': False, 'message': 'Username `{username}` does not exist' }
    logger.info(f'Found user {user}')
    email = user.get('email_s', None)
    if not email:
        return { 'success': False, 'message': 'No email for user `{username}`' }
    logger.info(f'Found user with email {email}')
    token = str(uuid.uuid4())
    password_tmp = tmp_password(token, password)
    index_user({
        "id": username,
        "new_password_request_ts_dt": now_string(),
        "password_tmp_s": { "set": password_tmp }
    })
    smtp_server = smtplib.SMTP(
        host = smtp_host,
        port = smtp_port
    )
    smtp_server.starttls()
    smtp_server.login(smtp_username, smtp_password)
    iam_root_url = os.getenv('DLA_IAM_ROOT_URL')
    text = f"""Thanks for using Datalayer!

Someone has requested to change the password of your Datalayer account.

If you have not created this request, just FORGET this mail.

Please click the link below if you have made this request:

{iam_root_url}/api/iam/newpassword/confirm?t={token}&u={username}

Datalayer is currently an early-release service.  We appreciate your
feedback, questions and suggestions.  As appropriate, we encourage you 
to use the Datalayer issue tracker or email our support team.

Issue Tracker: https://github.com/datalayer/datalayer/issues
Email Support: support@datalayer.io

Happy Data Analysis!

Sincerely, The Datalayer Team.
"""
    logger.info('Sending mail to {} with content {}:'.format(email, text))
    msg = MIMEText(text)
    msg['Subject'] = '[Datalayer] Password Reset Request'
    msg['From'] = 'Datalayer <info@datalayer.io>'
    msg['To'] = email
    smtp_server.send_message(msg)
    smtp_server.quit()
    return { 
        'success': True, 
        'message': 'We have sent you an email. Check your inbox and click on the activation link to reset your password'
        }


def user_new_password_confirm(username, token):
    user = get_user_by_username(username)
    if not user:
        logger.info(f'Can not find user with username {username}')
        return os.getenv('DLA_IAM_PASSWORD_ERROR')
    password_tmp = user.get('password_tmp_s', None)
    if not password_tmp:
        logger.info(f'Temporary credential does not exist for username {username}' )
        return os.getenv('DLA_IAM_PASSWORD_ERROR')
    if not password_tmp.startswith(DLA_JOIN_SEP):
        logger.info(f'Temporary credential does not start with {DLA_JOIN_SEP} for username {username}' )
        return os.getenv('DLA_IAM_PASSWORD_ERROR')
    if token not in password_tmp:
        logger.info(f'No token found in temporary credential for username {username}.')
        return os.getenv('DLA_IAM_PASSWORD_ERROR')
    password = password_tmp.split(DLA_JOIN_SEP)[2]
    logger.info(f'Password {password}.')
    index_user({
        "id": username,
        "new_password_confirmation_ts_dt": now_string(),
        "password_s": { "set": password },
    })
    logger.info(f'Welcome back username {username}.')
    return os.getenv('DLA_IAM_PASSWORD_SUCCESS')


def authenticate_user(username, password):
    user = get_user_by_username(username)
    if not user:
        return None
    stored_password = user.get('password_s', None)
    if not stored_password:
        return None
    if verify_password(stored_password, password):
        return user
    return None


def get_user(username):
    return get_user_by_username(username)


def update_user_profile(first_name, last_name, username):
    logger.info(f'Updating profile for username {username}')
    user = get_user_by_username(username)
    if not user:
        return { 'success': False , 'message': f'No profile found for username {username}' }
    index_user({
        "id": username,
        "last_profile_update_ts_dt": now_string(),
        "first_name_t": { "set": first_name },
        "last_name_t": { "set": last_name },
    })
    return { 'success': True, 'message': f'Your profile {username} has been updated' }
