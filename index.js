const DB = require('./db/index.js')
const inquirer = require('inquirer')

optionsArray = 

[
    {
        type: 'list',
        message: 'What would you like to do?',
        choices: 

        [
            'View all departments',
            'View all roles',
            'View all employees',
            'Add a department',
            'Add a role',
            'Add an employee',
            'Update an employee role',
            'Quit'
        ],

        name: 'option',
    },
]

function showDepartments() {

}

function showRoles() {

}

// function showEmployees() {

//     DB.showEmployees()

//     loadPrompts()
// }

function addDepartment() {

}

function addRole() {

}

function addEmployee() {

}

function updateRole() {

}

function quitNow() {

}

function loadPrompts() {

    inquirer.prompt(optionsArray)
    .then(({option}) => {
        if (option === 'View all departments' ) {
            showDepartments()
        } else if (option === 'View all roles') {
            showRoles()
        } else if (option === 'View all employees') {
            DB.showEmployees().then( ([results])=> {
                console.table(results)
            }).then( ()=> {
                loadPrompts()
            })
            
        } else if (option === 'Add a department') {
            console.log('Why do you want to add a department?')
            addDepartment()
        } else if (option === 'Add a role') {
            addRole()
        } else if (option === 'Add an employee') {
            addEmployee()
        } else if (option === 'Update an employee role') {
            updateRole()
        } else if (option === 'Quit'){
            quitNow()       
        } else {
            console.log('We are having technical difficulties!!')
            
        }
    }).then((data) => {
        updatesToTheSystem.push(data)
    }) 

    
}

function init() {
    console.log('initializing project')
    loadPrompts()
}

init()