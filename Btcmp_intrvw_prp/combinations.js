// Combinations
// Write a method `combinations` that takes in an array of unique elements, 
// and returns a 2D array representing all possible combinations 
//of 2 elements of the array.

// combinations(["a", "b", "c"]); // [ [ "a", "b" ], [ "a", "c" ], [ "b", "c" ] ]

// combinations([0, 1, 2, 3]); // [ [ 0, 1 ], [ 0, 2 ], [ 0, 3 ], [ 1, 2 ], [ 1, 3 ], [ 2, 3 ] ]
console.log(combinations([0, 1, 2, 3]));
console.log(combinations(["a", "b", "c"]));
function combinations(arr){
    let newArray=[];
    for(let i=0;i<arr.length;i++){
        let num1=arr[i];
        for(let j=i+1;j<arr.length;j++){
            let num2=arr[j];
            newArray.push([num1,num2]);
        }
    }
    return newArray;
}