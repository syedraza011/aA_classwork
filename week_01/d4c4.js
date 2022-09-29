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