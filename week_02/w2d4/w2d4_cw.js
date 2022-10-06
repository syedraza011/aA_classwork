// Strings vs arrays //.index, .includes,.concat,.slice
//strings- primitive, non muteable
//array=non primitive , muteable
let str="hello";
str[0]=["x"];
console.log(str);
let arr=['h','e','l','l','o'];
arr[0]='x';
console.log(arr);
arr.join('++')
console.log(arr.join('++')); // add this to after every index and tur

console.log(str.split(" "));