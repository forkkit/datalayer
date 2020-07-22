FROM debian:buster-backports

RUN apt update

ENV USER=root

RUN apt install -y python3 python3-pip && \
  ln -s /usr/bin/python3 /usr/bin/python && \
  ln -s /usr/bin/pip3 /usr/bin/pip
RUN pip install pyarrow

#    gpg \
RUN DEBIAN_FRONTEND=noninteractive apt-get install -y \
    --no-install-recommends \
    openjdk-11-jdk ca-certificates-java \
    vim sudo \
    net-tools curl 
#    rm -rf /var/lib/apt/lists/*
    
ENV JAVA_HOME=/usr/lib/jvm/java-11-openjdk-amd64
ENV PATH=$JAVA_HOME/bin:$PATH

# ENV HADOOP_VERSION 2.9.2
ENV HADOOP_VERSION 3.2.1
ENV HADOOP_URL https://archive.apache.org/dist/hadoop/core/hadoop-$HADOOP_VERSION/hadoop-$HADOOP_VERSION.tar.gz

#    && gpg --verify /tmp/hadoop.tar.gz.asc \
RUN set -x \
    && curl -fSL "$HADOOP_URL" -o /tmp/hadoop.tar.gz \
    && curl -fSL "$HADOOP_URL.asc" -o /tmp/hadoop.tar.gz.asc \
    && tar -xvf /tmp/hadoop.tar.gz -C /opt/ \
    && rm /tmp/hadoop.tar.gz*
    
# RUN ln -s /opt/hadoop-$HADOOP_VERSION/etc/hadoop /etc/hadoop
RUN ln -s /opt/hadoop-$HADOOP_VERSION/ /usr/local/hadoop
RUN mkdir /opt/hadoop-$HADOOP_VERSION/logs

RUN mkdir /hadoop-data

ENV HADOOP_HOME=/opt/hadoop-$HADOOP_VERSION
ENV PATH=$HADOOP_HOME/bin:$PATH
ENV HADOOP_CONF_DIR=/etc/hadoop

ENV MULTIHOMED_NETWORK=1
# ADD lib/pod-cidr-namenode-topology-plugin-0.1-SNAPSHOT-jar-with-dependencies.jar $HADOOP_HOME/share/hadoop/hdfs/lib

ENV LD_LIBRARY_PATH=$HADOOP_HOME/lib/native:$LD_LIBRARY_PATH
RUN ldconfig

ADD entry-point.sh /entry-point.sh
RUN chmod a+x /entry-point.sh

ENTRYPOINT ["/entry-point.sh"]
