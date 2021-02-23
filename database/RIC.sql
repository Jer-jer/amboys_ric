CREATE SCHEMA ricsystem;

USE ricsystem;

CREATE TABLE employee(
	employeeID int(10),
	employeeLname varchar(20),
	employeeFname varchar(15),
	contactNo int(11),
	jobTitle varchar(15),

	PRIMARY KEY(employeeID)
);

CREATE TABLE customers(
	customerID int(10),
	customerName varchar(10),

	PRIMARY KEY(customerID)
);

CREATE TABLE productDetails(
	productNum int(10),
	description varchar(25),

	PRIMARY KEY(productNum)
);

CREATE TABLE orders(
	orderID int(10),
	customerID int(10),
	orderDate DATE,
	status varchar(10),

	PRIMARY KEY(orderID),
	FOREIGN KEY(customerID) REFERENCES customers(customerID)
);

CREATE TABLE payment(
	customerID int(10),
	checkNum int(10),
	paymentDate DATE,
	amount float,

	PRIMARY KEY(customerID),
	FOREIGN KEY(customerID) REFERENCES customers(customerID)
);

CREATE TABLE products(
	productID int(10),
	productName varchar(15),
	productNUm int(10),
	
	PRIMARY KEY(productID),
	FOREIGN KEY(productNum) REFERENCES productDetails(productNum)
);


CREATE TABLE orderDetails(
	orderID int(10),
	productID int(10),
	orderQuantity int(10),
	price float,
	productNum int(10),

	PRIMARY KEY(orderID),
	FOREIGN KEY(orderID) REFERENCES orders(orderID),
	FOREIGN KEY(productID) REFERENCES products(productID),
	FOREIGN KEY(productNum) REFERENCES productDetails(productNum)
);




