USE employees_db;


INSERT INTO department (name)
VALUES ( "Customer Service"),
       ( "Sales"),
       ( "Tech"),
       ( "House Call"),
       ( "Human Resources");

INSERT INTO role (title, salary, department_id)
VALUES ( "Customer Service Clerk", "30000.00", 1),
       ( "Shift Lead", "45000.00", 2),
       ( "Cashier", "25000.00", 1),
       ( "Data Analyst", "46000.00", 3),
       ( "Node.js Developer", "175000.00", 3);


INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ( "Johnny", "Bravo", 1, NULL),
       ( "Tommy", "Pickles", 2, 1),
       ( "Hey", "Arnold", 3, 1),
       ( "George", "Jetson", 4, 1),
       ( "Wilma", "Flintstone", 5, 1);

