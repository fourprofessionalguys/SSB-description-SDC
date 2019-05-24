DROP DATABASE IF EXISTS descriptions;

CREATE DATABASE descriptions;

\c descriptions;

DROP TABLE IF EXISTS descriptionData;

CREATE TABLE descriptionData (
  id SMALLSERIAL,
  name varchar(50) NOT NULL,
  bestUse varchar(50) NOT NULL,
  climbingShoeType varchar(50) NOT NULL,
  last varchar(50) NOT NULL,
  upper varchar(50) NOT NULL,
  lining varchar(50) NOT NULL,
  outsole varchar(50) NOT NULL,
  footwearClosure varchar(50) NOT NULL,
  resole varchar(50) NOT NULL,
  gender varchar(50) NOT NULL,
  weight varchar(50) NOT NULL,
  quote varchar(250) NOT NULL
);

CREATE TABLE shoesSizes (
  id SMALLSERIAL,
  name varchar(50) NOT NULL,
  sizes array NOT NULL,
);
