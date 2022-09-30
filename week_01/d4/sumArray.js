//3
console.log("Write a function sumArray(array) that takes in an array of numbers that returns the total sum of them.")
// Examples:
// sumArray([5, 6, 4]); // => 15 ||  sumArray([7, 3, 9, 11]); // => 30
let array=[5,6,4];
let sum=0;
console.log(sumArray(array));
function sumArray(array){
    for(let i = 0; i < array.length; i++){
        sum=sum+array[i];
        //console.log(array[i]);
    }
    return sum;
}
