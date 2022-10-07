// Debug this function below so it passes mocha

// Examples:
//
// isMagicNumer(26) //=> true;
// isMagicNumer(50) //=> false;
//let number=26;
let magicify = function (number) {
  return number - 34;
};

let isMagicNumer = function (number) {
  let magicNumb = magicify(number);
  if (magicNumb % 13 === 0 || magicNumb < 0) {
    return true;
  }
  return false;
};
console.log(isMagicNumer(26)); //=> true;
console.log(isMagicNumer(50)); //=> false;

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = isMagicNumer;
