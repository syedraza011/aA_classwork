/*******************************************************************************
Write a function fromMeToYou(str) that returns an string where the word 'me'
is replaced with 'you'.

Examples:

fromMeToYou('that made me laugh') => 'that made you laugh'
fromMeToYou('love me or hate me') => 'love you or hate you'
*******************************************************************************/
let str='that made me laugh';
console.log(fromMeToYou(str));
function fromMeToYou(str) {
  
  console.log(str);
  array.replace("me/g", str);
  console.log(str);
    
  
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = fromMeToYou;
