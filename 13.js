// 13. Write a program to identify whether a string is a palindrome or not


const prompt = require ("prompt-sync") ({sigint:true})

const word = prompt ("Enter a string : ");

const palindrome = word.split('').reverse().join('');

console.log(palindrome)

if(word==palindrome)
{
    console.log("Entered string is a palindrome");

}
else {
    console.log("Entered string is not palindrome");
}