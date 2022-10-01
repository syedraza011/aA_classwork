/******************************************************************************
Write a function reverseSentence(sentence) that returns a string where all the
words in the input sentence are reversed. Don't use Array#reverse.

Examples:

reverseSentence("Go to the store") => "store the to Go"
reverseSentence("Jump, jump for joy") => "joy for jump Jump,"
*******************************************************************************/
let sentence="Go to the store";
let nSentence=[];
let str;
console.log(reverseSentence(sentence));
function reverseSentence(sentence) {
nSentence=sentence.split(" ");
  //console.log(sentence);
  for(let i=(nSentence.length-1);i>=0;i--){
    str=str +" " + nSentence[i];
    
  }
return str;
}

///done////
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = reverseSentence;
