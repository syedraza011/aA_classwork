/*******************************************************************************
Write a function longestWord(sentence) that returns the longest word of a sentence.
If there are ties, the function should return the later word.

Examples:

longestWord('app academy is cool'); // => 'academy'
longestWord('hate having hungry hippos'); // => 'hippos'
longestWord('bootcamp'); // => 'bootcamp'
longestWord(''); // => ''
*******************************************************************************/
let sentence='hate having hungry hippos';
console.log(longestWord(sentence));
function longestWord(sentence) {
  let word='';
  if(sentence.length<1){

    return word;
  }
  else{
    let words=sentence.split(" ");
    word=words[0];
    console.log(words);
    for(let i=0;i<words.length;i++){
        if(word.length <= words[i].length){

        word=words[i];
        console.log(word);
       
        }
      }
      return word;
    
}
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = longestWord;
