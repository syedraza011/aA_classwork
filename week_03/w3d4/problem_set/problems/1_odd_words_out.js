/***********************************************************************
Write a function oddWordsOut(sentence) that takes in a sentence string
and returns the sentence where words with an odd number of characters
are removed.

Examples:

oddWordsOut('go to the store and buy milk'); // => 'go to milk'
oddWordsOut('what is the answer'); // => 'what is answer'
***********************************************************************/
console.log(oddWordsOut('go to the store and buy milk')); // => 'go to milk'
console.log(oddWordsOut('what is the answer')); // => 'what is answer'
function oddWordsOut(sentence) {
    let words=sentence.split(" ");
    let array=[];
    for(let i=0;i<words.length;i++){
        if(words[i].length %2 ===0){
            array.push(words[i]);
        }
    }
    return array.join(" ");
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = oddWordsOut;
