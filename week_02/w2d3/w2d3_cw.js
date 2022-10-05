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
// loops
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

 // Matrix //nested array
 let Matrix=[
  [1,2,3], //matrix[0]
  [4,5,6], //matrix[1]
  [7,8,9] //matrix[2]
 ]
 for(let i=0;i<Matrix.length;i++){
  let subArray=Matrix[i]
  for(let j=0;j<subArray.length;j++){
    let ele=Matrix[i][j];
    console.log(ele);
  }
 }

 //nested array
 let plane=[
  [0,1,2,3,0],
  [1,4,3,1],
  [1,5,6,4],
  [0,4,3,2]
  ]
  console.log("Biggest Cordinate");
  console.log(getHighestCordinateOnAPlane(plane));
  function getHighestCordinateOnAPlane(plane){
    let biggest=plane[0][0];
    let currentBiggestIndex=[0,0];
    for(let i = 0; i < plane.length; i++){
      let subArray=plane[i];
      for(let j = 0; j < subArray.length ;j++){
        if(subArray[j]>biggest){
          biggest=subArray[j];
          currentBiggestIndex=[i,j];
        }
      }
    }
    return currentBiggestIndex;
 }
 //

 let array=[
  { name:`Ry`, favFood:[`brownies`,'sushi', 'tacos'] },
  {name:`Brookie`, favFood:[`Apples`,'Banana', 'Pears']}
 ]
 printFavoriteFood(array);
function printFavoriteFood(array){
  for(let i = 0; i < array.length; i++ ){
    let obj=array[i];
    let arrayInObj=obj.favFood;
    for(let j = 0; j<arrayInObj.length; j++){
      console.log(arrayInObj[j]);
    }
  }
}