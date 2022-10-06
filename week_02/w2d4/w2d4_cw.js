// Strings vs arrays //.index, .includes,.concat,.slice
//strings- primitive, non muteable
//array=non primitive , muteable
let str = "hello";
str[0] = ["x"];
console.log(str);
let arr = ["h", "e", "l", "l", "o"];
arr[0] = "x";
console.log(arr);
arr.join("++");
console.log(arr.join("++")); // add this to after every index and tur

console.log(str.split(" "));

//styling
//indentation is extremly important
{

} // shouls be right under and anything else one indent forward
//vertical spaces
//white spaces between expression and variable or conditions
//intermediate variables
//means try to use meaningfull variables rather than just arary[i] as an example.
//
//ver common Error
//refrence error, Type Error, Syntax Error
console.log("bootcamp");
//console.log("Hello world").join("_"); only works with arrays not with strings
// undefined.length; Type error
let num=20;
num.length;
console.log(num.length);
