/*******************************************************************************
Write a function highestScore(students) that takes in an array of student objects
as a parameter. It should return a string that corresponds to the student with
the highest score. The string should contain that student's initials
concatenated with their id. Assume the array contains at least 1 student object and
the student with the highest score is unique (there are no ties).
Example:

var students = [
 {name: 'Alvin Zablan', id: 128, score: -42},
 {name: 'Eliot Bradshaw', id: 32, score: 57},
 {name: 'Tommy Duek', id: 2, score: 99},
 {name: 'Fred Sladkey', id: 256, score: 94}
];

highestScore(students); //=> 'TD2'
*******************************************************************************/
var students = [
  { name: "Alvin Zablan", id: 128, score: -42 },
  { name: "Eliot Bradshaw", id: 32, score: 57 },
  { name: "Tommy Duek", id: 2, score: 99 },
  { name: "Fred Sladkey", id: 256, score: 94 },
];
console.log(highestScore(students));
function highestScore(students) {
  let str='';
  //students= array of objects
  //want to return initialstid of student with highest
  let max=0;
  let answer='';
  // for (let student of student) //diferent loops
  // for(let studen in student)// loops in objects
  for(let i=0;i<students.length;i++){
    let student=students[i];
    
    if(student.score>max){
      max=student.score;
      answer=student;
    }

  }
  // assign th names to get entity
  //let names=max.name
  return 
  console.log(answer)
  //return str;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = highestScore;
