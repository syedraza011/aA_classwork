/***********************************************************************
Write a function winningHand(hand1, hand2) that takes in two strings
representing a hand of 4 cards. Return the string of the hand with the
higher total score. If there is a tie, return 'DRAW'. Possible cards are
J, Q, K.

J = 1 point
Q = 2 points
K = 3 points

Examples:

winningHand('JQKJ', 'QQJJ'); // => 'JQKJ'
winningHand('KJKJ', 'QQQK'); // => 'QQQK'
winningHand('JKJJ', 'QQJJ'); // => 'DRAW'
winningHand('KJKJ', 'QQQQ'); // => 'DRAW'
***********************************************************************/
console.log(winningHand('JQKJ', 'QQJJ')); // => 'JQKJ' //7
console.log(winningHand('KJKJ', 'QQQK')); // => 'QQQK'
console.log(winningHand('JKJJ', 'QQJJ')); // => 'DRAW'
console.log(winningHand('KJKJ', 'QQQQ')); // => 'DRAW'
function winningHand(hand1, hand2) {
    let count1=handScore(hand1);
    let count2=handScore(hand2);
    console.log(count1)
    console.log(count2)
    if(count1>count2){
        return hand1;
    }
    if(count1===count2){
        return 'DRAW';
    } else {
        return hand2;
    }
}
function handScore(string){
    let score=0;
    let value={J:1,Q:2,K:3};

    for(let i=0;i<string.length;i++){
        let card=string[i];
        score +=value[card];
    }
    return score;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = winningHand;
