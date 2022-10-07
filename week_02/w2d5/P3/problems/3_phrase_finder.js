/*******************************************************************************
Write a function phraseFinder(words, phrase), that takes in an array of words and a
string representing a phrase. The function should return true if the phrase can be
formed by a pair of words from the array. The function should return false if the
phrase cannot be formed by any pair of words.

Examples:

phraseFinder(['world', 'prep', 'hello', 'bootcamp'], 'bootcamp prep') => true
phraseFinder(['world', 'bootcamp', 'hello', 'prep'], 'bootcamp prep') => true
phraseFinder(['world', 'bootcamp', 'hello', 'prep'], 'hello world') => true
phraseFinder(['world', 'bootcamp', 'hello', 'prep'], 'hello prep') => true
phraseFinder(['world', 'bootcamp', 'hello', 'prep'], 'hello goodbye') => false
*******************************************************************************/
let words=['world', 'prep', 'hello', 'bootcamp'];
let phrase='bootcamp prep';


console.log(phraseFinder(words, phrase));
function phraseFinder(words, phrase){
  for(let i=0;i<words.length;i++){
    let word1=words[i];
    for(let j=0;j<words.length;j++){
      let word2=words[j];
      let str=word1+" "+word2;
      console.log(word1+word2);
      if(str===phrase){
        return true;
      }

    }
  }
  return false;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = phraseFinder;
