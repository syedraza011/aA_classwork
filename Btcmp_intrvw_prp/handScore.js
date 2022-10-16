// Write a function handScore that takes in a string representing a hand of cards 
// and returns it's total score. You can assume the letters in the string are 
// only A, K, Q, J. A is worth 4 points, K is 3 points, Q is 2 points, 
// and J is 1 point. The letters of the input string are not necessarily uppercase.
//HINT: use an object
console.log(handScore("AQAJ")); //11
console.log(handScore("jJka")); //9
function handScore(hand) {
  let score=0;
  let cards={A:4,K:3,Q:2,J:1};
  for(let i=0;i<hand.length;i++ ){
    score = score+cards[hand[i].toUpperCase()];
  }
  return score;
}

