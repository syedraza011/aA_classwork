// Write a function mapByKey that takes an array of objects and a key string.
//  The function should return a new array containing the values from 
//  each object for the given key.
const locations = [
    {"city": "New York City", "state": "New York", "coast": "East"},
    {"city": "San Francisco", "state": "California", "coast": "West"},
    {"city": "Portland", "state": "Oregon", "coast": "West"},
  ];
  
console.log(mapByKey(locations, "state")); //["New York", "California", "Oregon"]
console.log(mapByKey(locations, "city")); //["New York City", "San Francisco", "Portland"]
function mapByKey(arr, key) {
    let array=[];
for(let i=0;i<arr.length;i++){
    array.push(arr[i][key])
}
return array;
}
