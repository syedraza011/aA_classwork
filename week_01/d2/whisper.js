//6

  // Write a function `whisper` that takes in a string and returns a "whispered" version
// of that string.
//
// Examples:
// whisper("Hey Anthony"); // => "...hey anthony..."
// whisper("YEA! that was fun"); // => "...yea! that was fun..."

var str= "i am GOING to app academy";
console.log(whisper(str));
function whisper(string) 
{
    str=str.toLowerCase(str);
    return str;
}