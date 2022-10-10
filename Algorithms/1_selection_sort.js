//Selection Sort
function swap(arr,xp,yp){
  let temp=arr[xp];
  arr[xp]=arr[yp];
  arr[yp]=temp;
}
let arr = [4, 6, 1, 3, 7, 9, 0, 2];
let n = arr.length;
console.log(selectionSort(arr, n));
function selectionSort(arr, n) {
  //let min = arr[0];
  let temp = 0;
  for (let i = 0; i < n-1; i++) {
    let min_idx=i;
    for(let j=i+1;j<n;j++){
      if (arr[j]< arr[min_idx]) {
        min_idx = j;
        swap(arr,min_idx,i);
        console.log(arr);
      }
    }
  }
  //console.log(arr);
}
