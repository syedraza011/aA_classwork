// Output
// {k: 2, a: 3, p: 2, i: 2, l: 2}
/*let string = 'kapilalipak';
mystring(string);
function mystring(string){
  
  const table={}; 
  for(let char of string) {
    table[char]=table[char]+1 || 1;
  }
  console.log(table)
}
*/

// Element Replace
// Write a method element_replace that takes in an array and an object.
//  The method should return a new array where elements of the original
//   array are replaced with their corresponding values in the object.

arr1 = ["LeBron James", "Lionel Messi", "Serena Williams"];
obj1 = { "Serena Williams": "tennis", "LeBron James": "basketball" };

element_replace(arr1, obj1); // ["basketball", "Lionel Messi", "tennis"]
function element_replace(arr1, obj1){

}