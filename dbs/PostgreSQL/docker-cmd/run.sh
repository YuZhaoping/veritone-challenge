#!/usr/bin/env bash

cd $(dirname $0) && source ./DOCKER.variables
source ./DB.variables

if ! docker ps | grep -q "${CONTAINER_NAME}"; then
  if docker ps -a | grep -q "${CONTAINER_NAME}"; then
    docker start ${CONTAINER_NAME}
  else
    ./volume/setup.sh
    ./network/setup.sh

    docker run -d \
      --name ${CONTAINER_NAME} \
      --network=${BACKEND_NETWORK_NAME} --hostname=${CONTAINER_NAME} \
      -p ${HOST_PORT}:${PORT} -v ${VOLUME_NAME}:/var/lib/postgresql/data \
      -e POSTGRES_PASSWORD=${POSTGRES_PASSWORD} \
      ${IMAGE_FULL_NAME}
  fi
fi
