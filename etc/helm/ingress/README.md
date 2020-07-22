[![Datalayer](https://raw.githubusercontent.com/datalayer/datalayer/main/res/logo/datalayer-25.svg?sanitize=true)](https://datalayer.io)

# Nginx Ingress Helm Chart

+ [Ingress Nginx](https://kubernetes.github.io/ingress-nginx).
+ [Ingress Nginx Deploy](https://kubernetes.github.io/ingress-nginx/deploy).

+ [Nginx Ingress Helm Chart](https://github.com/helm/charts/tree/master/stable/nginx-ingress).
+ [Ingress Nginx Help Deploy](https://kubernetes.github.io/ingress-nginx/deploy/#using-helm).

+ [Cloud Provider AWS](https://kubernetes.io/docs/concepts/cluster-administration/cloud-providers/#aws).
+ [aws.go](https://github.com/kubernetes/cloud-provider-aws/blob/master/pkg/cloudprovider/providers/aws/aws.go).
+ [Resuse existing ELB?](https://github.com/kubernetes/ingress-nginx/issues/3777).
+ [Services of type LoadBalancer and Multiple Ingress Controllers](https://docs.giantswarm.io/guides/services-of-type-loadbalancer-and-multiple-ingress-controllers).

```bash
#  --set controller.scope.namespace=nginx-ingress
helm install stable/nginx-ingress \
  --name k8s-nginx \
  --set controller.stats.enabled=true \
  --set controller.scope.namespace=ingress-nginx
```

```bash
NAME:   k8s-nginx
LAST DEPLOYED: Sun Dec 31 17:49:01 2017
NAMESPACE: default
STATUS: DEPLOYED

RESOURCES:
==> v1/ConfigMap
NAME                                DATA  AGE
k8s-nginx-nginx-ingress-controller  1     1s

==> v1/Service
NAME                                        TYPE          CLUSTER-IP      EXTERNAL-IP  PORT(S)                     AGE
k8s-nginx-nginx-ingress-controller-metrics  ClusterIP     10.105.203.178  <none>       9913/TCP                    1s
k8s-nginx-nginx-ingress-controller          LoadBalancer  10.99.170.231   <pending>    80:32686/TCP,443:32271/TCP  1s
k8s-nginx-nginx-ingress-controller-stats    ClusterIP     10.109.250.74   <none>       18080/TCP                   1s
k8s-nginx-nginx-ingress-default-backend     ClusterIP     10.97.66.223    <none>       80/TCP                      1s

==> v1beta1/Deployment
NAME                                     DESIRED  CURRENT  UP-TO-DATE  AVAILABLE  AGE
k8s-nginx-nginx-ingress-controller       1        1        1           0          1s
k8s-nginx-nginx-ingress-default-backend  1        1        1           0          1s

==> v1/Pod(related)
NAME                                                      READY  STATUS             RESTARTS  AGE
k8s-nginx-nginx-ingress-controller-5d4979dd7-4fzdg        0/2    ContainerCreating  0         1s
k8s-nginx-nginx-ingress-default-backend-868998f7c6-dhqqb  0/1    ContainerCreating  0         1s

NOTES:
The nginx-ingress controller has been installed.
It may take a few minutes for the LoadBalancer IP to be available.
You can watch the status by running 'kubectl --namespace default get services -o wide -w k8s-nginx-nginx-ingress-controller'
```

An example Ingress that makes use of the controller:

```yaml
  apiVersion: extensions/v1beta1
  kind: Ingress
  metadata:
    annotations:
      kubernetes.io/ingress.class: nginx
    name: example
    namespace: foo
  spec:
    rules:
      - host: www.example.com
        http:
          paths:
            - backend:
                serviceName: exampleService
                servicePort: 80
              path: /
    # This section is only required if TLS is to be enabled for the Ingress.
    tls:
        - hosts:
            - www.example.com
          secretName: example-tls
```

If TLS is enabled for the Ingress, a Secret containing the certificate and key must also be provided:

```yaml
W  apiVersion: v1
  kind: Secret
  metadata:
    name: example-tls
    namespace: foo
  data:
    tls.crt: <base64 encoded cert>
    tls.key: <base64 encoded key>
  type: kubernetes.io/tls
```

```bash
kubectl get pods --all-namespaces -l app=nginx-ingress --watch
NAMESPACE       NAME                                       READY     STATUS    RESTARTS   AGE
ingress-nginx   nginx-ingress-controller-8dcfb95b9-kvm9g   1/1       Running   0          7m
```

```bash
POD_NAMESPACE=default
POD_NAME=$(kubectl get pods -n $POD_NAMESPACE -l app=nginx-ingress -o jsonpath={.items[0].metadata.name})
kubectl exec -it $POD_NAME -n $POD_NAMESPACE --container nginx-ingress-controller -- /nginx-ingress-controller --version
-------------------------------------------------------------------------------
NGINX Ingress controller
  Release:    0.9.0
  Build:      git-6816630
  Repository: https://github.com/kubernetes/ingress-nginx
-------------------------------------------------------------------------------
```
