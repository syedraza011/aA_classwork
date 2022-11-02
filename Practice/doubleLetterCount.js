// Write a function doubleLetterCount that takes in a string and 
// returns the number of times that the same letter repeats twice in a row.
console.log(doubleLetterCount("the jeep rolled down the hill"));  // 3
console.log(doubleLetterCount("bootcamp")); // 1
function doubleLetterCount (str){
let count=0;
    let words=str.split(" ");
    for (let i=0;i<words.length;i++){
        let word=words[i];
       count += letterCount(word);
    }
    return count;
}
function letterCount(word){
    let counter=0;
    for(let i=0;i<word.length;i++){
        let char1=word[i];
        let char2=word[i+1];
        if(char1===char2){
            counter++;
        }
    }
    return counter;
}