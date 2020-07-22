# Copyright (c) Datalayer https://datalayer.io
# Distributed under the terms of the Apache License, Version 2.0
# https://www.apache.org/licenses/LICENSE-2.0.txt


from .ldap import get_ldap_users

def test_get_ldap_users():
    users = get_ldap_users()
    assert users.size == 30
