class Employee {
    constructor(fName, lName, role, title, manager) {
        this.name = `${fName} ${lName}`;
        this.role = role;
        this.title = title;
        this.manager = manager;
    }

    getManager() {
        console.log(`Manager: ${this.manager}`)
    }

    getName() {
        console.log(`Name: ${this.name}`);
    }

    getTitle() {
        console.log(`Title: ${this.title}`)
    }

    getRole() {
        console.log(`Role: ${this.role}`)
    }
}

module.exports = Employee