

//6

// Define a function `isFactorOf(number, factor)` that returns `true` if `factor`
// is a factor of `number`. `false` otherwise. A factor is a number that divides
// another number without a leftover remainder.
//
// Examples:
//
// isFactorOf(6,2); // => true
// isFactorOf(-6, 2); // => true
// isFactorOf(5,0); // => false
// isFactorOf(22, 7); // => false
let number1=5;
let factor=0;
console.log(isFactorOf(number1, factor));
function isFactorOf(number1, factor){
    if(number1 % factor===0)
    {
        return true;
    }
    else{
        return false;
    }
}
