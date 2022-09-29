/*function test(){
    var sub_array = [];
    //var super_array =[];
    for (var i=1;i<=3;i++){
        sub_array.push(i);
        //super_array.push(sub_array);
    }
    //alert(super_array);
}
test()
*/
const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split(' ');
console.log(words[3]);
// expected output: "fox"

const chars = str.split('');
console.log(chars[8]);
// expected output: "k"

const strCopy = str.split();
console.log(strCopy);
// expected output: Array ["The quick brown fox jumps over the lazy dog."]
let arr=['c','a','t']; //arrays are muteable means we can change.
let stra="cat";
stra[0]='x'; // because strings are immuteable taht why we are not able to mutate.
console.log(stra);
arr[0]='x';
console.log(arr); // we got xat output since we can change arrays. elemets can be anything.
arr=['hi',10,9,true,undefined,null,[1,2]]; // we put quotation marks becuase hi is not a reserve word

console.log(arr);
console.log(arr[0]);
console.log(arr[6]);
console.log(arr[6][1]);// first key in to main arary then we get into the sub array
console.log("arrays methods")
const fruits = ["Apple", "Orange","peer"];
console.log(fruits.length); //3 lenght
console.log(fruits.indexOf("peer")); //2 index
console.log(fruits.includes("watermelon")); //returns false;
console.log("Mutating methods");
fruits.push("water mellon"); // adds to end of the array
console.log(fruits); // [ 'Apple', 'Orange', 'peer', 'water mellon' ]
fruits.pop(); // it pops the last value
console.log(fruits); // [ 'Apple', 'Orange', 'peer' ]
fruits.unshift("melon"); // it puts the index value upfront
console.log(fruits);
fruits.unshift();
console.log(fruits);
console.log("Non mutation method");
let numbers=[1,2,3,4,20,47,56,10021];
console.log(fruits.concat(numbers)); // just puts togather arrays but does not update [ 'melon', 'Apple', 'Orange', 'peer', 1, 2, 3 ]
console.log(fruits); // prints origonal array here

console.log(numbers.slice()); // does not change anything
//console.log(numbers);
console.log(numbers.slice(1)); // does removes index 1 , so [2,3] output
//console.log(numbers);
console.log(numbers.slice(0,2));// start is inlcusive and end is exclusive
//console.log(numbers);
console.log(numbers.slice(0,5));
console.log(numbers.slice(2,7));
let string="hi my name is Xandor";
console.log(string);
console.log(string.split(" ")); // puts string in an array
console.log(string); //prints origonal
console.log(numbers.join("___"));// adds this to array 