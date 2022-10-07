/***********************************************************************
Write a function `titleize(title, stopWords)` that takes in a string
`title` and an array of strings `stopWords`. Return the `title` where
every word that does not exist in the `stopWords` array is capitalized;
all others lowercase.

Hints: Decompose this problem into helper functions. Perhaps create these,
- removePunctuation(word)
- isStopWord(word, stopWords)

- Test after you write every function of this decomposition!
- First write a function removePunctuation(word) that takes in a single
word and returns that same word without any punctuation at the end. Feel
free to use the punctuation array we've given you below.
- Second, write a function isStopWord(word, stopWords) that takes in a
single word and returns true if it is a stop word. The check will vary
depending on if the word contains punctuation or not, so use your
removePunctuation function before checking.
- Use slice


var punctuation = [";", "!", ".", "?", ",", "-"];

Examples:

titleize("forest gump, the runner", ["the"])
=> "Forest Gump, the Runner"

titleize("MASTER AND COMMANDER", ["and"])
=> "Master and Commander"

titleize("i LOVE; lover of mine", ["love", "of"])
=> "I love; Lover of Mine"

titleize("shall we dance?", ["dance"])
=> "Shall We dance?"
***********************************************************************/
let title="forest gump, the runner";

let stopWords='the'
function titleize(title, stopWords) {
    let newWords=[];
    let words=title.split(" ");
    for(let i = 0;i < words.length; i++){
        let word=words[i];
        if(isStopWord(word,stopWords)){
            let lowerWord=word.toLowerCase();
                newWords.push(lowerWord);
        } else {
            let capWord=capitalized(word);
            newWords.push(capWord);
        }
    }

    return newWords.join(" ");
    //removePunctuation(word);
}

function removePunctuation(word){
    let punctuation=[";", "!", ".", "?", ",", "-"];
    let lastChar=word[punctuation.length-1];
    //let newTitle=[];
    //for()

}
function capitalized(string){
    let firstChar=string[0];
    let everythingElse=string.slice(1);
    return firstChar.toUpperCase()+ everythingElse.toLowerCase();
}
function isStopWord(word, stopWords){
    if(stopWords.indexOf(word)>-1){
        return true 
    } else {
        return false;
    }
    
    
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = titleize;
