// QUick Sort
//it's a divide and conqure
// preffred end of list mark the largest integar
// a=[10,16,8,12,15,6,3,9,5,infinity]
//now partion procedure
/*let a = [10, 16, 8, 12, 15, 6, 3, 9, 5];
console.log(quickSort(a));
const quickSort = (arr) => {
  if (arr.length <= 1) return arr;
  let pivot = arr.pop();
  let left = quickSort(arr.filter((ele) => ele < pivot));
  let right = quickSort(arr.filter((ele) => ele >= pivot));
  return left.concat([pivot], right);
};*/
let arr=['a','b','c','d','e','b','a','x'];
console.log(quicksort(arr));
const quicksort =(arr)=> {
  if(arr.length<=1) return arr;
  let pivota=arr.pop();
  let leftside=quicksort(arr.filter((ele) => ele <pivota))
  let rightside=quicksort(arr.filter((ele) => ele >= pivota))
  return leftside.concat ([pivota],right)
};
