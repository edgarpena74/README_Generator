//make inquirer into a variable to use it as a global varible
// otherwise you would need to keep writing require("inquirer")
const inquirer = require("inquirer");
//fs is file system
const fs = require("fs");
const path = require("path");
const { join } = require("path");
const generateMarkdown = require("./utils/generateMarkdown");
const Choices = require("inquirer/lib/objects/choices");
// array of questions for user
const questions = [
    {
        type:"input",
        name:"Title",
        message: "what is the projects title?"
    },
    {
        type:"input",
        name:"Description",
        message: "Describe the project:"
    },
    {
        type:"list",
        name:"license",
        message: "app Licenses:",
        choices: ["MIT","ISC","Apache-2.0","None"]
    },
    {
        type:"input",
        name:"contributing",
        message: "contributing:"
    },
    // {
    //     type:"list",
    //     name:"License",
    //     message: "app Licenses:"
    // }




];

// function to write README file
function writeToFile(fileName, data) {
    //underscore underscore dirname is where you are at
    return fs.writeFileSync(path.join(__dirname,fileName), data)
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
    //.then is waiting for the prompt to finish and then the response is waiting for the user to finish
    //you use promises when you are waiting on user input or a url(like api's)
    .then (res => {
        console.log(res)
        writeToFile("README.md",generateMarkdown(res))
    })
}

// function call to initialize program
init();
