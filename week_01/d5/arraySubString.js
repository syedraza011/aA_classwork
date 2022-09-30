// Write a function `arraySubstring(words, str)` that takes in an array of
// strings and a string as arguments and returns an array where each element is
// replaced with true if the string is a substring of the element and false if
// it is not.
//
// Examples:
//
// arraySubstring(["hello", "history", "helix", "hellos"],"hel")
// => [true, false, true, true]
// arraySubstring(["prefix", "problems", "pragmatic", "prefer"], "pre")
// => [true, false, false, true]
let words=["hello", "history", "helix", "hellos"]
let str="hel";
console.log(arraySubstring(words, str));
function arraySubstring(words, str){
    let arr = [];
    for(let i=0;i<words.length;i++){
        if(words[i].includes(str)){
        //console.log(i)
            arr.push(true); 
        } else {
            arr.push(false);
        }
    }
    return arr;
}