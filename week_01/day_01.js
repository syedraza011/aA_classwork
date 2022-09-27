console.log(4+4/2)// no error expression is correct
//(2+ -7)*3 // expression is wrong because
// it is not a funtion
//correct version is 
console.log(2+-7*3)
console.log(101%10) //expression is correct

console.log(12 - 4 % 3) // expression is correct

console.log(true && false)  //expression is correct

console.log(true && !(false || false)) //expression is correct answer is True

console.log(!true && !(false || false)) //expression is correct answer is  False

console.log('cat' + 'dog') // expression is correct catdog

console.log(2 + 'pizza') // 2pizza 

console.log(2.5 * 'fish') //expression is correct answer is NaN

console.log(5 >= 11)

console.log(5 === 5.0)

console.log(7 !== 7.1)

console.log(5 + 5 > 8)

console.log(6 + 6 !== 12)

console.log(2 > 1 || false) // 1 considered as boolian true so answer is true

console.log('true' === true) // string is being compared to boolian so answer is false

console.log(10 % 2 === 0)

console.log(21 % 2 === 0)

console.log(21 % 2 !== 0)

console.log(21 % 2 === 1)

console.log(12 % 3 === 0)

console.log(9 % 3 === 0) //remainder is zero so it is true

console.log(14 % 3 === 0) //remainder non zero it is false 

console.log('new york'[0]) // we are looking for index zero from the string

console.log('new york'[1])

console.log('san francisco'[2 * 3])

console.log('bootcamp'[3].toUpperCase())

console.log('bootcamp'.indexOf('T'))

console.log('bootcamp'.indexOf('camp'))

console.log('bootcamp'.indexOf('o') > -1)

console.log('science'.indexOf('x') === -1) // True expression as x does not exist in the string

console.log("Expression Evaluation part # 2");

// 1
var idx = 'abcde'.indexOf('D'); // since Upper case D does not exist so value would be -1
idx = idx + 11; // idx has a value of 11-1=10
console.log(idx); // value is 10 which will be printed 
console.log(idx * 2);
console.log(idx); // should be priting 20 not sure why is it printing 10;

// 2
var num = 33;
var isEven = num % 2 === 0; // this means check if num an even number 
console.log(isEven); // shuold print false
console.log(!isEven); // because of expression ! it would change from false to true 

// 3
var str1 = 'marker'; // string length is 6
var num = 'whiteboard'.length - str1.length; // num lenght is 10 and str1 is 6 so
console.log(num); // answe is 4
var str2 = 'bootcamp';
console.log(str2[num].toUpperCase()); // index 4 would be capital which is letter C
var char = str2[num].toLowerCase(); // index 4 will be lower case which is c
console.log(char + '!'); // c! 

// 4 have some questions
var sentence = 'welcome to bootcamp prep'; //length of string is 24
var lastChar = sentence[sentence.length - 1]; //setting the character number 24 which is p
//console.log(sentence[sentence.lenght]);
console.log(lastChar); // letter "p"
console.log(sentence.indexOf(lastChar)); // it printed 18
console.log("CONDITIONALS")

// 5
var age = 30; // try different numbers here
// age = 20;
age = 10;
if (age > 30) {
  console.log('older than 30'); // print this message only if age is greater than 30
} else {
  console.log('younger than 30'); // only print if above consition not true
}

// 6
var str = 'pizza'; // try different strings here
//str= 'coffee';
str='orange'
if (str.length > 10) { // check if the lenght of string length is greater than 10
  console.log('long string');
} else {
  console.log('short string');
}
if (str[0] === 'p') { // check if charracter on index 0 is p 
  console.log('starts with p');
}

// 7
var num = 15; // try different numbers here
//num=5;
num=25
if (num % 3 === 0) { //compare if remainder id zero if true then it is dvisible
  console.log('divisible by 3');
} else if (num % 5 === 0) {
  console.log('divisible by 5');
}

// 8
var num = 15; // try different numbers here
num= 10;
num= 9;
if (num % 3 === 0) {
  console.log('divisible by 3');
}
if (num % 5 === 0) {
  console.log('divisible by 5');
}

// 9
var str = 'App AcademY'; // try different strings here
str='App Academy';
if (str[0] === str[0].toUpperCase()) {
  console.log('starts with a capital!');
}
if (str[str.length - 1] === str[str.length - 1].toUpperCase()) {
  console.log('ends with a capital!');
}

// 10
var num = -44; // try different numbers here
num= 41;
num=99;
if (num > 0) {
  console.log('positive');
} else if (num < 0) {
  console.log('negative');
} else {
  console.log(0);
}
if (num % 2 === 0) {
  console.log('even');
} else {
  console.log('odd');
}
console.log("Conditional Muscle Memory");
var num = 11; // feel free to change the value of this variable
if (num > 5) {
  console.log('if'); // print letter 'if' if the condition meets
}

//2
var num = 5; // feel free to change the value of this variable
num=3;
num=1001;
if (num > 5) {
  console.log('if');
} else {
  console.log('else');
}
//3
var num = 0; // feel free to change the value of this variable
num= 100;
num=111;
if (num < 0) {
  console.log('if');
} else if (num > 0) {
  console.log('else if');
} else {
  console.log('else');
}