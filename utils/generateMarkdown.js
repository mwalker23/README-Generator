// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if ( license == "MIT") {
    return `![badgeimage](https://img.shields.io/badge/github-MIT-brightgreen)`
  } 
  else if (license == "Apache") {
    return `![badgeimage](https://img.shields.io/badge/github-Apache-red)`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// A function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectname} 
${renderLicenseBadge(data.license)}

## DESCRIPTION
${data.description}

## TABLE OF CONTENTS
${data.contents}

## INSTALLATION
${data.installation}

## USAGE
${data.usage}

## LICENSE
${data.license}

## CONTRIBUTING
${data.contributing}

## TESTS
${data.tests}

### QUESTIONS
${data.questions}

`;
}

module.exports = generateMarkdown;