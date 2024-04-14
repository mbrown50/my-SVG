// child class to parent shape
console.log("circle");

const Shape = require('./shape.js')

class Circle extends Shape { 
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    };
    render() {
        return  `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="100" fill="${this.shapeColor}" />
            <text x="150" y="125" font-size="70" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`
    };
};

module.exports = Circle;