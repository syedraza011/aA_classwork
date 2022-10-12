// Question 1
function lastIndex(str, char) {
  for(let i=str.length-1;i>=0;i--){
    if(str[i]===char){
      return i;

    }
  }
 
}
console.log(lastIndex("abca", "a"))        // 3
console.log(lastIndex("mississipi", "i"))  // 9
console.log(lastIndex("octagon", "o"))     // 5
console.log(lastIndex("programming", "m")) // 7

// Question 2