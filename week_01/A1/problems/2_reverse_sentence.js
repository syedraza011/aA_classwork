/******************************************************************************
Write a function reverseSentence(sentence) that returns a string where all the
words in the input sentence are reversed. Don't use Array#reverse.

Examples:

reverseSentence("Go to the store") => "store the to Go"
reverseSentence("Jump, jump for joy") => "joy for jump Jump,"
*******************************************************************************/
let sentence="Go to the store";
let nSentence=[];
reverseSentence(sentence);
function reverseSentence(sentence) {
nSentence=sentence.split(" ");
  //console.log(sentence);
  for(let i=nSentence.length;i>=0;i--){
    console.log(nSentence[i]);
  }

}
///done////
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = reverseSentence;
