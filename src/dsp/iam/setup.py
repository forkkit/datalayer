"""
Setup Module for Datalayer IAM.
"""
import setuptools

VERSION = '0.0.3'

setuptools.setup(
    name = 'datalayer_iam',
    version = VERSION,
    description = 'Datalayer IAM',
    long_description = open('README.md').read(),
    packages = setuptools.find_packages(),
    package_data = {
        'datalayer_iam': [
            '*',
        ],
    },
    install_requires = [
        'flask',
        'flask_cors',
        'flask_jwt_extended',
        'ldap3',
        'pysolr',
        'requests',
    ],
    extras_require = {
        'test': [
            'pytest',
            'pytest-cov',
            'pylint',
        ]
    },
)
