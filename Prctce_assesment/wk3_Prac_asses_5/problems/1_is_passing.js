/*******************************************************************************
Write a function isPassing(assessments) that takes in an array of assessment objects.
The function should return a true if the average assessment score is at least 70.
It should return false otherwise.

Examples:

var assessments1 = [
  {number: 1, score: 60},
  {number: 2, score: 90},
  {number: 3, score: 80},
  {number: 4, score: 100},
  {number: 5, score: 85}
];

isPassing(assessments1) => true


var assessments2 = [
  {number: 1, score: 60},
  {number: 2, score: 20},
  {number: 3, score: 45}
];

isPassing(assessments2) => false
*******************************************************************************/
let assessments1 = [
  {number: 1, score: 60},
  {number: 2, score: 90},
  {number: 3, score: 80},
  {number: 4, score: 100},
  {number: 5, score: 85}
];

let assessments2 = [
  {number: 1, score: 60},
  {number: 2, score: 20},
  {number: 3, score: 45}
];

console.log(isPassing(assessments1));//=> true
console.log(isPassing(assessments2));//=> false
function isPassing(assessments) {
  let score=0;
  let avgScore=0;
  for (let i=0;i<assessments.length;i++){
    let assessment=assessments[i]
    //console.log(assessment['score']);
    score=(score + assessment['score']);
    avgScore=score/assessments.length;
    //console.log("Scores"+avgScore)
  }
  if(avgScore >= 70){
  return true
  } else {
    return false;
  }
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = isPassing;
