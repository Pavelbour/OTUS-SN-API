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
