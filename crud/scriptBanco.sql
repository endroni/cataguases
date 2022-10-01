DROP DATABASE db_crud_node;
CREATE DATABASE db_crud_node;
USE db_crud_node;

CREATE TABLE cliente(
	id INT(11) PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50),
    idade INT(4)
);
