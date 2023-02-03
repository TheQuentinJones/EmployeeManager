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

function loadPrompts() {

    inquirer.prompt(optionsArray)
    .then(({option}) => {
        if (option === 'View all departments' ) {
            DB.showDepartments().then( ([results])=> {
                console.table(results)
            }).then( ()=> {
                loadPrompts()
            })
        } else if (option === 'View all roles') {
            DB.showRoles().then( ([results])=> {
                console.table(results)
            }).then( ()=> {
                loadPrompts()
            })
        } else if (option === 'View all employees') {
            DB.showEmployees().then( ([results])=> {
                console.table(results)
            }).then( ()=> {
                loadPrompts()
            })
            
        } else if (option === 'Add a department') {
            inquirer.prompt([
                {
                    type: 'input',
                    message: 'What is the name of the department?',
                    name: 'name'
                }
            ]).then((response) => {
            DB.addDepartment(response)
            }).then( ()=> {
                loadPrompts()
            })
        } else if (option === 'Add a role') {
            DB.addRole().then( ([results])=> {
                console.table(results)
            }).then( ()=> {
                loadPrompts()
            })
        } else if (option === 'Add an employee') {
            DB.addEmployee().then( ([results])=> {
                console.table(results)
            }).then( ()=> {
                loadPrompts()
            })
        } else if (option === 'Update an employee role') {
            DB.updateRole().then( ([results])=> {
                console.table(results)
            }).then( ()=> {
                loadPrompts()
            })
        } else if (option === 'Quit'){
            DB.quitNow()       
        } else {
            console.log('We are having technical difficulties!!')
            
        }
    })
      
     

    
}

function init() {
    console.log('initializing project')
    loadPrompts()
}

init()