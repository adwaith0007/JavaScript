// 12. Write a program to sort an array in descending order

const prompt = require("prompt-sync") ({sigint:true});

const size = parseInt(prompt("Enter the size :"))

let num = [];
let temp=0;

for( let i=0; i<size;i++)
{
    num.push(parseInt(prompt(`Enter the ${i+1} element : `)))


}

for(i=0;i<size;i++)
{
    for(let j=i+1;j<size; j++)
    {
        if(num[i]<num[j])
        {
            temp= num[i];

            num[i]=num[j];

            num[j]=temp;


        }
    }
}

let ar= num.toString()

console.log(`sorted array : ${ ar }` );