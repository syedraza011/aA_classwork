/***********************************************************************
Write a function `countScores(people)` that takes in an array of score
objects (people) as its input. A score object has two key-value pairs:
a name (string) and a score (number). `countScores(people)` should
return an object that has key-value pairs where each name is a key and
the value is their total score.

Example 1

var ppl = [ {name: "Anthony", score: 10},
            {name: "Fred", score : 10},
            {name: "Anthony", score: -8},
            {name: "Winnie", score: 12}];

var countPpl = countScores(ppl);
countPpl; //=> { Anthony: 2, Fred: 10, Winnie: 12 }

Example 2

var peeps = [
  {name: "Anthony", score: 2},
  {name: "Winnie", score: 2},
  {name: "Fred", score: 2},
  {name: "Winnie", score: 2},
  {name: "Fred", score: 2},
  {name: "Anthony", score: 2},
  {name: "Winnie", score: 2}
];
countScores(peeps); //=> { Anthony: 4, Fred: 4, Winnie: 6 }
***********************************************************************/
var people = [
  {name: "Anthony", score: 2},
  {name: "Winnie", score: 3},
  {name: "Fred", score: 2},
  {name: "Winnie", score: 4},
  {name: "Fred", score: 2},
  {name: "Anthony", score: 1},
  {name: "Winnie", score: 6}
];
console.log(countScores(people));
function countScores(people) {
  let person='';
  let newPerson={};
  //let score=0;
  
  //console.log(people.length);
  for(let i=0;i<people.length;i++){
    // i = 0
    person = people[i]; // { name: 'anthony', score: 4}

    let score = people[i].score;
    //console.log(person);
    if(newPerson[person.name] === undefined){
      newPerson[person.name] = score;      
    } else {
      newPerson[person.name] += score; 
    }

    // if(person.name === people[i].name){
    //   // console.log("personal score"+people[i].score);
    //   // //console.log(person.name)
    //   //=score=scores+person.score
    //   // person.score=scores;
    //   // newPerson.push(person);
    // } 
    // else {
    //   //scores +=people[i.score];
    //   newPerson.push(person);
    // }
    
  }
  return newPerson;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = countScores;
