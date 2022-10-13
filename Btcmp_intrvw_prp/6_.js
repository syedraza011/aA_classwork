//Write a function greatestFactorArray that takes in an array 
//of numbers and returns a new array where every even number 
//is replaced with it's greatest factor. 
//A greatest factor is the largest number that divides another with no remainder. 
//For example, the greatest factor of 16 is 8. 
//(For the purpose of this problem we won't say the greatest factor of 16 is 16,
// because that would be too easy).
//console.log(greatestFactorArray([16, 7, 9, 14])); // [8, 7, 9, 7]
//console.log(greatestFactorArray([30, 3, 24, 21, 10])); // [15, 3, 12, 21, 5]
//console.log(greatestFactorArray([16, 7, 9, 14])); // [8, 7, 9, 7]
console.log(greatestFactorArray([30, 3, 24, 21, 10])); // [15, 3, 12, 21, 5]
function greatestFactorArray(array) {
    let arr=[];
    let num=[30, 3, 24, 21, 10];
    for(let i=0;i<num.length;i++){
        let number=gCF(num[i])
        console.log(number)
        arr.push(number);
        
    }
    return arr;
    
}
function gCF(digit){
    for(let i=digit-1;i>0;i--){
        console.log("DIGIT"+digit);
        if(digit % i ===0){
            return i;
        }
         
    }  
}
