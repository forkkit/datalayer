"""Setup Module for Datalayer Admin.
"""
from setuptools import find_packages

VERSION = '0.0.3'

setuptools.setup(
    name = 'datalayer_admin',
    version = VERSION,
    description = 'Datalayer Admin',
    long_description = open('README.md').read(),
    packages = find_packages(),
    package_dsp = {
        'datalayer_admin': [
            '*',
        ],
    },
    install_requires = [
        'boto3',
        'configparser',
        'datalayer_utils',
        'docker',
        'kubernetes',
        'pandas',
        'pathlib',
        'requests',
        'urllib3',
    ],
    extras_require = {
        'test': [
            'pytest',
            'pytest-cov',
            'pylint',
        ]
    },
    entry_points={
        'console_scripts': [
            'datalayer-admin=datalayer_admin.__main__:main',
            'dsp=datalayer_admin.__main__:main',
        ]
    }
)
