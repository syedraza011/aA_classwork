/***********************************************************************
Write a function `censor(sentence, curseWords)` that censors
the given sentence by replacing the vowels in curse words with
"*". Assume no punctuation.

var result1 = censor("Darn you Harold you son of a gun", ["darn", "gun"]);
result1; //=> "D*rn you Harold you son of a g*n"

var result2 = censor("Schnikeys I dont give a diddly squat", ["schnikeys", "diddly", "squat"]);
result2; //=> "Schn*k*ys I dont give a d*ddly sq**t"
***********************************************************************/
let result1 = censor("Darn you Harold you son of a gun", ["darn", "gun"]);
result1; //=> "D*rn you Harold you son of a g*n"

let result2 = censor("Schnikeys I dont give a diddly squat", ["schnikeys", "diddly", "squat"]);
console.log(result2); //=> "Schn*k*ys I dont give a d*ddly sq**t"
function censor(sentence, curseWords) {

}
function removeVowels(word){
    let vowels="AEIOUaeiou"
    let newWord='';
    for(let i=0;i<word.length;i++){
        let char=word[i];
        if(vowels.includes(char)){
            newWord='*';
        }
        else {
            
        }
    }
}
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = censor;
