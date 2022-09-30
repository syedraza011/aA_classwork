//8

// Write a function `echo` that takes in a string and returns that string "echo-ized".
//
// Examples:
// echo("Mom!"); // => "MOM! ... Mom! ... mom!"
// echo("hey"); // => "HEY ... hey ... hey"
// echo("JUMp"); // => "JUMP ... JUMp ... jump"
//
var word="Mom!";
console.log(echo(word));
function echo(word) {
    
    let part1 = word.toUpperCase();
    let part2 = word;
    let part3 =word.toLowerCase();
    let newWord= part1+"..."+part2+"..." +part3;
    return newWord;

}
