#!/bin/sh

aws s3 sync --acl public-read ./dist s3://aws-website-mountainbikevirginia-sibn6 --exclude '*.DS_Store';
aws cloudfront create-invalidation --distribution-id E18JIWJY6C436G --paths '/*';