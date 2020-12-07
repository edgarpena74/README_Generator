// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${data.license === "None" ? "": `![GitHub license](https://img.shields.io/badge/license-${data.license}-blue.svg)`}
## Description 
${data.description}

## Table of Contents
* [Installation Instructions](#Installation_Instructions)
* [usage Information](#Usage_Information)
* [Tests](#Tests)
* [Questions](#Questions)
* [License](#License)
* [Contributers](#contributers)


## Installation_Instructions
${data.installation}

## Usage_Information
${data.usage}

## Tests
${data.test}

## Questions
${data.questions}
${data.email}

## License
${data.license}

## Contributers
${data.contributing}
`;
}

module.exports = generateMarkdown;
