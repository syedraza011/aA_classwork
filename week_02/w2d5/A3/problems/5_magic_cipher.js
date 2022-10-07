/*******************************************************************************
Write a function magicCipher(sentence, cipher) that takes in an string(sentence)
and an object(cipher). Return a string where every character is replaced with its
corresponding value in the cipher. If the character doesn't exist in the
cipher, use the character.

Examples:

magicCipher("add me on facebook" , { a : "c", d : "q"}) => "cqq me on fccebook"
magicCipher("where are you?" , { v : "l", '?' : "!"}) => "where are you!"
magicCipher("twmce" , { m : "n", t : "d", w : "a"}) => "dance"
*******************************************************************************/
let sentence="add me on facebook";
let cipher= { a : "c", d : "q"};
console.log(magicCipher(sentence, cipher));
function magicCipher(sentence, cipher){
  let newArray=[];
  let words=sentence.split(" ");
  for(let i=0;i<words.length;i++){
    if(cipher[words[i]]===undefined){
      newArray.push(words[i]);
    }
    else {
      newArray.push(cipher[array[i]]);
    }
  }
  return newArray.join(" ");
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = magicCipher;
