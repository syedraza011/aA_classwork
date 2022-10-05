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
console.log("New Example")
let students= [`kevin`, `jesse`, `jason`, `simson`];
//let name= `jael`;
//console.log( `Hi my name is ${name}`);
pairstudent(students);
function pairstudent(arr){
  for(let i=0;i<arr.length;i++){
    let student1=arr[i];
    for(let j=i;j<arr.length;j++){
      let student2=arr[j];
      console.log(`${student1} will be paired with ${student2}`);
    }
  }
}
let arr=[0,1,2,3,4,5,6]
let target=5;
//pointers
toSum(arr,target);
 function toSum(arr,target){
  for(let i=0;i<arr.length;i++){
    for(let j=i+1; j<arr.length;j++){
      if(arr[i]+arr[j]===target){
        console.log([i,j]);
      }
    }
  }
 }