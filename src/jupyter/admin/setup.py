"""Setup Module for Datalayer Admin.
"""
from setuptools import find_packages

VERSION = '0.0.3'

setuptools.setup(
    name = 'jupyter_admin',
    version = VERSION,
    description = 'Datalayer Admin',
    long_description = open('README.md').read(),
    packages = find_packages(),
    package_dsp = {
        'jupyter_admin': [
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
            'jupyter-admin=jupyter_admin.__main__:main',
            'jadm=jupyter_admin.__main__:main',
        ]
    }
)
