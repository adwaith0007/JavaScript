// 16. Write a program to check whether a given number is prime or not

const prompt = require ("prompt-sync")({sigint:true})

const num = parseInt(prompt("Enter a number :"));

let flag = 0;

for(let i=2; i<num;i++)
{
    if(num%i==0)
    {
        flag=1;
        break;
        
    }
   
}

if(flag==1)
{
    console.log("Entered number is not Prime number")
}
else{
    console.log("Entered number is a Prime number")
}