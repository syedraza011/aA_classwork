/*******************************************************************************
Write a function royalWe(sentence) that returns an string where every word
'I' is replaced with 'we', every word 'mine' is replaced with 'ours', every
word 'my' is replaced with 'our', and every word 'me' is replaced with "us"

Examples:

royalWe("I want to go to the store") => "we want to go to the store"
royalWe("This is my house and you will respect me") => "This is our house and you will respect us"
royalWe("This is mine") => "This is ours"
royalWe("Jump for my love") => "Jump for our love"
*******************************************************************************/
let sentence="I am a boy my car is mine. i love me and you are mine ";
console.log(royalWe(sentence));
function royalWe(sentence) {
    let newArray=[];
    let word='';
  //break the into words
  let words=sentence.split(" ");
  //find the words seprate
  //loop through the array to check if word i,my,me/mine exists
  for(let i=0; i< words.length; i++){
     word=words[i];
    if(word === 'I' ){
      //replace i with we
      word='we';
      newArray.push(word);
      console.log("I exists -->"+ word);
    }
    else if (word === 'my') {
      //replace my with our
      word='our';
      newArray.push(word);
      console.log("MY exists -->"+ word);
    }else if (word === 'me'){
      //replace me with us
      word='us';
      newArray.push(word);
      console.log("me exists -->"+ word)
    }
    else if (word === 'mine' ){
      //replace mine with our
      word='ours';
      newArray.push(word);
      console.log("Mine exists -->"+ word)
    } else {
      newArray.push(word);
    }
  }
  return newArray.join(' ');
  }
  

  //push on array while doing replacement
  //return an array

  /*sentence.replace("I/g","we");
  console.log(sentence);
  sentence.replace("mine/g","ours");
  console.log(sentence);
  sentence.replace("my/g","our");
  console.log(sentence);
  sentence.replace("me/g","us");
  console.log(sentence);*/



/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = royalWe;
