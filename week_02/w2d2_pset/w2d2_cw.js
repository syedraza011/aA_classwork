//class work
//Objects
console.log(catBuilder("whiskers","black","yarn"));
function catBuilder(name,color,toys){
let cat={
/*cat.name=name;
cat.color=color;
//2nd way of doing

cat["name"]=name;
cat["color"]=color; // we can only key in objects when they are string
return cat
}*/
//3rd way of doing
  name: name,
  color: color,
  toys: toys,
};
return cat;
}
//2nd example
console.log(catBuilder("whiskers","black","yarn"));
function catBuilder(name,color,toys){
  return{
    name: name,
    color: color,
    toys: toys,
  };
  //return cat;
  }

  //fucntion decompostion and objects
  //breaking down a problem in several functions
  // clean code , complexity, managing 
  //break project in small bits and pieces so it's easy to deal with
  //example of decomposition of a function
  //laligetSum(num) and returns the sum of prime numbers to less or equal to "num"
//lalogetSum(10)=2,3,5,6=17
//laligetSum(17) 2,3,5,7,11,13,17
//isprime function
console.log("Prime sum "+" "+laligetSum(10));
console.log(laligetSum(17));
function isprime(num){
  if(num<2){
  return false;
  }
  for(let i=2;i<num;i++){
    if(num % i ===0)
    {
      return false;
      
    }
  }
  return true;
}
function laligetSum(num){
  let sum=0;
  for(let i=2;i<num;i++){
    if(isprime(i)){
      sum +=i;
    }
  }
  return sum;
}


//Objects new topic and important
//java script data Structure
//muteable 
//they have keys and value pair
// key is always a string
//a value can be anything
//keys are uniqe , no repetitive 
//objects are unorderd where as array are ordered
//when we have objects
let cat ={
  name: "whiskers",
  color: "balck",
  toy: {
  outside:["ball","whistle"],
  inside:["blanket"]
  }
}
cat["name"]="jael";
cat["age"]=21;
console.log(cat);
console.log(cat["color"]);
console.log(cat.name);





