//Binary Search
let arr=[1,2,3,4,5,6,7,8]
let target=5;
BinarySearch(arr,target);
function BinarySearch(arr,target){
  let mid=Math.floor(arr.length/2);
  let left=arr[mid-1];
  let right=arr[mid+1];
  if(mid===target){
    return mid;
}
else if(mid < left){
  return BinarySearch(left,target)
}
else {
  return BinarySearch(right,target)
}
}
