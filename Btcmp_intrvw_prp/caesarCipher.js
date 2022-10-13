// Write a method caesarCipher that takes in a string and a number.
//  The function should return a new string where every character of the original is 
//  shifted num characters in the alphabet.
// Feel free to use this variable:
const alphabet = "abcdefghijklmnopqrstuvwxyz";
console.log(caesarCipher("apple", 1)); // "bqqmf"
console.log(caesarCipher("bootcamp", 2)); // "dqqvecor"
console.log(caesarCipher("zebra", 4)); // "difve"
function caesarCipher(string, num) {
    let shifted='';
    for(let i=0;i<string.length;i++){
        let char=string[i];
        let oldIdx=alphabet.indexOf(char);
        let newIdx=oldIdx+num;
        shifted +=alphabet[newIdx % alphabet.length]
    }
    return shifted;
}
