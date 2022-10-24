//Binary Search
let arr=[1,2,3,4,5,6,7,8]
let target=8;
console.log(BinarySearch(arr,target));
function BinarySearch(arr,target){
  let mid=Math.floor(arr.length/2);
  console.log("MID---> "+mid)
  let left=arr.slice(0,mid);
  console.log("left---> "+left)
  let right=arr.slice(mid+1);
  console.log("Right---> "+right)
  if(arr[mid]===target){
    return mid;
}
else if(target < arr[mid]){
  return BinarySearch(left,target)
}
else {
  let rest= BinarySearch(right,target)
  return rest===-1 ? -1: mid+1+rest
}
}
