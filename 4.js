//  4. Write a program to check whether a student has passed or failed in a subject after he    
//  or she enters their mark (pass mark for a subject is 50 out of 100).

const prompt = require ("prompt-sync") ({sigint: true});

const mark = parseFloat(prompt("Enter your mark: "));

if (!isNaN(mark)) {
    if (mark >= 50) {
        console.log("Passed");
    } else {
        console.log("Failed");
    }
} else {
    console.log("Invalid input. Please enter a valid numeric mark.");
}