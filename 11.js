// 11. Write a program to find the number of even numbers in an array

const prompt = require("prompt-sync")({ sigint: true });

function countEvenNumbers(arr) {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            count++;
        }
    }

    return count;
}

const size = parseInt(prompt("Enter the size of an array: "));
const array = [];

console.log("Enter the values of array:");
for (let i = 0; i < size; i++) {
    const value = parseInt(prompt("Input: "));
    array.push(value);
}

const evenCount = countEvenNumbers(array);

console.log("Number of even numbers in the given array is", evenCount);