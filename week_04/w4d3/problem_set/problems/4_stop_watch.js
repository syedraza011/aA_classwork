/***********************************************************************
Write a function stopWatch(totalSeconds) that takes in a number of
seconds. The function should return the time string based on that number
of seconds. The time should be formatted in hours (H), minutes (M), and
seconds(S) in the form HH:MM:SS.

Hint: the seconds and minutes count of the time should never
be greater than 59. How can we use modulo % to accomplish this?

Examples:

stopWatch(0); // => '00:00:00'
stopWatch(4); // => '00:00:04'
stopWatch(128); // => '00:02:08'
stopWatch(1234); // => '00:20:34'
stopWatch(3612); // => '01:00:12'
stopWatch(7640); // => '02:07:20'
stopWatch(86400); // => '24:00:00'
stopWatch(86522); // => '24:02:02'
stopWatch(99999); // => '27:46:39'
***********************************************************************/
//stopWatch(totalSeconds);
console.log(stopWatch(99999)); // => '27:46:39'
function stopWatch(totalSeconds) {
  let seconds = totalSeconds % 60;
  let minutes = Math.floor(totalSeconds / 60)% 60;
  let hours = Math.floor(totalSeconds / 3600);

  //if(totalSeconds)
  let watch = "";
  
  watch = showDoubleDigits(hours) + ":" 
        + showDoubleDigits(minutes) + ":" 
        + showDoubleDigits(seconds);
  return watch;
}
function showDoubleDigits(num) {
    if (num < 10) {
      return '0' + num;
    } else {
      return String(num);
    }
  }

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = stopWatch;
