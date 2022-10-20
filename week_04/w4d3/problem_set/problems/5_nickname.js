/***********************************************************************
Write a function nickname(name) that takes in a name string and returns
a string representing their nickname. A nickname is the name up to the
second vowel repeated twice. See the examples.

Examples:

nickname('manuel'); // => 'MANU-MANU'
nickname('pikachu'); // => 'PIKA-PIKA'
nickname('bootcamp'); // => 'BOO-BOO'
nickname('bob'); // => 'BOB-BOB'
***********************************************************************/
console.log(nickname("manuel")); // => 'MANU-MANU'
console.log(nickname("pikachu")); // => 'PIKA-PIKA'
console.log(nickname("bootcamp")); // => 'BOO-BOO'
console.log(nickname("bob")); // => 'BOB-BOB'
console.log(nickname("manuel")); // => 'MANU-MANU'
function nickname(name) {
    let index = vowelIndex(name);
    let first = name.slice(0, index + 1).toUpperCase();
    return first + "-" + first;
}
function vowelIndex(str) {
    let counter = 0;
    let vowels = "aeiouAEIOU";
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (vowels.indexOf(char) > -1) {
            counter++;
            if (counter === 2) {
                //console.log("Viwels--->"+char)
                return i;
            }
        }
    }
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = nickname;
