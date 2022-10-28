// AdjacentSum
// Write a method `adjacent_sum` that takes in an array of numbers and 
// returns a new array containing the sums of adjacent numbers in the original array. 

// adjacent_sum([3, 7, 2, 11]); // [10, 9, 13], because [ 3+7, 7+2, 2+11 ]

// adjacent_sum([2, 5, 1, 9, 2, 4]); // [7, 6, 10, 11, 6], because [2+5, 5+1, 1+9, 9+2, 2+4]
let arr=[2, 5, 1, 9, 2, 4];
consol.log(adjacentSum(arr));
function adjacentSum(arr){
    let array=[];
    let obj={};
    //function pairs(arr)
for( let i=0;i<arr.length;i++){
    let num1=arr[i];
    for(let j=0;j<arr.length;j++){
        let num2=0;
        if(num1 !==num2){
            array.push([num1,num2]);
            let sum=num1+num2;
            obj[sum]=([num1,num2]);
        }
    }
}
console.log(key);
//return array;
}