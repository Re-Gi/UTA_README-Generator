// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return license ? `![license](https://img.shields.io/badge/license-${license}-brightgreen)` : ``;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return license ? `
  - [License](#license)` : ``;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return (license) ? `
  ## License 
  This project is covered under the ${license} license.
  ` : ``;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown({title, description, installation, usage, contribution, tests, license, github, email, questions}) {
  return `# ${title}
  ${renderLicenseBadge(license)}
  ## Description
  ${description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage) ${renderLicenseLink(license)}
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  ${installation}
  
  ## Usage
  ${usage}
  ${renderLicenseSection(license)}
  ## Contributing
  ${contribution}
  
  ## Tests
  ${tests}
  
  ## Questions
  ${questions}
  
  Visit my GitHub: [${github}](https://github.com/${github})
  Send me an email at: ${email}
  
`;
}

module.exports = generateMarkdown;
