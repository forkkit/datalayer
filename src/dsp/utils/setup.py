"""Setup Module for Datalayer Admin.
"""
from setuptools import find_packages

VERSION = '0.0.3'

setuptools.setup(
    name = 'datalayer_utils',
    version = VERSION,
    description = 'Datalayer Utils',
    long_description = open('README.md').read(),
    packages = find_packages(),
    package_dsp = {
        'datalayer_utils': [
            '*',
        ],
    },
    install_requires = [
        'boto3',
        'configparser',
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
            'datalayer-utils=datalayer_admin.__main__:main',
        ]
    }
)
