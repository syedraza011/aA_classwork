/***********************************************************************
Write a function `collapseString(str)` that takes in a string as an
argument. The function should return the string where 'streaks' of
consecutive characters are collapsed to a single character.

Examples:

collapseString('apple'); //=> 'aple'
collapseString('AAAaalviiiiin!!!'); //=> 'Aalvin!'
collapseString('hello   app academy'); //=> 'helo ap academy'
***********************************************************************/
console.log(collapseString('AAAaalviiiiin!!!'));
function collapseString(str) {
    let string='';
    for(let i=0;i<str.length;i++){
        let char=str[i];
        let char1=str[i+1];
        if(char !==string[string.length-1]){
        
            string +=char;
        }
        
    }
return string;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = collapseString;
