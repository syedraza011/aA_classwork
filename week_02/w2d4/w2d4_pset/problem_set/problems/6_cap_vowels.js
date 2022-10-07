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
let vowels="aeiouAEIOU";
console.log(capVowels(string)); 
function capVowels(string) {
    let str='';
    let words=string.split(" ");
    for(let i=0;i<string.length;i++){
        let char=string[i];
        if(vowels.indexOf(char)>-1){
        str +=char.toUpperCase(char);
        
        }
        else{
        str +=char.toLowerCase(char)
        }
    }
return str;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = capVowels;
