/***********************************************************************
Write a function `valuePair(obj1, obj2, key)` that takes in two objects
and a key (string). The function should return an array containing the
corresponding values of the objects for the given key.

Examples:

var object1 = {name: 'One', location: 'NY', age: 3};
var object2 = {name: 'Two', location: 'SF'};

valuePair(object1, object2, 'location'); // => [ 'NY', 'SF' ]
valuePair(object1, object2, 'name'); // => [ 'One', 'Two' ]
***********************************************************************/
let obj1 = {name: 'One', location: 'NY', age: 3};
let obj2 = {name: 'One', location: 'SF', age: 3};
let val1;
let val2;
console.log(valuePair(obj1, obj2,"location"));
function valuePair(obj1, obj2, key) {
    val1=obj1[key]
    val2=obj2[key]
    return [val1,val2]
    //for ( let key in valuepair()){
//array.push(key);
    //}
return array;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = valuePair;
