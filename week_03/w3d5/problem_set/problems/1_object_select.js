/***********************************************************************
Write a function objectSelect(obj, cb) which takes as arguments an object
and a callback, and returns a new object where all the key value pairs
return true, when passed into the callback.

Example:

var obj = {
  one: "one",
  two: "something else",
  three: "three",
  four: "another thing."
};

function isEqual(a, b) {
  return a === b;
}

var matchingPairs = objectSelect(obj, isEqual);

matchingPairs; //=> {
  one: "one",
  three: "three"
}
***********************************************************************/
var obj = {
  one: "one",
  two: "something else",
  three: "three",
  four: "another thing."
};

function isEqual(a, b) {
  
  return a === b;
}
//console.log(objectSelect(obj, callback));
function objectSelect(obj, callback) {
  let result={};
for(let key in obj){
    let val=obj[key]
    if(callback(key,val)){
      result[key]=val;
    }
}
return result;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = objectSelect;
