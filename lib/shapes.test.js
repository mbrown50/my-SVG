const Circle = require('./circle.js');
const Square = require('./square.js');
const Triangle = require('./triangle.js');

// Test triangle
describe("Triangle  test", () => {
    test("Test triangle ", () => {
        let newShape = new Triangle('AAA', 'purple', 'red');
        expect(newShape.render()).toEqual(
            `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="100, 15 200, 200 0, 200" fill="red"/>
        <text x="100" y="185" font-size="70" text-anchor="middle" fill="purple">AAA</text>
        </svg>`
        );
    });
});

// Test square
describe("Square test", () => {
    test("Test square", () => {
        let newShape = new Square('BBB', 'blue', 'green');
        expect(newShape.render()).toEqual(
            `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="200" fill="green"/>
        <text x="100" y="125" font-size="70" text-anchor="middle" fill="blue">BBB</text>
        </svg>`
        );
    });
});

// Test circle
describe("Circle test", () => {
    test("Test circle", () => {
        const newShape = new Circle('CCC', 'orange', 'yellow');
        expect(newShape.render()).toEqual(
            `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="100" fill="yellow"/>
        <text x="150" y="125" font-size="70" text-anchor="middle" fill="orange">CCC</text>
        </svg>`
        );
    });
});
