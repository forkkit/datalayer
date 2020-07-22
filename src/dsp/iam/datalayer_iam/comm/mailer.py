# Copyright (c) Datalayer https://datalayer.io
# Distributed under the terms of the Apache License, Version 2.0
# https://www.apache.org/licenses/LICENSE-2.0.txt


import os

from datalayer_utils.mail.mailer import send_mail


def send_user_mail(sender, recipient, subject, text, html):
    send_mail(sender, recipient, subject, text, html)
