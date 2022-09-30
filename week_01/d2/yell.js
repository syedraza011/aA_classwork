//5
// Write a function `yell` that takes in a string and returns a "yelled" version
// of that string.
//
// Examples:
// yell("I want to go to the store"); // => "I WANT TO GO TO THE STORE!!!"
// yell("Time to program"); // => "TIME TO PROGRAM!!!"
//
var str= "i am going to app academy";
console.log(yell(str));
function yell(string) 
{
    str=str.toUpperCase();
    return str;
}