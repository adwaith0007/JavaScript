// 1. Accept a char input from the user and display it on the console.
const prompt= require ("prompt-sync")({sigint:true});
const inputvalue = prompt("Enter a character:");

if (inputvalue !== null) {
    if (inputvalue.length === 1) {
        console.log("You entered: " + inputvalue);
    } else {
        console.log("Please enter a single character.");
    }
} else {
    console.log("User canceled the input.");
}