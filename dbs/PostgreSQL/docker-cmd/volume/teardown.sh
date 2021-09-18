#!/usr/bin/env bash

cd $(dirname $0) && source ../../DOCKER.variables

if docker volume ls | grep -q "${VOLUME_NAME}"; then
  docker volume rm -f ${VOLUME_NAME}
fi
