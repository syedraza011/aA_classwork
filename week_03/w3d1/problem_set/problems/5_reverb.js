/***********************************************************************
Write a function `reverb(word)` that takes in a word string and returns
the word with all characters after the last vowel repeated.

Examples:

reverb('running'); // => 'runninging'
reverb('wild'); // => 'wildild'
reverb('debugged'); // => 'debuggeded'
reverb('my'); // => 'my'
***********************************************************************/
let word='debuggeded';
let vowels = ['a', 'e', 'i', 'o', 'u','A', 'E', 'I', 'O', 'U'];;
console.log(reverb(word));
function reverb(word) {
    for(let i = word.length-1; i >=0; i--){
        let char=word[i];
        if(vowels.indexOf(char) > -1){
        let  afterV=word.slice(i);
        //console.log(word+afterV)
        return word+afterV;
        }
        
    }
    return word;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = reverb;
