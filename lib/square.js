// child class to parent shape
const Shape = require('./shape.js')

// child of Shape, render Square using svg literal template
class Square extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    };

    render() {
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="200" fill="${this.shapeColor}"/>
        <text x="100" y="125" font-size="70" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`
    };
};

module.exports = Square;