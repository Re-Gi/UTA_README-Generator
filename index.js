// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
inquirer.prompt([
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Write a short description of your project: ',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Provide installation instructions: ',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Provide usage information: ',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Provide contribution guidelines: ',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'Provide test instructions: ',
        name: 'tests',
    },
    {
        type: 'list',
        message: 'Which license are you using? ',
        name: 'license',
        choices: [],
    },
    {
        type: 'input',
        message: 'What is your GitHub username? ',
        name: 'github',
    },
    {
        type: 'input',
        message: 'What is your email address? ',
        name: 'email',
    },
    {
        type: 'input',
        message: 'How should people reach out to you with additional questions? ',
        name: 'questions',
    },
  ])
  // TODO: Create a function to write README file
  .then((response) => {
    fs.writeFile('README.md', generateMarkdown(response), (err) =>
        err ? console.log(err) : console.log('Success'))
})

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
