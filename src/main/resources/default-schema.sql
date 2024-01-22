CREATE TABLE IF NOT EXISTS users_tbl (
    id varchar(50) PRIMARY KEY DEFAULT gen_random_uuid(),
    first_name varchar(50) NOT NULL,
    last_name varchar(50),
    birthday date,
    biography varchar,
    city varchar(30),
    password varchar(100) NOT NULL
);
