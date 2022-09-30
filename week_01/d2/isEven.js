//9
// Write a function `isEven` that takes in a number and returns `true` if the number
// is even, `false` otherwise. Write `isEven` by using the `isOdd` function you
// made previously. HINT: you can call `isOdd` from within `isEven`.
//
// Examples:
// isEven(2); // => true
// isEven(5); // => false
let number=1;
console.log(isEven(number));
function isEven(number) {
    if(number % 2 === 0){
        return true;
    }
    else{
        return false;
    }
}