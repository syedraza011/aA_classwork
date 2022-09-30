//3

  // Write a function `threeOrSeven` that takes in a number and returns `true`
// if the number is divisible by either 3 or 7 and `false` otherwise.
// Write two versions of this function, using conditionals and without using conditionals
//
//
// Examples:
// threeOrSeven(3);   // => true
// threeOrSeven(42);  // => true
// threeOrSeven(8);   // => false
//
var num=20;
console.log(threeOrSeven(num));
function threeOrSeven(num) {
if(num%3===0 || num %7===0)
{
    return true;
}
else{
    return false;
}
}