// Write a function pyramidSum that takes in an array of numbers representing
// the base of a pyramid. The function should return a 2D array representing
// a complete pyramid with the given base. To construct a level of the pyramid,
// we take the sum of adjacent elements of the level below.
console.log(pyramidSum([1, 4, 6])); // [[15], [5, 10], [1, 4, 6]]
console.log(pyramidSum([3, 7, 2, 11])); // [[41], [19, 22], [10, 9, 13], [3, 7, 2, 11]]
function pyramidSum(base) {
    let pyramid1=[base];
   
    while(pyramid1.length<base.length){
        
        let prevLevel = pyramid1[0];
        //console.log("prevLevel"+prevLevel)
        let nextLevel = adjacentSum(prevLevel);
        //console.log("prevLevel"+nextLevel)
        pyramid1.unshift(nextLevel);
        
    }

return pyramid1;
}
function adjacentSum(array){
    let pyramid=[];
    for(let i=0;i<array.length;i++){
        if(i<array.length-1){
            
            pyramid.push(array[i]+array[i+1]);
        }
    } 
    return pyramid;
}
