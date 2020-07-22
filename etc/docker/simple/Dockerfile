FROM debian:bullseye-backports

# ENV REFRESHED_AT 2019-08-06T13:50
RUN apt update && apt install -y python curl
RUN curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py && python get-pip.py
RUN pip install setuptools

COPY simple simple
RUN cd simple && python setup.py develop

EXPOSE 9876

CMD [ "python", "./simple/simple.py" ]
