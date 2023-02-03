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
                                     
                
            inquirer.prompt([
                {
                    type: 'input',
                    message: 'What role would you like to add?',
                    name: 'title',
                },
                {
                    type: 'input',
                    message: 'What is the salary for this role?',
                    name: 'salary',
                },
                {
                    type: 'input',
                    message: 'Which department is this role in?',
                    name: 'department',
                },
            ]).then((response) => {
            DB.addRole(response)
            }).then( ()=> {
                loadPrompts()
            })
        } else if (option === 'Add an employee') {

            inquirer.prompt([
                {
                    type: 'input',
                    message: 'What is the first name of this employee?',
                    name: 'fname',
                },
                {
                    type: 'input',
                    message: 'What is the last name for this employee?',
                    name: 'lname',
                },
                {
                    type: 'input',
                    message: 'What is the role of this employee?',
                    name: 'role',
                },
                {
                    type: 'input',
                    message: 'Who is the manager for this employee?',
                    name: 'manager',
                },
            ]).then((responses) => {
            DB.addEmployee(responses)}).then( ()=> {
                loadPrompts()
            })
        } else if (option === 'Update a role') {
            inquirer.prompt([
                {
                    type: 'input',
                    message: 'What role would you like to update?',
                    name: 'title',
                },
                {
                    type: 'input',
                    message: 'What is the salary for this role?',
                    name: 'salary',
                },
                {
                    type: 'input',
                    message: 'Which department is this role in?',
                    name: 'department',
                },
            ]).then((responses) => {
                    DB.updateRole(responses).then( () => {
                    loadPrompts()
                })
            })
        } else if (option === 'Quit'){
            return    `Goodbye!`
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