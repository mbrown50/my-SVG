// Draws the shape
const Circle = require('./circle.js');
const Square = require('./square.js');
const Triangle = require('./triangle.js');

function drawShape(data) {

    if (data.shape === 'circle') {
        let newShape = new Circle (data.text, data.textColor, data.shapeColor);
        return newShape.render();
    }
    if (data.shape === 'square') {
        let newShape = new Square (data.text, data.textColor, data.shapeColor);
        return newShape.render();
    }
    if (data.shape === 'triangle') {
        let newShape = new Triangle (data.text, data.textColor, data.shapeColor);
        return newShape.render();
    }
    else {
        console.log("Error in shape.");
    }
};

module.exports = drawShape;