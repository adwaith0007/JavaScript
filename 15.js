// 14. Write a program to add to two dimensional arrays


const prompt = require("prompt-sync")({ sigint: true });

function getArray() {
    const size = parseInt(prompt("Enter the size of an array: "));
    const array = [];

    console.log("Enter the values of array:");
    for (let i = 0; i < size; i++) {
        const value = parseInt(prompt("Input: "));
        array.push(value);
    }

    return array;
}

function displayArray(arr) {
    console.log("Array:", arr.join(', '));
}

function main() {
    const array = getArray();
    displayArray(array);
}

main();