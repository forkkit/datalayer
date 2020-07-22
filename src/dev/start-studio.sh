#!/usr/bin/env bash

# Copyright (c) Datalayer https://datalayer.io
# Distributed under the terms of the Apache License, Version 2.0
# https://www.apache.org/licenses/LICENSE-2.0.txt

echo -e "\x1b[34m\x1b[43mStart Studio\x1b[0m"

#   make py-start
cd $DLAHOME/src/dsp/studio && \
  make watch
