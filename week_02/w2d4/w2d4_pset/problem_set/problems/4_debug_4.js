// Debug this function below so it passes mocha

// Examples:
//
// isMagicNumer(26) //=> true;
// isMagicNumer(50) //=> false;
//let number=26;
let magicify = function(number) {
  return console.log(number- 34);
}

let isMagicNumer = function(number) {
  let magicNumb = magicify(number);
  if (magicNumb % 13 === 0 || magicNumb < 0) {
    return true;
  }
  return false;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = isMagicNumer;
