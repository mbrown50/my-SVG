const inquirer = require('inquirer');
const fs = require('fs');

const filepath = "./SVG/";
let filename = "";

const sCircle = `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">l
    <circle cx="50" cy="50" r="40" stroke="red" stroke-width="4" fill="yellow" />`

const sSquare = `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">l
    <square cx="50" cy="50" r="40" stroke="blue" stroke-width="4" fill="yellow" />`

const sTriangle = `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">l
    <triangle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />`

function saveSVG(filename, data) {
    fs.writeFile(filepath + filename + '.svg', data, () => console.log("Created logo", filename));
}

let shapes = [];
shapes.push('circle', 'square', 'triangle');

// Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "text",
        message: "What is the 3 character graphic name?",
    },
    {
        type: "input",
        name: "tColor",
        message: "What is the text color?",
    },
    {
        type: "list",
        name: "shape",
        choices: shapes,
        message: "What shape?",
    },
    {
        type: "input",
        name: "sColor",
        message: "What is the shape color?",
    }
];

// Create a function to initialize app
async function init() {
    return await inquirer.prompt(questions)
        .then(async data => {
            // assign name, text color, shape, and shape color from input

            saveSVG("CIR", sCircle);
            saveSVG("SQU", sSquare);
            saveSVG("TRI", sTriangle);

            //return init(); // commment out if to only run once
        })
}

init();