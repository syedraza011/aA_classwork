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
    let nSentence=sentence.toLowerCase();
    let array=[];
    let words=nSentence.split(" ");
    for(let i=0;i<words.length;i++){
        let word=words[i];
            if(curseWords.includes(word)){
                array.push(removeVowels(word));
            } else {
                array.push(word);
            }
    }
return array.join(" ");
}
function removeVowels(word){
    let vowels="AEIOUaeiou"
    let newWord='';
    for(let i=0;i<word.length;i++){
        let char=word[i];
        // console.log("CHar--- > "+char);
        // if(i===0){
        //  char=word[i].toUpperCase();
        // }
        console.log("CHar--- > "+char)
        if(vowels.includes(char)){
            newWord +='*';
        }
        else {
            newWord +=char;
        }
    }
    
    return newWord;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = censor;
