// 6. Using the ‘switch case’ write a program to accept an input number from the user and output the day as follows. 

const prompt = require ("prompt-sync") ({sigint:true});

const userInput = parseInt(prompt("Enter a number (1-7):"));

let day;

switch (userInput) {
    case 1:
        day = "Sunday";
        break;
    case 2:
        day = "Monday";
        break;
    case 3:
        day = "Tuesday";
        break;
    case 4:
        day = "Wednesday";
        break;
    case 5:
        day = "Thursday";
        break;
    case 6:
        day = "Friday";
        break;
    case 7:
        day = "Saturday";
        break;
    default:
        day = "Invalid Entry";
}

console.log("Day is: " + day);