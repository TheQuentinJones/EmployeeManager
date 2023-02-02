const inquirer = require('inquirer')
const Employee = require('./Employees.js')
const Departments = require('./Departments.js')
const Roles = require('./Roles.js')
const Manager = require('./Manager.js')
const connection = require('./connection.js')

updatesToTheSystem = []

class DB {

    constructor (connection) {
        this.connection = connection;
    }

    showDepartments() {}

    showRoles() {}

    showEmployees() {
        return connection.promise().query('SELECT first_name, last_name, id FROM employee');
    }

    addDepartment(department) {}

    addRole(role) {}

    addEmployee(employee) {}

    updateRole() {}

}

module.exports = new DB(connection);
