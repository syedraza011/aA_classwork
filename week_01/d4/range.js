
//2
console.log(" Write a function range(start, end) that returns an array that contains all numbers between 'start' and 'end' in sequential order.")

// Examples: range(1,4) => [1,2,3,4], range(4,2) => []
let arry=[];
let start=10;
let end=15;
//range(start, end);
console.log(range(start, end));
function range(start, end){
for(let i=start; i<=end;i++){
    arry.push(i);
    //console.log(i);
}
return arry;

}
