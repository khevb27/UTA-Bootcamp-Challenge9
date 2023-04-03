# UTA-Bootcamp-Challenge9
## Node.js Challenge: Professional README Generator
----------------------------------------------------------------------
## Description

When creating an open source project on GitHub, it's crucial to have a well-crafted README that provides detailed information about the application. The README should cover the purpose of the app, instructions on how to use it, how to install it, how to report issues, and how others can contribute to the project.

This is a command-line application that dynamically generates a professional README.md file from a user's input using the Inquirer package.

----------------------------------------------------------------------

## User Story

```
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project
```

## Acceptance Criteria

```
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
```
* "User Story" & "Acceptance Criteria" listed above have been provided by the UTA Bootcamp Program 2022.
----------------------------------------------------------------------

## Table of Contents

- [Installation](#installation)
- [Built Using](#built-using)
- [Preview](#preview)
- [Links](#links)
- [License](#license)

----------------------------------------------------------------------

## Installation

1. Clone/download git repository.
2. Run command "npm install inquirer"
3. Run command "node index.js" to test application.

#

## Built Using

- JavaScript
- Node.js
- Inquirer

#

## Preview

<img src= "assets/images/C9 Screenshot 1.png"/>
<img src= "assets/images/C9 Screenshot 2.png"/>
<img src= "assets/images/C9 Screenshot 3.png"/>

#

## Links

- Video Submission Link: https://drive.google.com/file/d/1-Yv5KAjYbwaRnYPta5Tfjkg9yflI5PMg/view?usp=sharing
- GitHub Repository Link: https://github.com/khevb27/UTA-Bootcamp-Challenge9 

----------------------------------------------------------------------
## License

Please refer to licensing documentation in the project repository.

<img src="https://img.shields.io/badge/license-MIT License-blue.svg" alt="GitHub License">

----------------------------------------------------------------------