// Question 2
//Write a function mostVowels that takes in a
//sentence string and returns the word of the
//sentence that contains the most vowels.
console.log(mostVowels("what a wonderful life")); // "wonderful"
function mostVowels(sentence) {
  let counts={};
  let largestnum=0;
  let largestword='';
  let words=sentence.split(" ");
  for(let i=0;i<words.length;i++){
      let word=words[i];
      counts[word]= countVowels(word);
  }
  for( let key in counts)
  {
    
    if(counts[key] > largestnum)
    {
      largestnum=counts[key];
      largestword= key;
    }
  }
return largestword;
}

function countVowels(word) {
  let vowels = "aeiouAEIOU";
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    if (vowels.includes(word[i])) {
      count++;
    }
  }
  return count;
}

//console.log(mostVowels("what a wonderful life")); // "wonderful"
