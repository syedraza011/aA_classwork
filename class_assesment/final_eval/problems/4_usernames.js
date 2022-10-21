/**************************************************************************************
Write a function `usernames(names)` that takes in an array of names. The function
should return an array containing the corresponding usernames. See the examples.

Examples:

var names = [
  'Oscar Alvarez',
  'Danny Catalano',
  'Kurstie Ozuna',
  'Matt Haws'
];

usernames(names); // => [ 'oalvarez', 'dcatalano', 'kozuna', 'mhaws' ]

Difficulty: Medium
*************************************************************************************/
let names = ['Oscar Alvarez','Danny Catalano','Kurstie Ozuna','Matt Haws'];
usernames(names); // => [ 'oalvarez', 'dcatalano', 'kozuna', 'mhaws' ]
function usernames(names) { 
  console.log(names);
  // console.log(typeof names);
  let array=[];
 
  for(let i=0;i<names.length;i++){
   let name=names[i].split(" ");
   let fName=name[0].slice(0,name.length-1)
   let lName=name[1];
   array.push(((fName +""+lName).toLowerCase()));
  }
  return array;
}

/******************** DO NOT MODIFY ANYTHING UNDER THIS LINE *************************/

module.exports = usernames;
