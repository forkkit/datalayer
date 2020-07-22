[![Datalayer](https://raw.githubusercontent.com/datalayer/datalayer/main/res/logo/datalayer-25.svg?sanitize=true)](https://datalayer.io)

# Hadoop Helm Chart

Install the `HDFS` chart.

```bash
#  --set hdfs.nameNode.image=localhost:5000/hdfs-nn:2.9.0 \
#  --set hdfs.nameNode.masterOperator=In \
#  --set hdfs.dataNode.image=localhost:5000/hdfs-dn:2.9.0 \
#  --set hdfs.dataNode.masterOperator=In \
# Deploy HDFS Helm Chart on Minikube.
cd $EXPHOME/etc/helm/hadoop && \
  helm upgrade \
    --install dla-hdfs \
    ${PWD} \
    --namespace dla-hdfs \
    --set persistence.nameNode.enabled=true \
    --set persistence.nameNode.size=5Gi \
    --set persistence.nameNode.storageClass=standard \
    --set persistence.dataNode.enabled=true \
    --set persistence.dataNode.storageClass=standard \
    --set persistence.dataNode.size=10Gi \
    --set hdfs.dataNode.replicas=3
```

```bash
kubectl get pods -n dla-hdfs
kubectl exec -n dla-hdfs -it dla-hdfs-hdfs-hdfs-nn-0 -- hdfs dfsadmin -report
python <<EOF
from pyarrow import hdfs
fs = hdfs.connect(host='dla-hdfs-hdfs-hdfs-nn-0.dla-hdfs-hdfs-hdfs-nn.dla-hdfs.svc.cluster.local', port=9000, user=None, kerb_ticket=None, extra_conf=None)
print(fs.ls('/'))
EOF
kubectl exec -n dla-hdfs -it dla-hdfs-hdfs-hdfs-nn-0 -- hdfs dfs -ls /
echo open http://localhost:50070
kubectl port-forward -n dla-hdfs dla-hdfs-hdfs-hdfs-nn-0 50070:50070
kubectl exec -n dla-hdfs -it dla-hdfs-hdfs-hdfs-nn-0 -- bash
helm upgrade -n dla-hdfs --set hdfs.dataNode.replicas=6 dla-hdfs-hdfs dla-hdfs-hdfs
```

This will launch one Hadoop Namenode and 3 Hadoop Datanodes.

If you list the pods with `kubectl get pods -l app=hdfs`, you should see the running Hadoop pods.

```
NAME                              READY     STATUS    RESTARTS   AGE
hdfs-hdfs-hdfs-nn-0   1/1       Running   0          5s
hdfs-hdfs-hdfs-dn-0   1/1       Running   0          5s
hdfs-hdfs-hdfs-dn-1   1/1       Running   0          5s
hdfs-hdfs-hdfs-dn-2   1/1       Running   0          5s
```

Helm should also list the chart you have just deployed. Type `helm ls hdfs` which will return:

```
NAME         	REVISION	UPDATED                 	STATUS  	CHART                     	NAMESPACE
hdfs   	1       	Mon Nov 20 14:23:52 2017	DEPLOYED	hdfs-1.0.0          	default  
```

Check the sanity of your cluster with `dfsadmin` and create a `/tmp` folder.

```
kubectl exec -it hdfs-hdfs-hdfs-nn-0 -- hdfs dfsadmin -report
kubectl exec -it hdfs-hdfs-hdfs-nn-0 -- hdfs dfs -mkdir /tmp
kubectl exec -it hdfs-hdfs-hdfs-nn-0 -- hdfs dfs -ls /
kubectl exec -n default -it hdfs-hdfs-hdfs-nn-0 -- bash
```

To access the Namenode user interface: `kubectl port-forward hdfs-hdfs-hdfs-nn-0 50070:50070` and open in your browser `http://localhost:50070`.

If you want to scale the number of Datanodes, you just need to upgrade.

```base
helm upgrade \
  --set hdfs.dataNode.replicas=6 \
  dla-hdfs \
  dla-hdfs
```

```bash
helm delete dla-hdfs --purge
```
