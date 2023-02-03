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
        return connection.promise().query('SELECT title, id FROM role');
    }

    showEmployees() {
        
        return connection.promise().query('SELECT first_name, last_name, id FROM employee');
    }

    addDepartment(response) {


         return  connection.promise().query('INSERT INTO department(name) VALUES(?) ', response.name)

            
    }

    addRole() {}

    addEmployee(employee) {}

    updateRole() {}

}

module.exports = new DB(connection);
