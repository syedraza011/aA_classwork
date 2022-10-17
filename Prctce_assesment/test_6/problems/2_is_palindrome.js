/*******************************************************************************
Write a function isPalindrome(sentence) that returns true if the characters of the
sentence string form a palindrome, false otherwise. A palindrome is a word or
phrase that is that is the same forwards and backwards.

Examples:

isPalindrome('rats live on no evil star'); // => true
isPalindrome('stella won no wallets'); // => true
isPalindrome('racecar'); // => true
isPalindrome('hello world'); // => false
*******************************************************************************/
console.log(isPalindrome('rats live on no evil star')); // => true
console.log(isPalindrome('stella won no wallets')); // => true
function isPalindrome(sentence) {
  let words=sentence.split(" ");
  let newWords=words.join("");
  let flag= false;
  for(let i=0;i<newWords.length;i++){
    let left=newWords[i];
   // console.log("Left---"+left);
    let right=newWords[(newWords.length-1)-i];
    //console.log("Right---"+right);
   // while(!i===){
      if(left===right){
        flag=true;
      } else {
        flag=false;
        break;
      }
    
  }
  return flag;
}


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = isPalindrome;
