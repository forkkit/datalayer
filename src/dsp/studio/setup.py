"""
Setup Module for Datalayer.
"""
import setuptools

VERSION = '0.0.3'

setuptools.setup(
    name = 'datalayer_studio',
    version = VERSION,
    description = 'Datalayer',
    long_description = open('README.md').read(),
    packages = setuptools.find_packages(),
    package_data = {
        'datalayer': [
            '*',
        ],
    },
    install_requires = [
        'flask',
    ],
    extras_require = {
        'test': [
            'pytest',
            'pytest-cov',
            'pylint',
        ]
    },
)
