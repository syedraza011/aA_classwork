// Math 
Math.floor(3.8) //eounding down so 3 is answer
Math.PI;
Math.ceil(3.8) //aproximately 4
Math.round(3.8) //
Math.sqrt (9) //3
Math.abs (-3.2) // 3.2 is absolute value |-3.2|=3.2
let radius=4;
console.log(circleArea(radius));
function circleArea(radius){
  let area= Math.PI*Math.sqrt(radius*radius);
  return Math.floor(area);
}