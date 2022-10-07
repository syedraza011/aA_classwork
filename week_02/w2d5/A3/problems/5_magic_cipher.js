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
  //let words=sentence.split(""); // ['add,'me','on','facebook']
  for(let i=0;i<sentence.length;i++){
    let word=sentence[i];
    for(let j=0;j<word.length;j++){
    if(cipher[word[j]]=== undefined){
        newArray.push(word[j]);
      }
        else {
          newArray.push(cipher[word[j]]);
        }
    }
  }
  return newArray.join("");
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = magicCipher;
