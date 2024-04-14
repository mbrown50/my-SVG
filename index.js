const inquirer = require('inquirer');
const fs = require('fs');
const drawShape = require('./lib/drawShape.js')

const filepath = "./SVG/";
let filename = "";

function saveSVG(data) {
    console.log("saveSVG fs");
    const svgShape = drawShape(data);
    console.log("svgShape", svgShape);
    fs.writeFile(filepath + filename + '.svg', svgShape, () => console.log("Created logo", filename));
}

let shapesList = [];
shapesList.push('triangle', 'square', 'circle');

// Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "text",
        message: "What is the 3 character graphic name?",
    },
    {
        type: "input",
        name: "textColor",
        message: "What is the text color?",
    },
    {
        type: "list",
        name: "shape",
        choices: shapesList,
        message: "What shape?",
    },
    {
        type: "input",
        name: "shapeColor",
        message: "What is the shape color?",
    }
];

// Create a function to initialize app
async function init() {
    return await inquirer.prompt(questions)
        .then(async data => {
            console.log("Response:",data);
            // assign name, text color, shape, and shape color from input
            saveSVG(data);

            //return init(); // commment out if to only run once
        })
        .catch(err => {
            console.log("Error:", err);
        })
};

init();