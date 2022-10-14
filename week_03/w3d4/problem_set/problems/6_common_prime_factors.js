/***********************************************************************
Write a function `commonPrimeFactors` that takes in two numbers as
arguments and returns an array of all prime factors that are common
between the two numbers. A factor is a number that divides another
number without resulting in a remainder.

Examples:

commonPrimeFactors(12, 50); // => [ 2 ]
commonPrimeFactors(6, 24); // => [ 2, 3 ]
commonPrimeFactors(11,22); // => [ 11 ]
commonPrimeFactors(45, 60); // => [ 3, 5 ]
***********************************************************************/
console.log(commonPrimeFactors(12, 50)); // => [ 2 ]
console.log(commonPrimeFactors(6, 24)); // => [ 2, 3 ]
console.log(commonPrimeFactors(11,22)); // => [ 11 ]
console.log(commonPrimeFactors(45, 60)); // => [ 3, 5 ]
function commonPrimeFactors(num1, num2) {
    let commonfactor=[];
    let min=0;
    if(num1>num2){
        min=num2;
    }  
    if(num2>num1){
        min=num1;
    }   
    
        
        for(let i=2;i<=min;i++){
            if(isPrime(i)){
                if(num1 % i ===0 && num2 % i ===0){
                commonfactor.push(i);
                }
            } 
        }
    return commonfactor; 
}
function isPrime(num){
    //let newArray=[];
    if(num<2){
        return false;;
    }
    for(let i=2;i<num;i++){
        if(num%i ===0){
        return false;
        }
    }
    return true;
    //return newArray;
}
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = commonPrimeFactors;
