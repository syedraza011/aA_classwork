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