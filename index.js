const fs = require('fs');
const employee = require('./tests/employee.test');
const Engineer = require('./tests/engineer.test');
const Intern = require('./tests/intern.test');
const Manager = require('./tests/manager.test');
const generateHTML = require('');

const employeepropt = [
    {
        type: 'input',
        name: 'name',
        message: 'Please enter the name of the employee\n' ,
    },
    {
        type: 'input',
        name: 'id',
        message: 'Enter the employee id for the employee.\n'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter the manager email.\n',
        validate(value) {
            const pass = value.match(/^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/i);
            if (pass) {
                return true;
            }
            return 'Please enter a valid email!'
        }
    }, 
    {
        type: 'input',
        name: 'officeNumber',
        message: "Please enter the Manager's office number.\n"
    }
];

const newEngineerPrompt = [
    {
        type: 'input',
        name: 'name',
        message: 'Please enter the name of the Engineer\n',
    },
    {
        type: 'input',
        name: 'id',
        message: 'Enter the employee id for the Engineer.\n'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter the employee email.\n',
        validate(value) {
            const pass = value.match(/^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/i);
            if (pass) {
                return true;
            }
            return 'Please enter a valid email!'
        }
    }, 
    {
        type: 'input',
        name: 'github',
        message: "Please enter the Engineers GitHub username.\n"
    }
];

const newInternPrompt = [
    {
        type: 'input',
        name: 'name',
        message: 'Please enter the name of the intern\n',
    },
    {
        type: 'input',
        name: 'id',
        message: 'Enter the employee id for the intern.\n'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter the employee email.\n',
        validate(value) {
            const pass = value.match(/^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/i);
            if (pass) {
                return true;
            }
            return 'Please enter a valid email!'
        }
    }, 
    {
        type: 'input',
        name: 'school',
        message: "Please enter the Interns School.\n"
    }
];

const managerPrompt = [
    {
        type: 'input',
        name: 'name',
        message: 'Welcome to the Organization Vizualization tool\nPlease enter the name of the Manager of the Organization\n',
    },
    {
        type: 'input',
        name: 'id',
        message: 'Enter the employee id for the Manager.\n'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter the manager email.\n',
        validate(value) {
            const pass = value.match(/^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/i);
            if (pass) {
                return true;
            }
            return 'Please enter a valid email!'
        }
    }, 
    {
        type: 'input',
        name: 'officeNumber',
        message: "Please enter the Manager's office number.\n"
    }
];

const newEmpPrompt = [
    {
        type: "list",
        name: "employeeType",
        message: "Would you like to add an employee to the organization?\n",
        choices: [
            "Add an Engineer.",
            "Add an Intern.",
            new inquirer.Separator(),
            "No, I am done.",
        ],
    },
]

function newEngineer() {
    inquirer.prompt(newEngineerPrompt).then((answers) =>{
        organization.push(new Engineer(answers.name, answers.id, answers.email, answers.github));
    newEmp();
    });
};

function newIntern() {
    inquirer.prompt(newInternPrompt).then((answers) =>{
        organization.push(new Intern(answers.name, answers.id, answers.email, answers.school));
    newEmp();
    });
};

function makePage(orgData) {
    fs.writeFile('./dist/team.html', generateHTML(orgData), (err) =>   
    err ? console.error(err) : console.log('success!'))
    };

