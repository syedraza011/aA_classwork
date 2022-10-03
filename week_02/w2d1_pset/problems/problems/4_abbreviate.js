/***********************************************************************
Write a function `abbreviate(sentence)` that takes in a sentence string
and returns a new sentence where words longer than 4 characters have
their vowels removed. Assume the sentence has all lowercase characters.
Feel free to use the array below in your solution:

var vowels = ['a', 'e', 'i', 'o', 'u'];

Examples:

abbreviate('bootcamp prep is fun'); // => 'btcmp prep is fun'
abbreviate('programming is fantastic'); // => 'prgrmmng is fntstc'
abbreviate('hello world'); // => 'hll wrld'
abbreviate('how are you'); // => 'how are you'
***********************************************************************/
let sentence='bootcamp prep is fun';

// let arra=[];
// let narr=[];
// let str;
// let word;
// let newWord;
function removeVowels(word){
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let str = '';
    for(let i = 0; i < word.length; i++){
        if(vowels.indexOf(word[i]) === -1){
            str += word[i];
        }
    }
    return str;
    
}
console.log(abbreviate(sentence));
function abbreviate(sentence) {
    let newArray = [];
    let words = sentence.split(" ");
    for(let i = 0; i < words.length; i++){
        if(words[i].length > 4){
            let newWord = removeVowels(words[i]);
            newArray.push(newWord);
        } else {
            newArray.push(words[i]);
        }
    } 
    return  newArray.join(" ");
}
    /*console.log("Just printing after making an aray ->"+char);
    for(i=0;i<char.length;i++){

        narr.push(char[i].split(""));
    }
    console.log("Just printing new array after push->"+narr);
    for(i=0;i<char.length;i++){

        if(char[i].length<4 )
        {
            arra.push(char[i])
        }
        for(let j=0;j<narr[i].length;j++ ){
            if(char[i].split("") ==='o' && char[i].length>4 ){  
            console.log("Hello in for and if")
            }
            console.log("printing lenght of word-->"+char[i].length)
            console.log("printing lenght of char.split-->"+char[i].split(""))
           // char.pop();
            console.log("printing lenght of char after pop-->"+char)
        }
        
    }
    console.log("New array "+ arra)
    str=str+" "+arra;
    return str;

}

//console.log("New Array after push -->" + arra);
/*for(let i=0;i<arr.length;i++)
{
    word = arr[i]. split(" ");
    console.log("word ="+ word);
    newWord=word[i].split("").length;
    console.log("New word "+ newWord);
    if(word > 4 && arr[i]==='a' || arr[i]==='e' || arr[i]==='i'|| arr[i]==='o'|| arr[i]==='u'){
            arr[i].pop();
        
    }
    arra.push(arr[i]);
}
|| char[i].split('')!=='e' 
    || char[i].split('')!='i'|| char[i].split('')!=='o'|| 
        char[i].split('') !=='u'){
console.log(arra);
*/


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = abbreviate;
