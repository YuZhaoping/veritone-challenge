#!/usr/bin/env bash

cd $(dirname $0) && source ../DOCKER.variables

NETWORK_NAME=${BACKEND_NETWORK_NAME}

if docker network ls | grep -q "${NETWORK_NAME}"; then
  docker network rm ${NETWORK_NAME}
fi
