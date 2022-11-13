

console.log(runningSum = function(nums))
var runningSum = function(nums) {
    let arr=[];
    let sum=0
    arr.push(nums[0]);
    for(let i=0;i<nums.length;i++){
        let num=nums[i];
         sum +=num;
        arr.push(sum)
    }
    return arr;
};