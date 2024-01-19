// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const usernameQuestion = {
    type: "input",
    message: "What is your username for GitHub? ",
    name: "username"
};

const emailQuestion = {
    type: "input",
    message: "What is your email address? ",
    name: "email"
};

const titleQuestion = {
    type: "input",
    message: "What is the title of your for your project? ",
    name: "title"
};

const descriptionQuestion = {
    type: "input",
    message: "Describe your project: ",
    name: "description"
};

const installationQuestion = {
    type: "input",
    message: "How do you install your project? ",
    name: "installation"
};

const usageQuestion = {
    type: "input",
    message: "How do you use your project? ",
    name: "usage"
};

const contributionQuestion = {
    type: "input",
    message: "What are the contribution guidlines for the project? ",
    name: "contribution"
};

const testQuestion = {
    type: "input",
    message: "What tests should be run on your code? ",
    name: "test"
};

const licenseQuestion = {
    type: "list",
    message: "Which license will you use? ",
    choices: ["MIT", "GNU GPLv3", "ISC", "Mozilla MPL2.0", "Microsoft Public License MS-PL", "none"],
    name: "license"
};

async function askForUsername(){
    const { username } = await inquirer.prompt([ usernameQuestion ]);
    askForEmail({username});
};

async function askForEmail(obj){
    const { email } = await inquirer.prompt([ emailQuestion ]);
    askForTitle({...obj, email});
};

async function askForTitle(obj){
    const { title } = await inquirer.prompt([ titleQuestion ]);
    askForDescription({...obj, title});
};

async function askForDescription(obj){
    const { description } = await inquirer.prompt([ descriptionQuestion ]);
    askForInstallation({...obj, description});
};

async function askForInstallation(obj){
    const { installation } = await inquirer.prompt([ installationQuestion ]);
    askForUsage({...obj, installation});
};

async function askForUsage(obj){
    const { usage } = await inquirer.prompt([ usageQuestion ]);
    askForContribution({...obj, usage});
};

async function askForContribution(obj){
    const { contribution } = await inquirer.prompt([ contributionQuestion ]);
    askForTest({...obj, contribution});
};

async function askForTest(obj){
    const { test } = await inquirer.prompt([ testQuestion ]);
    askForLicense({...obj, test});
};

async function askForLicense(obj){
    const { license } = await inquirer.prompt([ licenseQuestion ]);

    const readmeData = prepReadmeObj({...obj, license});

    writeToFile("README.md", readmeData);
};


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
  err ? console.error(err) : console.log('README file has been created!')
);
}

function prepReadmeObj (readmeObj) {
    return `# ${readmeObj.title}

## Description
${readmeObj.description}
    
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Badges](#badges)
- [Features](#features)
- [How to Contribute](#How-to-Contribute)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${readmeObj.installation}

## Usage
${readmeObj.usage}

## Credits


## License
${readmeObj.license}

## Badges

## Features

## How to Contribute
${readmeObj.contribution}

# Tests
${readmeObj.test}

# Questions
Please email me with any questions or concerns.
GitHub: [${readmeObj.username}](https://github.com/${readmeObj.username})
Email: ${readmeObj.email}`;
}

// TODO: Create a function to initialize app
function init() {
    askForUsername();
}

// Function call to initialize app
init();
