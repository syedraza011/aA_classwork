// // Write a function frequentLetters that takes in a string and returns an array 
// containing the characters that appeared more than twice in a string.
console.log(frequentLetters("mississippi")); //['i', 's']
console.log(frequentLetters("bootcamp")); //[]
function frequentLetters(string) {
    let count={};
    let array=[];
    for(let char of string){
        count[char]=count[char]+1 || 1;
    }
    for(let key in count){
        if(count[key]>2){
        array.push(key);
        }
    }
    return array;
}