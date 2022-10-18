/***********************************************************************
Write a function `moreDotLessDash(str)` that takes in a string and
returns the true if the string contains more dots ('.') than dashes
('-'), false otherwise.

Examples:

moreDotLessDash('2-D arrays are fun. I think.'); // => true
moreDotLessDash('.-.-.'); // => true
moreDotLessDash('.-'); // => false
moreDotLessDash('..--'); // => false
***********************************************************************/
console.log(moreDotLessDash('2-D arrays are fun. I think.')); // => true
console.log(moreDotLessDash('.-.-.')); // => true
console.log(moreDotLessDash('.-')); // => false
console.log(moreDotLessDash('..--')); // => false
function moreDotLessDash(str) {
    let flag;
    let string=str.split(" ").join("");
    for(let i=0;i<string.length;i++){
      //  console.log("----"+string[i])
        flag=counter(string[i]);
    }
    return flag;
}
function counter(char){
   // console.log("chars____"+char)
    let dotCount=0;
    let dashCount=0;
    let dot='.';
    let dash='-';
    if(char==='.'){
        dotCount++;
    }
    if(char==='-'){
        dashCount++;
    }
    if(dotCount>dashCount){
        return true;
    }
    else {
        return false;
    }
}
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = moreDotLessDash;
