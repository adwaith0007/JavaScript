// 2. Accept two inputs from the user and output their sum.

const prompt= require ("prompt-sync")({sigint:true});

const Number1 = parseFloat( prompt("Enter the 1st number")) ;
const Number2 = parseFloat( prompt("Enter the 2nd number")) ;
if(!isNaN(Number1)&&!isNaN(Number2))
{
    const sum= Number1+Number2;

    console.log("Sum="+sum);
    
}

else{
    console.log("Please enter valid numbers.");
}
