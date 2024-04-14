// child class to parent shape
const Shape = require('./shape.js')

console.log("circle");

// child of Shape, render Triangle using svg literal template
class Triangle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }; 
    render() {
        return `
        <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
            <polygon points="100, 15 200, 200 0, 200" fill="${this.shapeColor}"/>
            <text x="100" y="185" font-size="70" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>
        `
    };
};

module.exports = Triangle;