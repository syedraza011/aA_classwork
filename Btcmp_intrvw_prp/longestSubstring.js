/*
Given a string s, find the length of the longest substring 
without repeating characters.
Example 1:
Input: s = "abcabcbb"-----Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:
Input: s = "bbbbb"-----Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/
// let sentence = "abcabcbb";
// console.log(longestSubString(sentence));
//console.log(longestSubString("bbbbb"));
console.log(longestSubString("pwwkew")); //kew //3
function longestSubString(sentence){
    let longest='';
    for(let i=0;i<sentence.length;i++){
        let char=sentence[i];
        if(char !==sentence[i+1] && char!==sentence[i-1]){
            if(!longest.includes(char)){
                longest +=char;
            } 
        }else {
            longest='';
        }
    }
    console.log("longest--->"+longest)
    return longest.length;
        
}
