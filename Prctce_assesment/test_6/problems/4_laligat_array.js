/*******************************************************************************
Write a function laligatArray(array) that takes in an array of numbers and returns
a new array where each number is replaced with its laligat sum.

A number's laligat sum is the the sum of all the prime numbers less than or equal
to that number.

For example, the laligat sum of 10 is: 2 + 3 + 5 + 7 = 17

Examples:
laligatArray([10, 11, 20, 15]); // => [ 17, 28, 77, 41 ]
laligatArray([1, 2, 3, 4, 5]); // => [ 0, 2, 5, 5, 10 ]
*******************************************************************************/
console.log(laligatArray([10, 11, 20, 15]));
console.log(laligatArray([1,2,3,4,5]));
function laligatArray(array) {
    
    let arr = [];
    for (let i = 0; i < array.length; i++) {
        let num = array[i];
        let sum=0;
        // console.log("num"+num)
        for (let i = 1; i <= num; i++) {
            
            if (isPrime(i)){
                //console.log(" "+i+" ")
                sum= sum+i;
                
                // console.log("sum-----"+sum)
            }
        }

        arr.push(sum);
        
    }
    return arr
    
}
function isPrime(n)
{
	
	if (n === 1 || n === 0){
		return false;
    }
	for (let i = 2; i < n; i++) {
		
		if (n % i === 0){
			return false;
        }
	}
	return true;
}



/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = laligatArray;
