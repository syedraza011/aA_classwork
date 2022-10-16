// Consonant Cancel
// Write a function consonantCancel that takes in a sentence and returns a new sentence 
// where every word begins with it's first vowel.
console.log(consonantCancel("down the rabbit hole")); // "own e abbit ole"
console.log(consonantCancel("writing code is challenging")); // "iting ode is allenging"
function consonantCancel(sentence) {
    let array=[];
    
    let words=sentence.split(" ");
    //console.log(words)
    for(let i=0;i<words.length;i++){
        let word=words[i];
        //console.log("Word--Printing--"+word)
        let newword=removeLetter(word);
        //console.log("New Word"+newword)
        array.push(newword);
    }
    //console.log(array)
    return array.join(" ");
}

function removeLetter(word){
    //console.log("in function")
    //console.log("passed functiono"+"  "+word)
    //let newWord='';
    let vowels="aeiouAEIOU";
    for(let i=0;i<word.length;i++){
        //let char=word[i];
       // console.log("Char"+" --  "+char)
        if(vowels.includes(word[i])){
            return word.slice(i);
            //console.log("New word"+"  "+newWord)
            //console.log(newWord)
        }
        //console.log("BEfore return "+newWord)
        //return newWord;
    }
}