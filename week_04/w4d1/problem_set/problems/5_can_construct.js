/***********************************************************************
Given an arbitrary ransom note string and another string containing letters 
from all the magazines, write a function that will return true if the ransom note 
can be constructed from the magazines; otherwise, it will return false.

Each letter in the magazine string can only be used once in your ransom note.

Examples:
canConstruct("a", "b");               // => false
canConstruct("a", "aa");              // => true
canConstruct("ababc", "dbaccab");     // => true
canConstruct("aabbc", "aaaabbbdef");  // => false
***********************************************************************/
//console.log(canConstruct("a", "b"));               // => false
//console.log(canConstruct("a", "aa"));              // => true
console.log(canConstruct("ababc", "dbaccab"));     // => true
console.log(canConstruct("aabbc", "aaaabbbdef"));  // => false
function canConstruct(ransomNote, magazine) {
    let magCount=countEle(magazine);
    let ranCount=countEle(ransomNote);
    console.log(magCount);
    console.log(ranCount);
    for (let char in ranCount) {
        const numLetters = ranCount[char];
        if (magCount[char] === undefined || magCount[char] < numLetters) {
            return false;
        }
    }
return true;
}
function countEle(string){
    let count={};
    for(let i=0;i<string.length;i++){
           if(string[i] in count){ 
            count[string[i]]++;
        }
        else {
            count[string[i]]=1;
        }
    }
    return count;
}
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = canConstruct;
