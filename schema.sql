DROP DATABASE IF EXISTS descriptions;

CREATE DATABASE descriptions;

\c descriptions;

DROP TABLE IF EXISTS descriptionData;

CREATE TABLE descriptionData (
  id SMALLSERIAL,
  name_ varchar(50) NOT NULL,
  best_use varchar(50) NOT NULL,
  climbing_show_type varchar(50) NOT NULL,
  last_ varchar(50) NOT NULL,
  upper_ varchar(50) NOT NULL,
  lining_ varchar(50) NOT NULL,
  outsole_ varchar(50) NOT NULL,
  footwear_closure varchar(50) NOT NULL,
  resole_ varchar(50) NOT NULL,
  gender_ varchar(50) NOT NULL,
  weight_ varchar(50) NOT NULL
);
