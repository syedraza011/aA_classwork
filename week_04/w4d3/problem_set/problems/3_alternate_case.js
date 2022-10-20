/***********************************************************************
Write a function alternateCase(str) that takes in a word and returns the
word where the characters alternate between uppercase and lowercase.

Examples:

alternateCase('BOOTCAMPPREP'); // => 'BoOtCaMpPrEp'
alternateCase('bOotCamPpREP'); // => 'BoOtCaMpPrEp'
alternateCase('hello'); // => 'HeLlO'
***********************************************************************/
console.log(alternateCase('BOOTCAMPPREP')); // => 'BoOtCaMpPrEp'
console.log(alternateCase('bOotCamPpREP')); // => 'BoOtCaMpPrEp'
console.log(alternateCase('hello')); // => 'HeLlO'
function alternateCase(str) {
    let words=str.toLowerCase();
    let string='';
for(let i=0;i<words.length;i++){
    let char=words[i];
    if(i%2 ===0){
        string +=char.toUpperCase();
    } else {
            string +=char;
    }
}
return string;
}


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = alternateCase;
