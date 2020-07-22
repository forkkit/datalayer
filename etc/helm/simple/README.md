[![Datalayer](https://raw.githubusercontent.com/datalayer/datalayer/main/res/logo/datalayer-25.svg?sanitize=true)](https://datalayer.io)

# Simple Helm Chart

```bash
dla dsp-up minikube simple
```

```bash
export POD_NAME=$(kubectl get pods --namespace dla-simple -l "app=simple" -o jsonpath="{ .items[0].metadata.name }")
kubectl exec -n dla-simple  -it $POD_NAME -- /bin/bash
```

```bash
# Access to the Pod.
export POD_NAME=$(kubectl get pods --namespace dla-simple -l "app=simple" -o jsonpath="{ .items[0].metadata.name }")
echo "Visit http://127.0.0.1:8080 to access Simple"
kubectl port-forward --namespace dla-simple $POD_NAME 8080:5678
```

```bash
# Access via ClusterIP Service.
CLUSTER_IP=$(kubectl get svc/simple-svc --namespace dla-simple -o custom-columns=IP:spec.clusterIP --no-headers=true)
echo "Visit http://$CLUSTER_IP:???"
```

```bash
# Access via NodePort Service.
export NODE_PORT=$(kubectl get --namespace dla-simple -o jsonpath="{.spec.ports[0].nodePort}" services simple-svc)
export NODE_IP=$(kubectl get nodes --namespace dla-simple -o jsonpath="{.items[0].status.addresses[0].address}")
echo http://$NODE_IP:$NODE_PORT
# or...
open $(minikube service -n dla-simple simple-svc --url)
```

```bash
kubectl get secret --namespace dla-simple init-secret -o jsonpath="{.data.password}" | base64 --decode; echo
```

```bash
dla dsp-down simple
```
