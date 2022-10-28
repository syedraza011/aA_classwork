// The function is expected to return an INTEGER.
//  * The function accepts INTEGER_ARRAY numbers as parameter.
//  */
//loop through numbers array 
// nested loop and check if any pair gives the sum ===0
// if we have sum ====0 then keep the track of counter
//return counter and print
function savvySums(numbers) {
    let counter=0;
   for(let i=0;i<numbers.length;i++){
       let num1=numbers[i]; //2 num1=2
       for(let j=i; j<numbers.length;j++){
           let num2=numbers[j]; //2//-3 num1=2 num2=-3// i=2 and j=3 // i=2 , 
           if(num1 +num2===0){
               counter++;
           }
       }
   }
   return counter;
    
}


console.log(savvySums([2, -3, 3, 4, -2]))     // 2
console.log(savvySums([42, 3, -1, -42]))      // 1
console.log(savvySums([-5, 5]))               // 1
console.log(savvySums([19, 6, -3, -20]))      // 0
console.log(savvySums([9]))                   // 0





Aba is a German children’s game where secret messages are exchanged. In Aba, after every vowel we add “b” and add that same vowel.

Write a method `aba_translate` that takes in a sentence string and returns a new sentence representing its Aba translation. Capitalized words of the original sentence should be properly capitalized in the new sentence.

aba_translate(“Cats and dogs”) #=> “Cabats aband dobogs”

aba_translate(“Everyone can code”) #=> “Ebeveberyobonebe caban cobodebe”

aba_translate(“Africa is Africa in German”) #=> “Abafribicaba ibis Abafribicaba ibin Gebermaban”
