/******************************************************************************
Write a function reverseSentence(sentence) that returns a string where all the
words in the input sentence are reversed. Don't use Array#reverse.

Examples:

reverseSentence("Go to the store") => "store the to Go"
reverseSentence("Jump, jump for joy") => "joy for jump Jump,"
*******************************************************************************/
let sentence="Go to the store";

console.log(reverseSentence(sentence));
function reverseSentence(sentence) {
  //let nSentence=[];
  let array=[];
  let words=sentence.split(" ");
    //console.log(sentence);
    for(let i = (words.length-1); i >= 0; i--){
      array.push(words[i]);
    }
  return array.join(' ');
}

///done////
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = reverseSentence;
