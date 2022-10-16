// // Write a function frequentLetters that takes in a string and returns an array 
// containing the characters that appeared more than twice in a string.
console.log(frequentLetters("mississippi")); //['i', 's']
//console.log(frequentLetters("bootcamp")); //[]
function frequentLetters(string) {
    let count={};
    let array=[];
    let chars=string.split("");
    for(let i=0;i<chars.length;i++){
        let char=chars[i];
        if(char===chars[i+1]){
            count=chars[i];
            console.log(count);
        }
    }
    if(count[char]>2){
        //array.push(count[char])
    }
    //return count;
}
