CREATE SCHEMA `try` ;

CREATE TABLE `try`.`new_table` (
  `customer_ID` VARCHAR(100) NOT NULL,
  `account name` VARCHAR(100) NULL,
  `passeord` VARCHAR(100) NULL,
  `mail` VARCHAR(45) NULL,
  PRIMARY KEY (`customer_ID`));

CREATE TABLE `try`.`new_table_2` (
  `thing_name` VARCHAR(100) NOT NULL,
  `quantity` VARCHAR(45) NULL,
  `price` VARCHAR(45) NULL,
  PRIMARY KEY (`thing_name`));
