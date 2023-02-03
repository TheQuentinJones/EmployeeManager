const inquirer = require('inquirer')
const connection = require('../config/connection.js')



class DB {

    constructor (connection) {
        this.connection = connection;
    }

    showDepartments() {
        return connection.promise().query('SELECT name, id FROM department');
    }

    showRoles() {
        return connection.promise().query('SELECT * FROM role');
    }

    showEmployees() {
        
        return connection.promise().query('SELECT * FROM employees');
    }

    addDepartment(response) {


         return  connection.promise().query('INSERT INTO department(name) VALUES(?) ', response.name)

            
    }

    addRole(response) {
        return connection.promise().query(`INSERT INTO role(title, salary, department_id) VALUES ('${response.title}', '${response.salary}', '${response.department}')`)
    }

    addEmployee(response) {

        return connection.promise().query(`INSERT INTO employees(first_name, last_name, role_id, manager_id) VALUES ('${response.fname}', '${response.lname}', '${response.role}', '${response.manager}')`)
    }

    updateRole(responses) {
        return connection.promise().query(`UPDATE role(title, salary, department_id) VALUES ('${responses.title}', '${responses.salary}', '${responses.department}');`)
    }


}

module.exports = new DB(connection);
