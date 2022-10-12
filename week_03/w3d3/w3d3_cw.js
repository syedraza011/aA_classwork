// Math 
Math.floor(3.8) //eounding down so 3 is answer
Math.PI;
Math.ceil(3.8) //aproximately 4
Math.round(3.8) //
Math.sqrt (9) //3
Math.abs (-3.2) // 3.2 is absolute value |-3.2|=3.2
let radius=4;
console.log(circleArea(radius));
function circleArea(radius){
  let area= Math.PI*Math.sqrt(radius*radius);
  return Math.floor(area);
}
let num=4;
console.log(weirdSqrt(num));
function weirdSqrt(num){
  return Math.round((Math.sqrt(num)*Math.PI));
  
}
// Higher order function
// a function that takes other function as arguments
//returns function
function foo(){
  console.log("foo");
}
console.log(bar(foo));
function bar(foo){
  foo();
  return foo;
}
let n=2;
console.log(myfunc(n));
function myfunc(n){
  n +=1;
}

function myfunc(n){ //n= number not a function 
  n +=1;
  function myInnerFunc(){
    console.log("hello");
  }
  return myInnerFunc; // never invoke a function with function () sign
}
console.log(example(foo));
function example(foo){
  foo();
  function innerExample(){
    console.log("Example");
  }
  return innerExample(); // would return undefined
}