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
    if(word1.length !==word2.length){
        return false;
    }
    else {
    let sortedWord1=word1.split("").sort().join(" ").toLowerCase();
    let sortedWord2=word2.split("").sort().join(" ").toLowerCase();
    if(sortedWord1===sortedWord2){
        return true;
    }
    else{
        return false;
    }
    }
    
}


