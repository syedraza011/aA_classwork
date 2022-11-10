// Element Replace
// Write a method element_replace that takes in an array and an object.
//  The method should return a new array where elements of the original
//   array are replaced with their corresponding values in the object.

arr1 = ["LeBron James", "Lionel Messi", "Serena Williams"];
obj1 = { "Serena Williams": "tennis", "LeBron James": "basketball" };
arr2 = ["dog", "cat", "mouse"];
obj2 = { dog: "bark", cat: "meow", duck: "quack" };
console.log(element_replace(arr2, obj2)); //  ["bark", "meow", "mouse"]
//console.log(element_replace(arr1, obj1)); // ["basketball", "Lionel Messi", "tennis"]
function element_replace(arr, obj) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    let word = arr[i];
    if (replaced(obj, word) !== "") {
      newArray.push(replaced(obj, word));
    } else {
      newArray.push(word);
    }
  }

  return newArray;
}
function replaced(obj, word) {
  let newWord = "";
  for (let key in obj) {
    if (key.includes(word)) {
      newWord += obj[key];
    }
  }
  return newWord;
}
