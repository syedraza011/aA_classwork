// Write a function anagrams that takes in two words and 
// returns a boolean indicating whether or not the words are anagrams. 
// Anagrams are words that contain the same characters but not necessarily 
// in the same order. Solve this without using .sort().
console.log(anagrams("cat", "act"));          // true
console.log(anagrams("restful", "fluster"));  // true
console.log(anagrams("cat", "dog"));          // false
console.log(anagrams("boot", "bootcamp"));    // false
function anagrams(word1, word2) {
    let str='';
    if(word1.length !==word2){
        return false;
    }
    else {
    for(let i=0;i<word1;i++){
        let char=word1[i];
        if(word2.includes(char)){
            str +=char;
        }
    }
    return str;
}
}

