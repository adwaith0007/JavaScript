// 5. Write a program to show the grade obtained by a student after he/she enters their total mark percentage.

const prompt = require ("prompt-sync")({sigint:true})

const mark = parseFloat(prompt("Enter the total mark :"));

if (!isNaN(mark)) {
    let grade;

    if (mark > 90) {
        grade = "A";
    } else if (mark >= 80) {
        grade = "B";
    } else if (mark >= 70) {
        grade = "C";
    } else if (mark >= 60) {
        grade = "D";
    } else if (mark >= 50) {
        grade = "E";
    } else {
        grade = "Failed";
    }

    console.log("Grade: " + grade);
} else {
    console.log("Invalid input. Please enter a valid numeric total mark percentage.");
}