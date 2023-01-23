// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license){
  return `![license](https://img.shields.io/badge/license-${license}-brightgreen)`;
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${title}
  ${renderLicenseBadge()}
  ## Description
  ${description}
  
  ## Table of Contents
  [Installation](#installation)
  [Usage](#usage)
  ${renderLicenseLink()}
  [Contributing](#contributing)
  [Tests](#tests)
  [Questions](#questions)
  
  ## Installation
  ${installation}
  
  ## Usage
  ${usage}
  
  ${renderLicenseSection()}
  
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
