// 17. Write a menu driven program to do the basic mathematical operations such as
//    addition, subtraction, multiplication and division (hint: use if else ladder or switch)

const prompt = require("prompt-sync")({ sigint: true });

class Calculator {
    addition(num1, num2) {
      return num1 + num2;
    }
  
    subtraction(num1, num2) {
      return num1 - num2;
    }
  
    multiplication(num1, num2) {
      return num1 * num2;
    }
  
    division(num1, num2) {
      if (num2 === 0) {
        return "Cannot divide by zero";
      } else {
        return num1 / num2;
      }
    }
  }

function main() {
  console.log("Select operation:");
  console.log("1. Addition");
  console.log("2. Subtraction");
  console.log("3. Multiplication");
  console.log("4. Division");
  console.log("5. Exit");

  const choice = parseInt(prompt("Enter choice: "));

  const num1 = parseFloat(prompt("Enter the first number: "));

  const num2 = parseFloat(prompt("Enter the first number: "));

  const cal = new Calculator();

  switch (choice) {
    case 1:
      console.log(`Result: ${cal.addition(num1, num2)}`);
      break;
    case 2:
      console.log(`Result: ${cal.subtraction(num1, num2)}`);
      break;
    case 3:
      console.log(`Result: ${cal.multiplication(num1, num2)}`);
      break;
    case 4:
      console.log(`Result: ${cal.division(num1, num2)}`);
      break;
    default:
      console.log("Invalid choice");
      break;
  }
}

main();
