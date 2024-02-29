#!/bin/ash
read postgres_user < /run/secrets/postgres-user
read postgres_db < /run/secrets/postgres-db
read postgres_replicator_name < /run/secrets/postgres-replicator-name
read postgres_replicator_login < /run/secrets/postgres-replicator-login
read postgres_replicator_password < /run/secrets/postgres-replicator-password
read default_postgres_user < /run/secrets/default-postgres-user
read default_user_password < /run/secrets/default-user-password

psql -U $postgres_user -d $postgres_db <<-EOSQL
    CREATE USER $postgres_replicator_name WITH LOGIN $postgres_replicator_login PASSWORD '$postgres_replicator_password';

    CREATE TABLE IF NOT EXISTS users_tbl (
        id varchar(50) PRIMARY KEY DEFAULT gen_random_uuid(),
        first_name varchar(50) NOT NULL,
        last_name varchar(50),
        birthday date,
        biography varchar,
        city varchar(50),
        password varchar(100) NOT NULL
    );

    CREATE INDEX IF NOT EXISTS first_name_last_name_index ON users_tbl(
        first_name varchar_pattern_ops,
        last_name varchar_pattern_ops
    );

    CREATE USER $default_postgres_user WITH PASSWORD '$default_user_password';
    GRANT ALL PRIVILEGES ON users_tbl TO $default_postgres_user;
EOSQL

pg_basebackup -D "/var/lib/postgresql/replica-backup" -U $postgres_replicator_name -P --wal-method=stream

touch /var/lib/postgresql/replica-backup/standby.signal

# Uncomment the following lines to activate synchronous replication mode.
# psql -U $postgres_user -d $postgres_db <<-EOSQL
#     SET synchronous_commit = on;
#     SET synchronous_standby_names = 'FIRST 1 (pgreplica, pgasyncreplica)';
#     SELECT pg_reload_conf();
# EOSQL
