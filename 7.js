// 7. Write a program to print the multiplication table of given numbers.
const prompt = require ("prompt-sync") ({sigint:true});
const number = parseInt(prompt("Enter a number:"));

if (!isNaN(number)) {
    console.log("Multiplication Table for " + number);

    for (let i = 1; i <= 10; i++) {
        const result = i * number;
        console.log(`${i} x ${number} = ${result}`);
        // console.log(i +"x"+ number + "=" + i*number );
    }
} else {
    console.log("Invalid input. Please enter a valid numeric number.");
}