"""
Setup Module for Datalayer Library.
"""
import setuptools

VERSION = '0.0.3'

setuptools.setup(
    name = 'datalayer_library',
    version = VERSION,
    description = 'Datalayer Library',
    long_description = open('README.md').read(),
    packages = setuptools.find_packages(),
    package_data = {
        'datalayer_library': [
            '*',
        ],
    },
    install_requires = [
        'flask',
        'flask_cors',
        'flask_jwt_extended',
        'requests',
        "kazoo",
        "simplejson",
        "pysolr"
    ],
    extras_require = {
        'test': [
            'pytest',
            'pytest-cov',
            'pylint',
        ]
    },
)
