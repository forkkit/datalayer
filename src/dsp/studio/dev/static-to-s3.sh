#!/usr/bin/env bash

# Copyright (c) Datalayer https://datalayer.io
# Distributed under the terms of the Apache License, Version 2.0
# https://www.apache.org/licenses/LICENSE-2.0.txt

echo -e "\x1b[34m\x1b[43mCopying Static Assets to AWS S3\x1b[0m"

sed -ie "s|/static/|https://d1klwlf7zy9tdr.cloudfront.net/ui/studio/static/|g" $DLAHOME/src/dsp/studio/build/*.html
sed -ie "s|/static/|https://d1klwlf7zy9tdr.cloudfront.net/ui/studio/static/|g" $DLAHOME/src/dsp/studio/build/*.json
sed -ie "s|\"static/|\"https://d1klwlf7zy9tdr.cloudfront.net/ui/studio/static/|g" $DLAHOME/src/dsp/studio/build/*.html
sed -ie "s|a.src=s.p+\"static/js/\"|a.src=\"https://d1klwlf7zy9tdr.cloudfront.net/ui/studio/static/js/\"|g" $DLAHOME/src/dsp/studio/build/*.html
sed -ie "s|t.p+\"static/media|\"https://d1klwlf7zy9tdr.cloudfront.net/ui/studio/static/media|g" $DLAHOME/src/dsp/studio/build/static/js/*.js

aws s3 cp $DLAHOME/src/dsp/studio/build/static s3://datalayer/ui/studio/static --recursive --profile datalayer
aws s3 cp $DLAHOME/src/dsp/studio/build/img s3://datalayer/ui/studio/img --recursive --profile datalayer
