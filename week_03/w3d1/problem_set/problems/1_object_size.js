/***********************************************************************
Write a function `objectSize(obj)` that takes in an object and returns
the number of key-value pairs in the object.

Examples:

var obj1 = {
  name: 'Fido',
  age: '4'
}

objectSize(obj1); // => 2

var obj2 = {
  name: 'App Academy',
  course: 'Bootcamp Prep',
  locations: ['SF', 'NY']
}

objectSize(obj2); // => 3
***********************************************************************/
let obj = {
  name: 'App Academy',
  course: 'Bootcamp Prep',
  locations: ['SF', 'NY']
};
console.log(objectSize(obj));
function objectSize(obj) {
 // let size=0;
/*for(let key in obj){
  console.log(obj[key]);
  size++;
}*/
size=Object.keys(obj).length
return size;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = objectSize;
