create database firtsapi;

create table users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(40),
    email TEXT
);

insert into users (name, email)
values('joe','joe@ibm.com'),
    ('ryan', 'ryan@faztweb.com');