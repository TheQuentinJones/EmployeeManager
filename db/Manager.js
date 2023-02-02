const Employee = require('./Employees');

class Manager extends Employee {
    constructor(fName, lName, role, title) {
        super(fName, lName, role, title, manager)
        
    }

}

module.exports = Manager