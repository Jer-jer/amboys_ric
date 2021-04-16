CREATE SCHEMA ricsystem;

USE ricsystem;

CREATE TABLE employee(
	employeeID int(10) NOT NULL, 
	employeeLname varchar(20) NOT NULL,
	employeeFname varchar(15) NOT NULL,
	employeeEmail varchar(50) NOT NULL,
	employeePassword varchar(500) NOT NULL,
	contactNo varchar(20) NOT NULL,
	jobTitle enum('manager', 'cashier', 'waiter') NOT NULL,

	PRIMARY KEY(employeeID)
);

CREATE TABLE customers(
	customerID varchar(10) NOT NULL,
	customerName varchar(10) NOT NULL,
	customerEmail varchar(50) NOT NULL,
	customerMobile varchar(20) NOT NULL,

	PRIMARY KEY(customerID)
);

CREATE TABLE products(
	productID int(10) NOT NULL,
	productName varchar(15) NOT NULL,
	productQuantity int(10) NOT NULL,
	price float(50) NOT NULL,
	stats enum('available', 'not available', 'out of stock') NOT NULL,
	
	PRIMARY KEY(productID)
);

CREATE TABLE orders(
	orderID varchar(10) NOT NULL,
	customerID varchar(10) NOT NULL,
	productID int(10) NOT NULL,
	orderDate DATE NOT NULL,
	orderQuantity int(10) NOT NULL,
	total float(50) NOT NULL,
	stats enum('paid', 'not yet paid') NOT NULL,

	PRIMARY KEY(orderID),
	FOREIGN KEY(productID) REFERENCES products(productID),
	FOREIGN KEY(customerID) REFERENCES customers(customerID)
);

CREATE TABLE payment(
	checkID varchar(10) NOT NULL,
	orderID varchar(10) NOT NULL,
	customerID varchar(10) NOT NULL,
	paymentDate DATE NOT NULL,
	amount float(50) NOT NULL,

	PRIMARY KEY(checkID),
	FOREIGN KEY(orderID) REFERENCES orders(orderID),
	FOREIGN KEY(customerID) REFERENCES customers(customerID)
);

INSERT INTO employee VALUES (2897564, "BARGAMENTO", "ALLAN JERICHO", "jerichoallan0@gmail.com", "123456", "09458034816", "manager");




