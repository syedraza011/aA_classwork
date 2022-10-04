/*******************************************************************************
Write a function fromMeToYou(sentence) that returns a string where the word 'me'
is replaced with 'you'.

Examples:

fromMeToYou('that made me laugh') => 'that made you laugh'
fromMeToYou('love me or hate me') => 'love you or hate you'
*******************************************************************************/
let sentence='love me or hate me';
console.log(fromMeToYou(sentence));
function fromMeToYou(sentence) {
  let words=sentence.split(" ");
  let newArray=[];
  for(let i=0;i<words.length;i++){
    let word=words[i];
    if(word === 'me')
    {
      word="you";
      newArray.push(word);
    }
    else{
      newArray.push(word);
    }
  }
  return newArray.join(' ');
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = fromMeToYou;
