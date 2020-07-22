import logging
import os

import pandas as pd

from datalayer_iam.store.ldap import init_ldap_users, get_ldap_users
from datalayer_iam.store.solr import (
    index_user, user_exists, search_users, delete_users
)
from datalayer_iam.comm.mailer import send_user_mail


logger = logging.getLogger("__name__")


def execute_iam(args):
    if args.iam_command[0] == 'init-ldap-users':
        init_ldap_users()
    elif args.iam_command[0] == 'export-ldap-users':
        users = get_ldap_users(args.filter)
        f = os.getcwd() + '/users.csv'
        users.to_csv(f, index=False)
        print(f'LDAP users have been exported in {f}')
    elif args.iam_command[0] == 'list-ldap-users':
        users = get_ldap_users(args.filter)
        if args.details:
            for _, row in users.iterrows():
                print(f'{row}\n')
        else:
            print(users)
    elif args.iam_command[0] == 'import-users':
        f = os.getcwd() + '/users.csv'
        users = pd.read_csv(f)
        for _, row in users.iterrows():
            email = row['mail']
            if user_exists(email):
                logger.warning(f'User already exists for email {email}')
            else:
                index_user({
                    "id": row['uid'],
                    "type_s": 'user',
                    "first_name_t": row['cn'],
                    "last_name_t": row['sn'],
                    "email_s": email,
                    "create_timestamp_dt": row['createTimestamp'],
                    "password_s": '',
                })
    elif args.iam_command[0] == 'delete-users':
        delete_users(args.query)
    elif args.iam_command[0] == 'list-users':
        users = search_users(f'{args.query}')
        print('[\t')
        print(',\n'.join(str(user) for user in users))
        print(']')
        print(f'COUNT: {len(users)}')
    elif args.iam_command[0] == 'mail-users':
        users = search_users(f'{args.query}')
        text_file = './mail.txt'
        html_file = './mail.html'
        logger.info('Using text from {} and html from {}'.format(text_file, html_file))
        with open(text_file) as fp:
            text = fp.read()
        with open(html_file) as fp:
            html = fp.read()
        logger.info('Using text: {}'.format(text))
        logger.info('Using and html: {}'.format(html))
        for user in users:
            send_user_mail(
                'info@datalayer.io',
                user['email_s'],
                '[Datalayer] Welcome',
                text,
                html,
                )
