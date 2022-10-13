// Write a function doubleLetterCount that takes in a string and 
// returns the number of times that the same letter repeats twice in a row.
console.log(doubleLetterCount("the jeep rolled down the hill"));  // 3
console.log(doubleLetterCount("bootcamp")); // 1
function doubleLetterCount(string) {
    //let words=string.split(" ");
    let counter=0;
    for(let i=0;i<string.length;i++){
        
        let num=string[i];
        let num1=string[i+1];
        if(num===num1){
            counter++;
        }
    }
    return counter;
}

