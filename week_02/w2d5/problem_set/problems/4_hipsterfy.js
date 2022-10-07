/***********************************************************************
Write a function `hipsterfy(sentence)` that takes takes a string
containing several words as input. Remove the last vowel from each word.
`'y'` is not a vowel.

Examples:

hipsterfy("proper"); // => "propr"
hipsterfy("proper tonic panther"); // => "propr tonc panthr"
hipsterfy("towel flicker banana"); // => "towl flickr banan"
hipsterfy("runner anaconda"); // => "runnr anacond"
hipsterfy("turtle cheeseburger fries"); // => "turtl cheeseburgr fris"
***********************************************************************/
let sentence = "proper tonic panther";
let vowels = "aeiouAEIOU";
console.log(hipsterfy(sentence));

function hipsterfy(sentence) {
    let arr = [];
    let words = sentence.split(" ");
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
       // let chars=word.split("");
        for (let j = word.length-1; j >=0  ; j--) {
            let char=word[j];
            if (vowels.indexOf(char) !== -1) {
                let newWord = word.slice(0, j) + word.slice(j + 1);
                arr.push(newWord);
                break;
            }
        }
    }
    return arr.join(" ");
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = hipsterfy;
