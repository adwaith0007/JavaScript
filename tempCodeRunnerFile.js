const limit = parseInt(prompt("Enter a limit:"));
var sum=0;

for(var i =0; i<=limit;i++ )
{
    if(i%2!=0)
    {
        sum+=i;
    }
}
console.log(`sum of odd number = ${sum} `)

