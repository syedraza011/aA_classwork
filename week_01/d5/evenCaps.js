// Write a function evenCaps(sentence) that takes in a sentence as an
// argument and returns the same string with each even index being
// capitalized. Index 0 counts as even.
//
// Examples:
//
// evenCaps("Tom got a small piece of pie")
// => "ToM GoT A SmAlL PiEcE Of pIe"
// evenCaps("the book is in front of the table")
// => "ThE BoOk iS In fRoNt oF ThE TaBlE"
let sentence='Tom got a small piece of pie';
console.log(evenCaps(sentence));
function evenCaps(sentence){
    let nSentence=sentence.split(" ");
    //console.log(nSentence);
    for(let i=0 ; i<nSentence.length;i++){
        if(i % 2 === 0)
        {
            nSentence[i]=nSentence[i].toUpperCase(nSentence[i]);
        }

    }
    return nSentence=nSentence + " ";
}