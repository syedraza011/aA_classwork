
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
  //6

  // Write a function `whisper` that takes in a string and returns a "whispered" version
// of that string.
//
// Examples:
// whisper("Hey Anthony"); // => "...hey anthony..."
// whisper("YEA! that was fun"); // => "...yea! that was fun..."

var str= "i am GOING to app academy";
console.log(whisper(str));
function whisper(string) 
{
    str=str.toLowerCase(str);
    return str;
}
//07
// Write a function `isSubstring` that takes in two strings, `searchString` and
// `subString`. The function should return `true` if `subString` is a part of the
// `searchString`, `false` otherwise.
// Write two versions of this function, using conditionals and without using conditionals
//
// Examples:
// isSubstring("The cat went to the store", "he cat went"); // => true
// isSubstring("Time to program", "time"); // => true
// isSubstring("Jump for joy", "joys"); // => false
//
var searchString="app Academy";
var subString="app";
console.log(isSubstring(searchString,subString));
function isSubstring(searchString, subString) {
    if(searchString.indexOf(subString) > -1){
        // if(searchString.indexOf(subString)>=0){
            return true;
        // }
    }
    else {
        return false;
    }
}
//8

// Write a function `echo` that takes in a string and returns that string "echo-ized".
//
// Examples:
// echo("Mom!"); // => "MOM! ... Mom! ... mom!"
// echo("hey"); // => "HEY ... hey ... hey"
// echo("JUMp"); // => "JUMP ... JUMp ... jump"
//
var word="Mom!";
console.log(echo(word));
function echo(word) {
    
    let part1 = word.toUpperCase();
    let part2 = word;
    let part3 =word.toLowerCase();
    let newWord= part1+"..."+part2+"..." +part3;
    return newWord;

}
// Write a function `isEven` that takes in a number and returns `true` if the number
// is even, `false` otherwise. Write `isEven` by using the `isOdd` function you
// made previously. HINT: you can call `isOdd` from within `isEven`.
//
// Examples:
// isEven(2); // => true
// isEven(5); // => false
let number=1;
console.log(isEven(number));
function isEven(number) {
    if(number % 2 === 0){
        return true;
    }
    else{
        return false;
    }
  }

  // Write a function `averageOfFour(num1, num2, num3, num4)` that takes in four
// numbers. The function should return the average of all of the numbers.
//
// Examples:
//
// averageOfFour(10, 10, 15, 5); // => 10
// averageOfFour(3, 10, 11, 4); // => 7
// averageOfFour(1, 2, 3, 4); // => 2.5
let num11=4;
let num12=2;
let num13=2;
let num14=4;
console.log(averageOfFour(num11,num12,num13,num14));
function averageOfFour(num1, num2, num3, num4){
    avg=(num11+num12+num13+num14)/4;
    return avg;
}