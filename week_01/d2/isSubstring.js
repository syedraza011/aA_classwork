//07
// Write a function `isSubstring` that takes in two strings, `searchString` and
// `subString`. The function should return `true` if `subString` is a part of the
// `searchString`, `false` otherwise.
// Write two versions of this function, using conditionals and without using conditionals
//
// Examples:
// isSubstring("The cat went to the store", "he cat went"); // => true
// isSubstring("Time to program", "time"); // => true
// isSubstring("Jump for joy", "joys"); // => false
//
var searchString="app Academy";
var subString="app";
console.log(isSubstring(searchString,subString));
function isSubstring(searchString, subString) {
    if(searchString.indexOf(subString) > -1){
        // if(searchString.indexOf(subString)>=0){
            return true;
        // }
    }
    else {
        return false;
    }
    //2nd method
    // {return searchstring.indexOf(substring)>-1};
}