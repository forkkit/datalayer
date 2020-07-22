[![Datalayer](https://raw.githubusercontent.com/datalayer/datalayer/main/res/logo/datalayer-25.svg?sanitize=true)](https://datalayer.io)

# Datalayer Source Code

🔴🔥✅ This is the source code of the `Datalayer Science Platform` organized in sub-projects.

- [DSP](./packages/dsp)
- [Jupyter](./packages/jupyter)
- [Kubernetes](./packages/k8s)

## Build Source

```bash
# Install/Build all.
cd $DLAHOME/src && \
  make build
```

```bash
# Clean/Install/Build all.
cd $DLAHOME/src && \
  make clean && \
  make build
```

> The [dev](./dev) folder contains useful scripts.

## Forward Ports

```bash
# https://localhost:8443      # K8S Dashboard
# http://localhost:8983/solr  # Solr
# ldapsearch -x -H ldap://$DLA_LDAP_HOST:$DLA_LDAP_PORT -b dc=datalayer,dc=io -D $DLA_LDAP_BIND -w $DLA_LDAP_BIND_PWD -z 3000
cd $DLAHOME/src && \
  make pf
```

## Examples

To get used to the source architecture and libraries, have a look at the [examples](./packages/examples).

```bash
# open http://localhost:3101 # Simple Example
# open http://localhost:3002/api/widgets # Widgets
# open http://localhost:3009 # Utils
cd $DLAHOME/src && \
  yarn start:example-simple
```

```bash
# open http://localhost:3001 # Extension Example 1
# open http://localhost:3002 # Extension Example 2
# open http://localhost:3000 # JSON Server
# open http://localhost:4000 # GraphQL
cd $DLAHOME/src && \
  yarn start:example-extension
```

## DSP

```bash
# open http://localhost:3003/api/studio          # Studio
# open http://localhost:9600/api/studio          # Studio Server
# open http://localhost:9600/api/studio/version  # Studio Server
# open http://localhost:3001/api/iam             # IAM
# open http://localhost:3001/api/iam/home        # IAM
# open http://localhost:3001/api/iam/me          # IAM
# open http://localhost:3001/api/iam/auth        # IAM
# open http://localhost:9700/api/iam             # IAM Server
# open http://localhost:9700/api/iam/version     # IAM Server
# open http://localhost:3002/api/widgets         # Widgets
# open http://localhost:3009                     # Utils
```

```bash
cd $DLAHOME/src && \
  yarn start:iam
```

```bash
cd $DLAHOME/src && \
  yarn start:studio
```

## Storybooks

```bash
# open http://localhost:9009
cd $DLAHOME/src && \
  yarn storybook:dsp
```

```bash
# open http://localhost:9009
cd $DLAHOME/src && \
  yarn storybook:jupyter-react
```

```bash
# open http://localhost:9009
cd $DLAHOME/src && \
  yarn storybook:jupyter-react-widgets
```

## Endpoints

Datalayer provides service endpoints.

For development, install the endpoints on Minikube [following these steps](https://dsp.docs.datalayer.io/install/minikube) until the `keycloak` service included. Don't further deploy the other services as we will run them locally.

| | Endpoint                      |  Description |
|-|-------------------------------|--------------|
|🔴| /api/iam/xxx                 | xxx |
|🔴| /api/jupyterpool/xxx         | xxx |
|🔴| /api/kuber/xxx               | xxx |
|🔴| /api/library/xxx             | xxx |

```bash
# Ensure that services you will run locally are down.
dla dsp-down iam,kuber,jupyterhub,library,studio,demo
```

```bash
cd $DLAHOME/src && \
  make endpoints-build
```

```bash
# Start the following services: `iam`, `kuber`, `jupyterhub`, `library` and `studio`.
# These will run on your `local` environment (aka `dev` mode) outside of Minikube.
cd $DLAHOME/src && \
  make start
```

## User Interfaces

The Datalayer UI (User Interfaces) is built on `React.js` components.

For development, ensure you fullfill the [requirements](https://dsp.docs.datalayer.io/dev/requirements.html).

```bash
# Clean, install the dependencies and build.
cd $DLAHOME/src && \
  make ui-clean && \
  make ui-deps && \
  make ui-build
```

| | React.js Component |
|-|--------------|
|🔴| Card |
|🔴| Contact |
|🔴| Features |
|🔴| Footer |
|🔴| Form |
|🔴| Header |
|🔴| Landing |
|🔴| Layout |
|🔴| Overview |
|🔴| PreFooter |
|🔴| Pricing |
|🔴| Product |
|🔴| Profile |
|🔴| SignIn |
|🔴| SignUp |
|🔴| Table |
|🔴| Team |

The UI Routes are listed here.

| | UI Route                       |  Description | Example  |
|-|--------------------------------|--------------|----------|
|🔴| /                             | Landing page with top stories accessible in tabs (per tag), features and price | https://datalayer.io |
|🔴| /tag/[id]                     | Story and dataset cards having the given tag id | https://datalayer.io/tag/regression |
|🔴| /signup                       | Registration form with a token| https://datalayer.io/signup |
|🔴| /signin                       | Login form | https://datalayer.io/signin |
|🔴| /profile                      | User private profile page | https://datalayer.io/profile |
|🔴| /profile/edit                 | User private profile page in edit mode | https://datalayer.io/profile/edit |
|🔴| /search?q=[query]             | Story cards search result | https://datalayer.io/search?q=regression |
|🔴| /[user]                       | User page with stories and datasets cards | https://datalayer.io/eric |
|🔴| /[user]/dataset/[id]          | Dataset page in view mode | https://datalayer.io/eric/dataset/brussels-jam-2020 |
|🔴| /[user]/dataset/[id]/edit     | Dataset page in edit mode | https://datalayer.io/eric/dataset/brussels-jam-2020/edit |
|🔴| /[user]/dataset/[id]/preview  | Dataset page in preview mode | https://datalayer.io/eric/dataset/brussels-jam-2020/preview |
|🔴| /[user]/project/[id]          | Project page in view mode | https://datalayer.io/eric/dataset/brussels-jam-2020 |
|🔴| /[user]/project/[id]/edit     | Project page in edit mode | https://datalayer.io/eric/dataset/brussels-jam-2020/edit |
|🔴| /[user]/project/[id]/preview  | Project page in preview mode | https://datalayer.io/eric/dataset/brussels-jam-2020/preview |
|🔴| /[user]/paper/[id]            | Paper page in view mode | https://datalayer.io/eric/paper/is-brussels-traffic-really-jamed |
|🔴| /[user]/paper/[id]/edit       | Paper page in edit mode | https://datalayer.io/eric/paper/is-brussels-traffic-really-jamed/edit |
|🔴| /[user]/paper/[id]/preview    | Paper page in preview mode | https://datalayer.io/eric/paper/is-brussels-traffic-really-jamed/edit |

## Minikube

Datalayer is available with services that makes up the `Datalayer Science Platform`.

The services are deployed in the Kubernetes Cluster via [Helm charts](https://github.com/datalayer/datalayer/tree/main/etc/helm).

```bash
# Start Minikube.
dla minikube-start
```

### Host File

```bash
# This is needed if you want to invoke the Minikube services from your local dev environment.
sudo echo "127.0.0.1 dla-solr-0.dla-solr-headless.dla-solr dla-solr-1.dla-solr-headless.dla-solr dla-solr-zookeeper-headless"  | sudo tee -a /etc/hosts
sudo echo "$(minikube ip) minikube.datalayer.io.local ldapadmin.minikube.datalayer.io.local dla-keycloak-http.dla-keycloak.svc.cluster.local"  | sudo tee -a /etc/hosts
cat /etc/hosts
```

### Docker Images

```bash
eval $(minikube docker-env) && \
  dla dsp-docker-build
```

### Helm

```bash
# Deploy the Helm Tiller Pod.
dla helm-deploy && \
  sleep 60s && \
  dla helm-status
# Build the Helm Charts.
dla dsp-helm-build
```

### Instrument

```bash
# Deploy K8S Dashboard service.
dla dsp-up minikube k8s-dashboard
# Give some more role to k8s-dashboard-kubernetes-dashboard.
cat <<EOF | kubectl create -f -
apiVersion: rbac.authorization.k8s.io/v1beta1
kind: ClusterRoleBinding
metadata:
  name: k8s-dashboard
  labels:
    k8s-app: k8s-dashboard
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: cluster-admin
subjects:
- kind: ServiceAccount
  name: k8s-dashboard-kubernetes-dashboard
  namespace: kube-system
EOF
# Browse K8S Dashboard.
dla k8s-dashboard
```

```bash
# Deploy the Kuber service.
dla dsp-up minikube kuber
# Check Kuber service.
open http://minikube.datalayer.io.local/kuber/about/kuber.html
```

```bash
# Deploy the Velero service.
# dla dsp-up minikube velero
```

### Config

```bash
# Deploy Config.
dla dsp-up minikube config
```

### Secret

```bash
# Deploy Secret.
dla dsp-up minikube secret
```

### Simple

```bash
dla dsp-up minikube simple
```

### Observe

```bash
# Deploy the Observe service.
# dla dsp-up minikube k8s-metrics,prometheus
```

### Solr

```bash
# Deploy the Solr service.
dla dsp-up minikube solr
```

```bash
# Initialize the Solr service.
## Shell 1 - Proxy Solr.
echo open http://localhost:8983/solr
$DLAHOME/src/dev/port-forward-solr.sh
## Shell 2 - Proxy Zookeeper.
$DLAHOME/src/dev/port-forward-solr-zookeeper.sh
## Shell 3 - Apply the init steps.
dla dsp-solr-init
## Check the datalayer collection.
open http://localhost:8983/solr/#/datalayer/collection-overview
```

### JupyterHub

```bash
# Deploy the JupyterHub service.
dla dsp-up minikube jupyterhub
open http://minikube.datalayer.io.local/api/jupyterhub
```

### Library

```bash
# Deploy the Library service.
dla dsp-up minikube library
open http://minikube.datalayer.io.local/library
```

### IAM

```bash
# Deploy IAM service.
dla dsp-up minikube iam
open http://minikube.datalayer.io.local/api/iam
```

```bash
# Deploy Vault service.
# dla dsp-up minikube vault
```

### Studio

```bash
# Deploy the Studio service.
dla dsp-up minikube studio
open http://minikube.datalayer.io.local
```

<!--
### HDFS

```bash
# Deploy HDFS service.
dla dsp-up minikube hdfs
```

### IPFS

```bash
# Deploy IPFS service.
dla dsp-up minikube ipfs
```

### Etcd

```bash
# Deploy Etcd service.
dla dsp-up minikube etcd
```

### HBase

```bash
# Deploy HBase service.
dla dsp-up minikube hbase
```

### Spark

```bash
# Deploy Spark service.
dla dsp-up minikube spark
```

### Kafka

```bash
# Deploy the Kafka service.
dla dsp-up minikube kafka
```

### Kernels

```bash
# Deploy the Kernels services.
dla dsp-up minikube kernels
```

### Binder

```bash
# Deploy the Binder service.
dla dsp-up minikube binder
```

### [DEPRECATED] LDAP

```bash
# Deploy the LDAP service.
dla dsp-up minikube ldap,ldapadmin
```

```bash
# Initialize the LDAP service.
# Shell 1.
$DLAHOME/src/dev/port-forward-ldap.sh
# Shell 2.
dla dsp-ldap-add $DLAHOME/etc/seed/ldap/ldap-seed.ldif
```

### [DEPRECATED] Keycloak

```bash
# Deploy the Keycloak service.
dla dsp-up minikube keycloak
```

```bash
# Follow the steps to initialize Keycloak.
dla dsp-keycloak-init
# Check Authentication.
open http://dla-keycloak-http.dla-keycloak.svc.cluster.local/auth/ # admin/admin
open http://dla-keycloak-http.dla-keycloak.svc.cluster.local/auth/realms/datalayer/account # eric/123
```
-->

### Tear Down

```bash
dla dsp-down explorer,jupyterhub,library,solr,iam,keycloak,ldapadmin,ldap,kuber,k8s-dashboard
```
