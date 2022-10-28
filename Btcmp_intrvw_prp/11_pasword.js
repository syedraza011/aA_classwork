//password
//if > 3 then no change
//if repeat more than 2 then falswe
//size must 5 & 10 inclusive
// sentence='aabb333ccc'; false;
// sentence='aaabcmamamahag' false
// sentence='abc1234hdkl' true
console.log(password('aabb333ccc'));
console.log(password('aaabcmamamahag'));
console.log(password('abbbbc1234hdkl'));
function password(sentence){
  let obj={};
  if(sentence.length <=5 && sentence.length<10){
    return false;
  }
  for(let i=0;i<sentence.length;i++){
    char=sentence[i];
    if(obj[char]===undefined){
      obj[char]=1;
    }
    else {
      obj[char] +=1;
    }
  }
  for(let char in obj){
    if(obj[char]>2){
      return false;
    }
  }
  return true;
} 
