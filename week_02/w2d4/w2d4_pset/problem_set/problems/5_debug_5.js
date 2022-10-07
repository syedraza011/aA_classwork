// Debug this function below so it passes mocha

// Examples:
//
// fizzBuzz(19) //=> [3, 5, 6, 9, 10, 12, 18]

function fizzBuzz(max) {
let i = 1;
let array = [];
while(i < max) {
    if ((i % 5===0 || i % 3 === 0 ) && i !== 15) {
      array.push(i);
    }
    i += 1;
  }

  return array;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = fizzBuzz;
