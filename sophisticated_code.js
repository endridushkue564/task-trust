/* 
 * File Name: sophisticated_code.js
 * Description: An elaborate and complex JavaScript code that demonstrates advanced concepts and techniques
 */

// Constants
const PI = 3.14159;
const GRAVITY = 9.8;

// Function to calculate the circumference of a circle
function calculateCircumference(radius) {
  return 2 * PI * radius;
}

// Function to calculate the area of a circle
function calculateArea(radius) {
  return PI * Math.pow(radius, 2);
}

// Class definition for a shape
class Shape {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  getArea() {
    throw new Error("Unsupported operation: getArea");
  }

  getCircumference() {
    throw new Error("Unsupported operation: getCircumference");
  }
}

// Class definition for a Circle shape
class Circle extends Shape {
  constructor(name, radius) {
    super(name);
    this.radius = radius;
  }

  getArea() {
    return calculateArea(this.radius);
  }

  getCircumference() {
    return calculateCircumference(this.radius);
  }
}

// Class definition for a Rectangle shape
class Rectangle extends Shape {
  constructor(name, width, height) {
    super(name);
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }

  getCircumference() {
    return 2 * (this.width + this.height);
  }
}

// Class definition for a Triangle shape
class Triangle extends Shape {
  constructor(name, base, height) {
    super(name);
    this.base = base;
    this.height = height;
  }

  getArea() {
    return 0.5 * this.base * this.height;
  }

  getCircumference() {
    throw new Error("Unsupported operation: getCircumference");
  }
}

// Function to calculate the gravitational potential energy
function calculateGravitationalPotentialEnergy(mass, height) {
  return mass * GRAVITY * height;
}

// Example usage of the code above
const myCircle = new Circle("My Circle", 5);
console.log("Circle Name:", myCircle.getName());
console.log("Circle Area:", myCircle.getArea());
console.log("Circle Circumference:", myCircle.getCircumference());

const myRectangle = new Rectangle("My Rectangle", 4, 6);
console.log("Rectangle Name:", myRectangle.getName());
console.log("Rectangle Area:", myRectangle.getArea());
console.log("Rectangle Circumference:", myRectangle.getCircumference());

const myTriangle = new Triangle("My Triangle", 3, 8);
console.log("Triangle Name:", myTriangle.getName());
console.log("Triangle Area:", myTriangle.getArea());

const mass = 10;
const height = 20;
console.log("Gravitational Potential Energy:", calculateGravitationalPotentialEnergy(mass, height));

// ... More complex and creative code follows here ...