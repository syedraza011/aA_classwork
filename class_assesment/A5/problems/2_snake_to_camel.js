/*******************************************************************************
Write a function snakeToCamel(str) that takes in a snake_cased string and returns
the string CamelCased. snake_case is a string where each word is separated with
underscores (_). CamelCase is a string where the first char of each word
is capitalized, all other characters lowercase.

Examples:

snakeToCamel('snakes_go_hiss'); // => 'SnakesGoHiss'
snakeToCamel('say_hello_world'); // => 'SayHelloWorld'
snakeToCamel('bootcamp_prep_is_cool'); // => 'BootcampPrepIsCool'
snakeToCamel('BOOtcamp_PREP_iS_cOol'); // => 'BootcampPrepIsCool'
*******************************************************************************/
console.log(snakeToCamel('snakes_go_hiss')); // => 'SnakesGoHiss'
console.log(snakeToCamel('say_hello_world')); // => 'SayHelloWorld'
console.log(snakeToCamel('bootcamp_prep_is_cool')); // => 'BootcampPrepIsCool'
console.log(snakeToCamel('BOOtcamp_PREP_iS_cOol')); // => 'BootcampPrepIsCool'
function snakeToCamel(str) {
  let newStr='';
  let words=str.split('_');
  for(let i=0;i<words.length;i++){
    let word=words[i];
    let newWord= word[0].toUpperCase()+ word.slice(1).toLowerCase();
    newStr  +=newWord;
  }
  return newStr;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = snakeToCamel;
