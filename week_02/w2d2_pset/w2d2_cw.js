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
  