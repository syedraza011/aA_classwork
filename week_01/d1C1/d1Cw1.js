console.log("hello world")
console.log("2")
console.log(10 > 10)
console.log("Anything");
//string methods
//indexing 
let str="hello"
console.log(str[1]);
console.log("hello".length);
console.log("hello".indexOf('h'));
console.log("hello".indexOf('e'));
console.log("hello".indexOf('x'));
console.log('hello'.indexOf('hell'));
console.log("race".concat("car"));
console.log(4+"hi")
console.log(4* 'hi')
console.log(4*"10")
console.log("hello".toUpperCase());
console.log("HELLO".toLowerCase())
console.log("hello".slice());
console.log("hello".slice(1))
console.log("hello".slice(1,3)) // first element 1-inclusive and 3-exclusive 
//vaibales decleration
//var x;
//let x;
//const y;
let name = "johnathan";
console.log(name);
console.log(name === "johnathan");
//good naming variables
//no name = age //25
//use cammel cassing
//start with lower then capital names
let test;
console.log(test);
//condiational 
// are mutaually exclusive
if(20===20)
{
    console.log("They are equal")
}
else
{
    console.log("not equal")
}
let num =20;
if(num ===20)
{
    console.log("equal 20");
}
else if (num > 20)
{
    console.log("number is greater than 20")
}
else
{
    console.log("less than 20");
}

// there are 7 falsy values 
// 7 are 1- undefined, 2-null, 3- nan,4-0, 5--0, 6-" ", 7-false

if(0)
{
    console.log("True");
}
else
{
    console.log("false");
}