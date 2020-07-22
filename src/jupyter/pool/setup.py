"""
Setup Module for Datalayer JupyterPool.
"""
import setuptools

VERSION = '0.0.3'

setuptools.setup(
    name = 'jupyterpool',
    version = VERSION,
    description = 'Datalayer JupyterPool',
    long_description = open('README.md').read(),
    packages = setuptools.find_packages(),
    package_data = {
        'jupyterpool': [
            '*',
        ],
    },
    install_requires = [
        'flask',
        'flask_cors',
        'flask_jwt_extended',
        'ldap3',
        'requests',
        'jupyterhub'
    ],
    extras_require = {
        'test': [
            'pytest',
            'pytest-cov',
            'pylint',
        ]
    },
)
