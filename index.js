// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
function askReadMeQuestions() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is your username for GitHub? ",
            name: "username"
        },

        {
            type: "input",
            message: "What is your email address? ",
            name: "email"
        },

        {
            type: "input",
            message: "What is the title of your for your project? ",
            name: "title"
        },

        {
            type: "input",
            message: "Describe your project: ",
            name: "description"
        },

        {
            type: "input",
            message: "How do you install your project? ",
            name: "installation"
        },

        {
            type: "input",
            message: "How do you use your project? ",
            name: "usage"
        },

        {
            type: "input",
            message: "What are the contribution guidlines for the project? ",
            name: "contribution"
        },

        {
            type: "input",
            message: "What tests should be run on your code? ",
            name: "test"
        },

        {
            type: "list",
            message: "Which license will you use? ",
            choices: ["MIT", "GNU GPLv3", "ISC", "Mozilla Public License 2.0 MPL2.0", "Apache 2.0", "none"],
            name: "license"
        }
    ])
        .then(response => {
            const readmeData = prepReadmeObj(response);
            writeToFile("README.md", readmeData);
        })
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('README file has been created!')
    );
}

function getLicenseBadge (license) {
    if(license === "MIT"){
        return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    }
    else if (license === "GNU GPLv3") {
        return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    }
    else if (license === "Mozilla Public License 2.0 MPL2.0") {
        return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
    }
    else if ("ISC") {
        return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
    }
    else if (license === "Apache 2.0") {
        return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    }
    else {
        return "";
    }
}

function prepReadmeObj(readmeObj) {
    return `# ${readmeObj.title} ${getLicenseBadge(readmeObj.license)}

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

\nGitHub: [${readmeObj.username}](https://github.com/${readmeObj.username})

\nEmail: ${readmeObj.email}`;
}

// TODO: Create a function to initialize app
function init() {
    askReadMeQuestions();
}

// Function call to initialize app
init();