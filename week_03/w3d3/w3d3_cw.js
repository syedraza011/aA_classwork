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
/*function foo(){
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

//call back Function 
//A call back function is a function that is passed
// as an argument to another function 

//console.log( hOF(fn1,fn2,n));
function hOF(fn1,fn2,n){ //fn1 and fn2 are aour call back functions
  fn1();
  fn2();
  n +=1;
  return fn1;
}console.log(test(fn,a,b));
function test(fn,a,b){
console.log(fn(a));
return fn;
}*/
//high order function predefined by java script
//<array>.for each 
//<array>. map
//<array>.filter 
let arr=[1,3,5,7,9,11]
arr.forEach(function(ele,i, arr){ // do not put i as an argument
  //1st-argument is going to be element , 2nd -Index, 3rd-array itself
  // argument must come after elements
  ele=ele*2;

})
//map pre defined function 
let names=['alice','bob','carol']; //[5,3,5]//length of each word
names.map(function(ele,i){
return ele.length;
})
//when we map no mutation but would return new array 
//for each -are mutation  
//strings['a','bb','ccc']
//string.lengths [1,2,3];
//integars [1,2,-1,0]=> transforms to negation[-1,-2,1,0]
//using maps;
let nums=[5,8,9,12,15,3];
let array=nums.map(function(ele,i){
  return ele*i;
})
console.log(array);

let num1=[1,2,3,4,5];
let ar=num1.map(function(ele,i){

  return 0;
})
console.log(ar);

let arr1=['alice','bob','carol'];
let a=arr1.map(function(ele,i){

  return ele+ele;
})
console.log(a);
const myfunc = (n) =>{
  return (n+n)
}
console.log(arr1.map(x => myfunc(x))) //alternate function writing for maping

//function myfunc(n){}
// <array>.filter //pre defined function 
//even
let arra=[0,1,2,3,4,5];
let ray=arra.filter(function(ele,i){
  return ele %2===0;
})
console.log(ray);
//odds
let arraa=[0,1,2,3,4,5];
let rayy=arra.filter(function(ele,i){
  return ele %2 !==0;
})
console.log(rayy);

let char=['aa','b','c'];
let nChar=char.filter(function(ele,i){
  return ele.length===1;
})
console.log(nChar);