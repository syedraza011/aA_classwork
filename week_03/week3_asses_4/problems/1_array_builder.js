/*******************************************************************************
Write a function `arrayBuilder(count)` that takes in a count object and returns
an array filled with the appropriate numbers of elements. The order of
the elements in the array does not matter, but repeated elements should be
grouped.

Examples:

arrayBuilder({'cats': 2, 'dogs': 1}); //=> ['cats', 'cats', 'dogs']
arrayBuilder({}); //=> []
*******************************************************************************/
let count={'cats': 2, 'dogs': 1};
console.log(arrayBuilder(count));
function arrayBuilder(count) {
  let array=[];
  for(let key in count){
    console.log(key);
    if(count[key]>1){
      for(let i=0;i<count[key];i++){
      array.push(key);
      }
      
    }
    else {
      array.push(key);
    }
    
  }
  return array;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = arrayBuilder;
