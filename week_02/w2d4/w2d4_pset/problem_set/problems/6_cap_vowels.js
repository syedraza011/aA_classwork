/***********************************************************************
Write a function called capVowels(string) that takes in a string and
returns the string where every vowel is capitalized. All other letters
should be lowercased.

Hint: Don't forget that strings are immutable!

Examples:

capVowels('hello world'); // => 'hEllO wOrld'
capVowels('HELLO WORLD'); // => 'hEllO wOrld'
capVowels('boOtCamP PreP'); // => 'bOOtcAmp prEp'
***********************************************************************/
let string='hello world';
console.log(capVowels(string)); 
function capVowels(string) {
    let newArray=[];
    let words=string.split(" ");
    for(let i=0;i<string.length;i++){
        let word=string[i];
            let char=word.split(" ");
        for(let j=0;j<word.length;j++){
            if(char==='e'){
                char.toUpperCase(char[j]);
                newArray.push(char);
            }
            else{
                newArray.push(char);
            }
        }
    }
return newArray.join(" ");
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = capVowels;
