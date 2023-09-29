// 24. Write a menu driven program to calculate the area of a given object.

const prompt =require ("prompt-sync")({sigint:true})

class Area {
    circle(radius) {
      return Math.PI * radius * radius;
    }
  
    square(side) {
      return side * side;
    }
  
    rectangle(length, width) {
      return length * width;
    }
  
    triangle(base, height) {
      return (base * height) / 2;
    }
  }
  
  class MyClass extends Area {
    constructor() {
      super();
    }
  
    main() {
      console.log("Enter your choice:");
      console.log("1. Circle");
      console.log("2. Square");
      console.log("3. Rectangle");
      console.log("4. Triangle");
  
      const choice = parseInt(prompt("Enter your choice: "));
  
      switch (choice) {
        case 1:
          this.circleArea();
          break;
        case 2:
          this.squareArea();
          break;
        case 3:
          this.rectangleArea();
          break;
        case 4:
          this.triangleArea();
          break;
        default:
          console.log("Invalid choice.");
      }
    }
  
    circleArea() {
      const radius = parseFloat(prompt("Enter the radius: "));
      const area = this.circle(radius);
      console.log(`Area of the circle is: ${area.toFixed(2)}`);
    }
  
    squareArea() {
      const side = parseFloat(prompt("Enter the side length: "));
      const area = this.square(side);
      console.log(`Area of the square is: ${area}`);
    }
  
    rectangleArea() {
      const length = parseFloat(prompt("Enter the length: "));
      const width = parseFloat(prompt("Enter the width: "));
      const area = this.rectangle(length, width);
      console.log(`Area of the rectangle is: ${area}`);
    }
  
    triangleArea() {
      const base = parseFloat(prompt("Enter the base length: "));
      const height = parseFloat(prompt("Enter the height: "));
      const area = this.triangle(base, height);
      console.log(`Area of the triangle is: ${area}`);
    }
  }
  
  function main() {
    const myClass = new MyClass();
    myClass.main();
  }
  
  main();