#!/usr/bin/env bash

cd $(dirname $0) && source ./DOCKER.variables

if ! docker images | grep -q "${IMAGE_REPOSITORY}"; then
  cd ../deploy &&
  docker build -t ${IMAGE_FULL_NAME} .
fi
