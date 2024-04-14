// Importing Triangle, Square, Circle classes from ./shapes.js
const { Triangle, Square, Circle } = require("./shape.js");

// Test triangle
describe("Triangle test", () => {
    test("Test triangle", () => {
      const shape = new Triangle('AAA', 'purple', 'red');
      shape.shapeColor("red");
      expect(triange.render()).toEqual(
        `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
            <polygon points="100, 15 200, 200 0, 200" fill="red"/>
            <text x="100" y="185" font-size="70" text-anchor="middle" fill="purple">AAA</text>
        </svg>`
      );
    });
  });
  
// Test square
describe("Square test", () => {
  test("Test square", () => {
    const squre = new Square('BBB', 'blue', 'green');
    expect(square.render()).toEqual(
    `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect width="200" height="200" fill="blue"/>
    <text x="100" y="125" font-size="70" text-anchor="middle" fill="blue">BBB</text>
</svg>`
    );
  });
});

// Test circle
describe("Circle test", () => {
  test("Test circle", () => {
    const shape = new Circle('CCC', 'orange', 'yellow');
    shape.shapeColor("green")
    expect(circle.render()).toEqual(
        `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="100" fill="yellow" />
        <text x="150" y="125" font-size="70" text-anchor="middle" fill="orange">CCC</text>
    </svg>`
    );
  });
});
