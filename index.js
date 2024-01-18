// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const usernameQuestion = {
    type: "input",
    message: "What is your username for GitHub?\n",
    name: "username"
};

const emailQuestion = {
    type: "input",
    message: "What is your email address?\n",
    name: "email"
};

const titleQuestion = {
    type: "input",
    message: "What is the title of your for your project?\n",
    name: "title"
};

const descriptionQuestion = {
    type: "input",
    message: "Describe your project: ",
    name: "description"
};

const installationQuestion = {
    type: "input",
    message: "How do you install your project?\n",
    name: "installation"
};

const useageQuestion = {
    type: "input",
    message: "How do you use your project?\n",
    name: "useage"
};

const contributionQuestion = {
    type: "input",
    message: "What are the contribution guidlines for the project?\n",
    name: "contribution"
};

const testQuestion = {
    type: "input",
    message: "What tests should be run on your code?\n",
    name: "test"
};

const licenseQuestion = {
    type: "list",
    message: "Which license will you use?\n",
    choices: ["MIT", "GNU GPLv3", "ISC", "Mozilla MPL2.0", "none"],
    name: "license"
};


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('README.md', data, (err) =>
  err ? console.error(err) : console.log('README file has been created!')
);
}

// TODO: Create a function to initialize app
function init() {
    
}

// Function call to initialize app
init();
