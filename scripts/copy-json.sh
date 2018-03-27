#!/bin/sh

rsync --checksum --delete -r -v ./json/* ../mtbva-s3-bucket;
