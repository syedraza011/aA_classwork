// Write a function adjacentSum that takes in an array of numbers and returns
// a new array containing the sums of adjacent numbers in the original array.
// See the examples.// [10, 9, 13], because [ 3+7, 7+2, 2+11 ]
// // [7, 6, 10, 11, 6], because [2+5, 5+1, 1+9, 9+2, 2+4]
console.log(adjacentSum([3, 7, 2, 11]));
console.log(adjacentSum([2, 5, 1, 9, 2, 4]));

function adjacentSum(numArray) {
    let newArray=[];
    for (let i = 0; i < numArray.length; i++) {
        if(i<numArray.length-1){
        let num=numArray[i];
        let num1=numArray[i+1];
            newArray.push(num+num1);
        }
    }
    return newArray;
}
