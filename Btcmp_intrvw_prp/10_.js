// The fibonacci sequence is a sequence of numbers whose first and 
// second elements are 1. To generate further elements of the sequence 
// we take the sum of the previous two elements. 
// For example the first 6 fibonacci numbers are 1, 1, 2, 3, 5, 8.
//  Write a function fibonacci that takes in a number length and 
//  returns the fibonacci sequence up to the given length.
console.log(fibonacci(0)); // []
console.log(fibonacci(1)); // [1]
console.log(fibonacci(6)); // [1, 1, 2, 3, 5, 8]
console.log(fibonacci(8)); // [1, 1, 2, 3, 5, 8, 13, 21]
function fibonacci(length) {
    let array=[];
    if(length===0){
        return array;
    }
    if(length===1){
        array.push(1);
        return array;
    }
    let seq =[1,1];
    
    while (seq.length < length) {
        let last = seq[seq.length - 1];
        let secondToLast = seq[seq.length - 2];
        let nextEle = last + secondToLast;
        seq.push(nextEle);
    }
    return seq;
}

