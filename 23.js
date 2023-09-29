// 23. Write an object oriented program to store and display the values of a 2D array


const prompt =require("prompt-sync")({sigint:true});

class ArrayManager {
    constructor(size) {
      this.size = size;
      this.array = this.getArray();
    }
  
    getArray() {
      const arr = [];
      console.log(`Enter the values for array of size ${this.size}x${this.size}:`);
  
      for (let i = 0; i < this.size; i++) {
        arr.push([]);
        for (let j = 0; j < this.size; j++) {
          const value = parseInt(prompt(`Enter value for position ${i + 1},${j + 1}: `));
          arr[i].push(value);
        }
      }
  
      return arr;
    }
  
    displayArray() {
      console.log("Array elements are:");
      for (let i = 0; i < this.size; i++) {
        console.log(this.array[i].join("\t"));
      }
    }
  }
  
  function main() {
    const size = parseInt(prompt("Enter the size of array: "));
    const arrayManager = new ArrayManager(size);
  
    arrayManager.displayArray();
  }
  
  main();