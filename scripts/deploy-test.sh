#!/bin/sh

aws s3 sync --acl public-read ./dist s3://aws-website-mountainbikevirginia-sbin6-test --exclude '*.DS_Store';
