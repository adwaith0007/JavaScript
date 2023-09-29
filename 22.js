// 22. Write a program to add the values of two 2D arrays


const prompt =require ("prompt-sync")({sigint:true});

function getArray(size) {
    const arr = [];
    console.log(`Enter the values for array of size ${size}x${size}:`);

    for (let i = 0; i < size; i++) {
        arr.push([]);
        for (let j = 0; j < size; j++) {
            const value = parseInt(prompt(`Enter value for position ${i + 1},${j + 1}: `));
            arr[i].push(value);
        }
    }

    return arr;
}

function addArray(array1, array2) {
    const resultArray = [];
    const size = array1.length;

    for (let i = 0; i < size; i++) {
        resultArray.push([]);
        for (let j = 0; j < size; j++) {
            resultArray[i].push(array1[i][j] + array2[i][j]);
        }
    }

    return resultArray;
}

function displayArray(arr) {
    for (let i = 0; i < arr.length; i++) {

        
        console.log(arr[i].join('\t'));
    }
}

function main() {
    const size = parseInt(prompt("Enter the size of array: "));
    const array1 = getArray(size);
    const array2 = getArray(size);

    console.log("Array 1:");
    displayArray(array1);

    console.log("Array 2:");
    displayArray(array2);

    const sumArray = addArray(array1, array2);

    console.log("Sum of the arrays:");
    displayArray(sumArray);
}

main();