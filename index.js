// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const { writeFile } = require('fs').promises;

// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please provide a brief description of your project.',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What are the installation directions?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'What are the usage details?',
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'Please list all the contributors for this project.',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'What are the testing instructions?',
      },
      {
        type: 'list', // choose from list
        name: 'license',
        message: 'What license did you use?',
        choices: ['MIT', 'GNU', 'GPL']
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter your email address?',
      },
    ]);
  };

// TODO: Create a function to write README file
const generateREADME = ({title, description, installation, usage, contribution, tests, license, github, email }) =>
`# ${title}
## Description
 ${description}
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Contributions](#Contributions)
- [Tests](#tests)
- [Questions](#questions)
## Installation
${installation}
## Usage
${usage}
## Credits
> List your collaborators, if any, with links to their GitHub profiles. 
> If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.
> If you followed tutorials, include links to those here as well.
## License
Please see LICENSE file.
![${license}](https://img.shields.io/badge/license-${license}-blue.svg)
## Contributions
${contribution}
## Tests
${tests}
## Questions?
Find me on GitHub here: https://github.com/${github}
Or send me an email: ${email}
`;

// TODO: Create a function to initialize app
const init = () => {
    promptUser()
    .then((answers) => writeFile('README-demo.md', generateREADME(answers)))
    .then(() => console.log('Wrote to README-demo.md'))
    .catch((err) => console.error(err));
}

// Function call to initialize app
init();