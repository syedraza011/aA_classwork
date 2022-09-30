// Write a function `copyMachine(element, num)` that takes in an element and a number
// it should return an array of length `num` that is filled with `element`.
//
// Examples:
//
// copyMachine('candy', 0); // => []
// copyMachine('candy', 2); // => [ 'candy', 'candy' ]
// copyMachine('bread', 4); // => [ 'bread', 'bread', 'bread', 'bread' ]
// copyMachine(11, 6); // => [ 11, 11, 11, 11, 11, 11 ]
let element='11';
let eleArray=[''];
let num=6;
console.log(copyMachine(element, num));
function copyMachine(element, num){
    for(let i=0; i<num;i++)
    {
        eleArray[i]=element;
    }
    return eleArray;
}