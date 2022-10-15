// Write a function allElseEqual that takes in an array of numbers. 
// The function should return the element of the array that is equal to half 
// of the sum of all elements of the array. If there is no such element, 
// the method should return null.
console.log(allElseEqual([2, 4, 3, 10, 1])); // 10
console.log(allElseEqual([6, 3, 5, -9, 1])); // 3
console.log(allElseEqual([1, 2, 3, 4]));     // null
function allElseEqual(arr) {
    //return the element of the array that is equal to half 
    for(let i=0;i<arr.length;i++){
        let num=arr[i]
        let sum=sumArray(arr);
        if(num===sum/2){
            return num;
        }
        
    }
    return null;
}
// to the sum of all elements of the array
function sumArray(array){
    let sum=0
    for(let i=0;i<array.length;i++){
        sum +=array[i];
    }
    return sum;
}

