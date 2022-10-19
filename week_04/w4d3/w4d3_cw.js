//recursion
//multiply
//must have base case
// recusrsive case
// let num1=2;
// let num2=3;
//recursion is about call stack 
//(4,5) // returned 20 fo rthese values
//5+m(3,5) // 5+5*3= 20
//5+m(2,5) // 5*2+5= 15
//5+m(1,5) // 5+5= 10
//5+m(0,5)  // 5*0= 5
console.log(multiply (2,3));
console.log(multiply (7,8));
console.log(multiply (4,5));
function multiply (num1,num2){
if(num1===1){
  return num2;
}
return num2+multiply(num1-1,num2);
}
// why do we care about recursive
//other professional use it
//elegant--- it looks cool and less line
let str="madam i am adam";
console.log(isPlidrome(str));
function isPlidrome(str){
  if (str.length<=1) {
    return true;
  }
  let i=str[0]===" "? 1:0;
  let j= str[str.lenght-1]===" "? str.length-2 : str.length-1;
  if(str[j]!==str[j]){
    return false;
  }
  return isPlidrome(str.slice(i+1),j);

}
// where we see recursion comonly
//sorting algo's // searching algos // graph traversals 

// fabinocshi series

// recursion  0,1,1,2,3,5,8,13,21,34,55,.....
//let n=34;
// O(n^2) complexity
const fib=n=>{
  if(n===1 || n===2){
    return 1;
  }
  return fib(n-1)+fib(n-2);
}
console.log(fib(5));
console.log(fib(10));
//console.log(fib(90));
// every ercursive function must have two things
//base case
// is the smallest possible problem i can solve
//industive step-- the problem redefined in terms of itself but on a smaller input
let num=6;
console.log("Factorial---"+factorial (num));
function factorial (num){
  if(num===0){
    return 1;
  }
  return (num *factorial(num-1));
}

//power in recursive 
let base=2;
let exp=4;
console.log("Power values----> "+power(base,exp));
function power(base,exp){
  if(exp===0) {
    return 1;
  }
  return base*power(base,exp-1)
}