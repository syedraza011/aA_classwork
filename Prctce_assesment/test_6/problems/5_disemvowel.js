/*******************************************************************************
Write a function disemvowel(string) that takes in a string and returns the
string with all vowels removed.

Examples:

disemvowel('bootcamp'); // => 'btcmp'
disemvowel('PREP'); // => 'PRP'
disemvowel('hello world'); // => 'hll wrld'
*******************************************************************************/
console.log(disemvowel('bootcamp')); // => 'btcmp'
console.log(disemvowel('PREP')); // => 'PRP'
console.log(disemvowel('hello world')); // => 'hll wrld'
function disemvowel(string) {
  vowels="aeiouAEIOU"
  let str='';
  for(let i=0;i<string.length;i++){
    let char=string[i];
    if(vowels.includes(char)){
    char='';
    str +=char;
    }
    else {
      str +=char;
    }
  }
  return str;
}


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = disemvowel;
