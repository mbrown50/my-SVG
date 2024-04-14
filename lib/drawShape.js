// Draws the shape

const Circle = require('./circle.js');
const Square = require('./square.js');
const Triangle = require('./triangle.js');

/*
{
  text: 'SDF',
  textColor: 'red',
  shape: 'triangle',
  shapeColor: 'blue'
}
*/

console.log("drawShape");

function drawShape(data) {

    if (data.shape === 'Circle') {
        console.log("draw circle");
        let newShape = new Circle (data.text, data.textColor, data.shapeColor);
        return circle.render();
    }

    if (data.shape === 'Square') {
        console.log("draw square");
        let newShape = new Square (data.text, data.textColor, data.shapeColor);
        return squareShape.render();
    }

    if (data.shape === 'Triangle') {
        console.log("draw triange");
        let triangleShape = new Triangle (data.text, data.textColor, data.shapeColor);
        return triangleShape.render();
    }
};

module.exports = drawShape;