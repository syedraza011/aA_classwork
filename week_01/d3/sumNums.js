
//5
// Write a function `sumNums(max)` that returns the sum of all positive numbers less
// than or equal to max.
//
// Examples:
//
// sumNums(4); // => 10
// sumNums(10); // => 55
// sumNums(365);
let sum=0;
let maximum=365;
sumNums(maximum); 
function sumNums(maximum){
    for(let j=0;j<=maximum;j++){
        //console.log(j);
    sum=sum+j;
       // console.log(sum);
    }
    console.log(sum);
}

