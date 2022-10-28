
// // Aba is a German children’s game where secret messages are exchanged. 
// In Aba, after every vowel we add “b” and add that same vowel.
// // Write a method `aba_translate` that takes in a sentence string and 
// returns a new sentence representing its Aba translation. 
// Capitalized words of the original sentence should be properly capitalized 
// in the new sentence.

//examples
// // aba_translate(“Cats and dogs”) #=> “Cabats aband dobogs”
// // aba_translate(“Everyone can code”) #=> “Ebeveberyobonebe caban cobodebe”
// // aba_translate(“Africa is Africa in German”) 
// //#=> “Abafribicaba ibis Abafribicaba ibin Gebermaban”
console.log(aba_translate("Africa is Africa in German"));
console.log(aba_translate("Cats and dogs"));
function aba_translate(sentence){
    let arr=[];
    let words=sentence.split(" ");
    for (let i=0;i<words.length;i++){
        let word=words[i];
        arr.push(translated(word));
    }
    return arr.join(" ");
}
function translated(word){
    let newWord=''; //c //cabac
    vowels="AEIOUaeiou";
    for(let i=0;i<word.length;i++){ //i=0 word=cat so  //i=1 
        let char=word[i]; // c //a
        if(vowels.includes(char)){
            newWord +=char+'b'+char; //c //caba
        }
        else {
            newWord +=char; // c added here 
        }
    }
    return newWord;
}