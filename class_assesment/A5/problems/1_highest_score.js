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
  let largest='';

  for(let key in students){
    //console.log(students[key]);
    let student=students[key];
    console.log(student.score)
    
    if(student.score>=largest){
      str +=
    }
  }
  // let st = students[0];
  // for (let i = 0; i < students.length; i++) {
  //   let student = students[i];
  //   let student1 = students[i + 1];
  //   if (student['score'] > student1['score']) {
  //     st = student;
  //   } else {
  //     st = student1;
  //   }
  // }
  //return st;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = highestScore;
