#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
  \cd /docker-entrypoint-initdb.d

  \i sqls/begin-create.sql

  \i sqls/create-customers.sql
  \i sqls/create-shopping-items.sql

  \i sqls/end-create.sql

  \i sqls/data-init.sql
EOSQL
