#!/bin/bash

BRANCH=$(git rev-parse --abbrev-ref HEAD)
if [[ "$BRANCH" != "master" ]]; then
  echo 'Aborting script';
  exit 1;
fi
