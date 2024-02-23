const {
  squareArea,
  squarePerimeter,
  rectangleArea,
  rectanglePerimeter,
} = require("./shapes.js");

const side = 5;
const length = 6;
const width = 8;

const areaOfSquare = squareArea(side);
console.log(`Area of Square: ${areaOfSquare} cm`);

const perimeterOfSquare = squarePerimeter(side);
console.log(`Perimeter of Square: ${perimeterOfSquare} cm`);

const areaOfRectangle = rectangleArea(length, width);
console.log(`Area of Rectangle: ${areaOfRectangle} cm`);

const perimeterOfRectangle = rectanglePerimeter(length, width);
console.log(`Perimeter of Rectangle: ${perimeterOfRectangle} cm`);




