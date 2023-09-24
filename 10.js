// 10. Write a program to interchange the values of two arrays.



const prompt = require ("prompt-sync") ({sigint:true});
const size = parseInt(prompt("Enter a size:"));


let a= [];

let b=[];

console.log("Enter the first array : ")

for(let i=0;i<size;i++)
{
     a[i]=prompt(`Enter the  ${i+1} element : `)
}


console.log("\n Enter the second array : ");

for(let i=0;i<size;i++)
{
     b[i]=prompt(`Enter the  ${i+1} element : `)
}

function swapArrays (array1, array2)
{
    let temp = [...a];
    a.length=0;
    a=[...b];
    b.length=0;
    b=[...temp]

}

swapArrays(a,b);

console.log(a)
console.log(b)
