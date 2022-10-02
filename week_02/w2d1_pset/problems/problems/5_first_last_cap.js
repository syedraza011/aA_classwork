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

/*lowerSentence=sentence.toLowerCase();
capFirstLetter = lowerSentence[0].toUpperCase();
lowerSentence=capFirstletter + " " + lowerSentence;
return lowerSentence;
*/
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = firstLastCap;
