//packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");

//array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is your projects name?',
        name: 'projectname',
    },

    {
        type: 'input',
        message: 'Please write a short description of your project',
        name: 'description',
    },
    {
        type: 'list',
        message: 'What kind of license should your project have?',
        name: 'license',
        choices: ["MIT", "Apache", "none"]
    },
    {
        type: 'input',
        message: 'What command should be run to install dependencies?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'What command should be run to run tests?',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'What does the user need to know about using the repo?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'What does the user need to know about contributing to the repo?',
        name: 'contributing',
    },
];

//function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('Successfully created README.md')
    );
}

//function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            console.log(data);
            const filename = `${data.projectname.toLowerCase().split(' ').join('')}.md`;
            console.log(filename);
            const template = generateMarkdown(data);
            writeToFile(filename, template);
        });
}

// Function call to initialize app
init();




