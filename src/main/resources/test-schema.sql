CREATE TABLE IF NOT EXISTS users_tbl (
    id integer AUTO_INCREMENT PRIMARY KEY,
    username varchar(50),
    first_name varchar(50),
    last_name varchar(50),
    city varchar(30),
    password varchar(100)
);
