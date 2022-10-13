// Write a function vowelCipher that takes in a string and 
// returns a new string where every vowel becomes the next vowel in the alphabet.
vowels='aeiouAEIOU'
console.log(vowelCipher("bootcamp")); // "buutcemp"
console.log(vowelCipher("paper cup")); // "pepir cap"
function vowelCipher(string) {
    let newChar='';
    for(let i=0;i<string.length;i++){
        let char=string[i];
        let oldIdx=vowels.indexOf(char);
       let  newIdx= oldIdx+1
        let newChar = vowels[newIdx % vowels.length];
    }
    return newChar;
}

