# Copyright (c) Datalayer https://datalayer.io
# Distributed under the terms of the Apache License, Version 2.0
# https://www.apache.org/licenses/LICENSE-2.0.txt

FROM python:3.7.7

WORKDIR /opt

COPY index.html index.html
COPY res res

COPY datalayer_iam datalayer_iam
COPY setup.py setup.py
COPY README.md README.md
RUN python setup.py install

RUN mkdir /root/.datalayer
COPY oidc.json.template /root/.datalayer/oidc.json.template

WORKDIR /opt
EXPOSE 9700
CMD ["python", "datalayer_iam/main.py"]
