// 3. Write a program to find the simple interest.

// Formula: SI=(P*R*n)/100)


const prompt = require("prompt-sync") ({sigint:true});

const Principal_amount = parseInt(prompt("Enter the Principal amount : "));

const Interest_rate = parseFloat(prompt("Enter the Interest rate : "));

const years = parseFloat(prompt("Enter the Number of years : "));

const Simple_Interest = ((Principal_amount * Interest_rate * years )/100);

console.log("Simple Interest :" + Simple_Interest);



