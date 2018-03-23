#!/bin/sh

aws s3 sync --acl public-read ./dist s3://aws-website-mountainbikevirginia-sibn6 --cache-control max-age=604800 --exclude '*.DS_Store' --no-follow-symlinks;
aws cloudfront create-invalidation --distribution-id E18JIWJY6C436G --paths '/*';
