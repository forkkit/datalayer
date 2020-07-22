[![Datalayer](https://raw.githubusercontent.com/datalayer/datalayer/main/res/logo/datalayer-25.svg?sanitize=true)](https://datalayer.io)

# HBase Helm Chart

```bash
# Install Zookeeper for HBase.
helm upgrade \
  --install dla-zookeeper \
  incubator/zookeeper \
  --namespace dla-hbase \
  --set servers=1,heap="1G"
kubectl get pods -n dla-hbase
```

```bash
# Install HBase.
cd $EXPHOME/etc/helm/hbase && \
  helm upgrade \
    --install dla-hbase \
    ${PWD} \
    --namespace dla-hbase
```

```bash
kubectl get pods -n dla-hbase
kubectl exec -n dla-hbase -it hbase-hbase-master-0 -- bash
python <<EOF
import happybase
connection = happybase.Connection('0.0.0.0')
connection.create_table(
    'mytable',
    {'cf1': dict(max_versions=10),
     'cf2': dict(max_versions=1, block_cache_enabled=False),
     'cf3': dict(),  # use defaults
    }
)
print('TABLES')
for table in connection.tables():
    print(table)
table = connection.table('mytable')
table.put(b'row-key', {b'cf1:col1': b'value1',
                       b'cf1:col2': b'value2'})
row = table.row(b'row-key')
# prints the value of cf1:col1
print(row[b'cf1:col1'])
EOF
kubectl exec -n dla-hbase -it hbase-hbase-master-0 -- hbase shell
kubectl exec -n dla-hbase -it hbase-hbase-rs-0 -- /usr/local/hadoop/bin/yarn node -list
echo open http://localhost:16010
kubectl port-forward -n dla-hbase hbase-hbase-master-0 16010:16010
kubectl exec -n dla-hbase -it hbase-hbase-rs-0 -- bash
echo open http://localhost:16030
kubectl port-forward -n dla-hbase hbase-hbase-rs-0 16030:16030
# kubectl exec -n dla-hbase -it hbase-yarn-nm-0 -- /usr/local/hadoop/bin/hadoop jar /usr/local/hadoop/share/hadoop/mapreduce/hadoop-mapreduce-client-jobclient-2.7.3-tests.jar TestDFSIO -write -nrFiles 5 -fileSize 128MB -resFile /tmp/TestDFSIOwrite.txt
# kubectl exec -n dla-hbase -it hbase-yarn-rm-0 -- /usr/local/hadoop/bin/mapred job -list
helm upgrade \
  --install dla-hbase \
  ${PWD} \
  --namespace dla-hbase \
  --set hbase.regionServer.replicas=3
```

```bash
helm delete dla-hbase --purge
```

```bash
helm delete dla-zookeeper --purge
```
