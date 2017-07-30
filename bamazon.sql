
DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(100) NOT NULL,
  price DECIMAL (10,2) NOT NULL,
  stock_quantity INT(10) NOT NULL,
  PRIMARY KEY(item_id)
);

SELECT * FROM products;

INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("Amazon Fire Stick" , "Electronics", 39.99, 100),
("Huggies Diapers", "Baby", 29.99, 50),
("Toilet Paper", "House", 25.00, 75),
("Arrowhead Water", "Grocery",12.75, 45),
("iPhone Case", "Accesories", 15.53, 30),
("Wireless Security Camera", "Home", 50.89, 32),
("Disco Ball light", "Party", 11.81, 50),
("Drone", "Camera", 999.99, 15),
("Animal Fur Brush", "Pets", 13.17, 47),
("Fitness Tracker", "Fitness", 49.98, 79);