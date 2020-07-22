#!/usr/bin/env bash

# Copyright (c) Datalayer https://datalayer.io
# Distributed under the terms of the Apache License, Version 2.0
# https://www.apache.org/licenses/LICENSE-2.0.txt

echo -e "\x1b[34m\x1b[43mDSP K8S Port Forward Simple Echo\x1b[0m"

# Port-forward Simple Echo

export POD_NAME=$(kubectl get pods --namespace dla-simple -l "app=simple-echo" -o jsonpath="{ .items[0].metadata.name }")
echo open http://localhost:5678
kubectl port-forward -n dla-simple $POD_NAME 5678:5678
