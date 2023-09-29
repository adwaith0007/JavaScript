// 21. Write a program to multiply the adjacent values of an array and store it in an another array

const prompt =require ("prompt-sync")({sigint:true})

function multiplyAdjacentValues(arr) {
    const resultArray = [];

    for (let i = 0; i < arr.length - 1; i++) {
        const product = arr[i] * arr[i + 1];
        resultArray.push(product);
    }

    return resultArray;
}

function main() {
    const n = parseInt(prompt("Enter the array limit: "));
    const inputArray = [];

    console.log("Enter the values of array:");
    for (let i = 0; i < n; i++) {
        const value = parseInt(prompt("Enter value: "));
        inputArray.push(value);
    }

    const resultArray = multiplyAdjacentValues(inputArray);

    console.log("Output");
    console.log(resultArray.join('\t'));
}

main();
