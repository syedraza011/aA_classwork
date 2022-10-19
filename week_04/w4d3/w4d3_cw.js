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