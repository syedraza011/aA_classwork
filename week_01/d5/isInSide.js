// Write a function `isInside(array, ele)` that returns true if `ele` is an element
// inside of the `array`, false otherwise.
//
// HINT: use indexOf
//
// isInside(['chase', 'phi', 'eliot'], 'eliot'); // => true
// isInside(['chase', 'phi', 'eliot'], 'fred'); // => false
let array=['chase', 'phi', 'eliot'];
let ele='eliot';
console.log(isInside(array, ele));
function isInside(array, ele){
for(let i=0;i<array.legnth;i++){
    if(array[i]=== ele)
    {
        return true;
    }
}
return false;

}