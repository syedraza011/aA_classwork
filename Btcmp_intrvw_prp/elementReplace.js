// Element Replace
// Write a method element_replace that takes in an array and an object.
//  The method should return a new array where elements of the original
//   array are replaced with their corresponding values in the object.

arr1 = ["LeBron James", "Lionel Messi", "Serena Williams"];
obj1 = { "Serena Williams": "tennis", "LeBron James": "basketball" };

element_replace(arr1, obj11); // ["basketball", "Lionel Messi", "tennis"]

arr2 = ["dog", "cat", "mouse"];
obj2 = { dog: "bark", cat: "meow", duck: "quack" };

element_replace(arr2, obj2); // ["bark", "meow", "mouse"]
function element_replace(array, obj) {
let result = [];
        for (key in obj) {
            result.push(key[obj]);
            arr = result;
        }
        return result;
    }

