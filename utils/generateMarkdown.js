// A  function that returns a license badge based on which license is passed in

const { default: prompt } = require("inquirer/lib/ui/prompt");

// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == "MIT") {
    return `![badgeimage](https://img.shields.io/badge/github-MIT-brightgreen)
    
    
    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the Software), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. THE SOFTWARE IS PROVIDED AS IS, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`

  }
  else if (license == "Apache") {
    return `![badgeimage](https://img.shields.io/badge/github-Apache-red)
    
    
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0 Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. `
  }
}

// A function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// A function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// A function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectname} 
${renderLicenseBadge(data.license)}

# DESCRIPTION
${data.description}

# TABLE OF CONTENTS
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## INSTALLATION
${data.installation}

## USAGE
${data.usage}

## CONTRIBUTING
${data.contributing}

## TESTS
${data.tests}

## LICENSE
${data.license}

### QUESTIONS
If you have any questions feel free to contact me, here is my 
GitHub Repo and email:
- ${data.username} 
- ${data.email}

`;
}

module.exports = generateMarkdown;