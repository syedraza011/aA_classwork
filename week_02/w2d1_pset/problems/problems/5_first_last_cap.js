/***********************************************************************
Write a function `firstLastCap(sentence)` that takes in a sentence and
returns a new sentence where the first and last letters of each word is
uppercase. All other characters should be lowercase.

Examples:

firstLastCap('hello BOOTCAMP PrEp'); // =>'HellO BootcamP PreP'
firstLastCap('what is on the radio'); // =>'WhaT IS ON ThE RadiO'
***********************************************************************/
let sentence='hello BOOTCAMP PrEp';
console.log(firstLastCap(sentence));
function firstLastCap(sentence) {
    // let word;
    // let firsLetter='';
    // let lastLetter='';
    let words=sentence.split(" ");
    console.log(words);
    //words=words.toLowercase();
    let newArray = [];
    for(let i = 0; i < words.length; i++){
        let word=words[i]
        let firsLetter = word[0].toUpperCase();
        let lastLetter = word[word.length-1].toUpperCase();
        let middleWord = word.slice(1,-1).toLowerCase();
        let newWord = firsLetter+middleWord+lastLetter;
        newArray.push(newWord);
    }
    //console.log("New letter"+firsLetter+middleWord+lastLetter)
    return newArray.join(" "); 
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = firstLastCap;
