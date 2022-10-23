/***********************************************************************
An isogram is a word with only unique, non-repeating letters. Given two
isograms of the same length, return an array with two numbers indicating
matches: the first number is the number of letters matched in both words
at the same position, and the second is the number of letters matched in
both words but not in the same position.

isogramMatcher("an", "at"); //=> [1, 0]
isogramMatcher("or", "go"); //=> [0, 1]
isogramMatcher("cat", "tap"); //=> [1, 1]
isogramMatcher("home", "dome"); //=> [3, 0]
isogramMatcher("ultrasonic", "ostracized"); //=> [3, 4]
isogramMatcher("unpredictably", "hydromagnetic"); //=> [1, 8]
***********************************************************************/
console.log(isogramMatcher("an", "at")); //=> [1, 0]
console.log(isogramMatcher("or", "go")); //=> [0, 1]
console.log(isogramMatcher("cat", "tap")); //=> [1, 1]
function isogramMatcher(string1, string2) {
    let iCounter=0;
    let pCounter=0;
let arr=[];
for(let i=0;i<string1.length;i++){
    let char=string1[i];
    //console.log("CHAR---->  "+char)
    if(char===string2[i]){
        iCounter++
        //console.log("includes---->  "+iCounter)
    } else if(string2.indexOf(char)>-1){
        pCounter++;
        //console.log("position---->  "+pCounter)
    } 
    // console.log("included-->"+iCounter)
    // console.log("Not___included-->"+pCounter)
    
}

return [iCounter,pCounter];
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = isogramMatcher;
