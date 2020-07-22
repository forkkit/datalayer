# FROM danisla/hadoop:2.7.3
FROM datalayer/hdfs-base:3.2.1

ENV VERSION 2.2.4


ENV HBASE_HOME /opt/hbase
ENV PATH $HBASE_HOME/bin:$PATH

RUN curl -s http://archive.apache.org/dist/hbase/${VERSION}/hbase-${VERSION}-bin.tar.gz | tar xvfz - -C /opt
RUN mv /opt/hbase-${VERSION} ${HBASE_HOME}

RUN pip install happybase aiohappybase

# Master Port.
EXPOSE 16000
# Master UI Port.
EXPOSE 16010

# Region Server Port.
EXPOSE 16020
# Region Server UI Port.
EXPOSE 16030

# REST API Port.
EXPOSE 8080
# Thrift API Port.
EXPOSE 9090

# Zookeeper Port.
# EXPOSE 2181

ADD entry-point.sh /entry-point.sh
RUN chmod a+x /entry-point.sh
