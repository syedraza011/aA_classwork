// Write a function `isOdd` that takes in a number as an argument and returns `true`
// if the number is odd and returns `false` otherwise.
// Write two versions of this function, using conditionals and without using conditionals
//
// Examples:
// isOdd(2);    // => false
// isOdd(5);    // => true
// isOdd(-17);  // => true

//function isOdd(num) {
    // your code here...
    var num=5;
    console.log((isOdd(num)));
    function isOdd(num)
    {
    if(num%2===0)
    {
        return true;
    }
    else
    {
        return false;
    }
  }

  //2
  // Write a function `plusFive` that takes in a number as an argument and returns
// the sum of that number and 5.
//
// Examples:
// plusFive(10);  // => 15
// plusFive(2);   // => 7
// plusFive(-8);  // => -3
//
var num=10;
console.log(plusFive(num));
function plusFive(num) {
    // your code here...
    num=num+5;
    return num;
  }


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

//4

// Write a function `hello` that takes in a string and prints out "Hello, " followed
// by the string. HINT: this function doesn't need to return anything, it should
// just print using console.log
//
// Examples:
// hello("child");    // prints "Hello, child"
// hello("Anthony");  // prints "Hello, Anthony"
//
var str="Champ";
//hello my name is
function hello(str) {
    console.log("Hello " + str);
    //console.log(`Hello ${str} my age is ${age}`);
  }

hello(str);