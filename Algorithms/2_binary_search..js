//Binary Search
let arr = [10, 20, 30, 40, 50, 60, 70, 80];
let target = 20;
console.log(BinarySearch(arr, target));
if(arr.length===0){
  return -1;
}
function BinarySearch(arr, target) {
  let mid = Math.floor(arr.length / 2);
  console.log("MID---> " + mid);
  let left = arr.slice(0, mid);
  console.log("left---> " + left);
  let right = arr.slice(mid + 1);
  console.log("Right---> " + right);
  if (arr[mid] === target) {
    return mid;
  } else if (target < arr[mid]) {
    return BinarySearch(left, target);
  } else {
    let rest = BinarySearch(right, target);
    return rest === -1 ? -1 : mid + 1 + rest;
  }
}
