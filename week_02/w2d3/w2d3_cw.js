// class work
// nested loops
(everycombination());
function everycombination(){
  for(let i=0;i<3;i++){
    console.log(`outterloop: ${i}`)// string interpolation
    for(let j=0;j<5;j++){
      console.log(`Inner loop: ${j}`);
    }
  }
}
//
let students= [`kevin`, `jesse`, `jason`, `simson`];
//let name= `jael`;
//console.log( `Hi my name is ${name}`);
