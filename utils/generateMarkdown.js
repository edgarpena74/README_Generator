// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${data.license === "None" ? "": `![GitHub license](https://img.shields.io/badge/license-${data.license}-blue.svg)`}
## Description 
${data.description}

## Table of Contents
* [License](#license)
* [Contributers](#contributing)

## License
${data.license}

## Contributers
${data.contributing}
`;
}

module.exports = generateMarkdown;
