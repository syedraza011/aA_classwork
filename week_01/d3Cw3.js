//loops
/*
for(let i = 0; i <= 10; i++){
    console.log(i);
}
for(let i = 1; i <= 10; i++){
    console.log(i);
}
console.log("after the loop");

let strt=3;
let end=10;
printRang(strt,end);
function printRang(strt,end){
    for(let i = strt; i <= end; i++){
        console.log(i);
    }
}
*/
//While loop
let nStrt = 7;
let nEnd = 21;
console.log("While loop");
printRang(nStrt,nEnd);
function printRang(nStrt,nEnd){
    let i = nStrt;
    while( i <= nEnd){
        console.log(i);
        i++;
    }
}
//infinite loop
/*let i=20;
while(i === 20){
console.log(i);
}
*/
//

/*let j=20;
while(true){
console.log(j);
}

let k=20;
while(false){
console.log(k);
}*/
// funtion to skip number 5
/*console.log("FUntion Skip 5");
skipFive(20);
function skipFive(num){
    for (let i=1;i<=num; i++){
        if(i===5){
        continue; // takes back to loop once this is true;
        }
        console.log(i);
    }
}
*/
/*console.log("Break at 5");
breakAtFive(20);
function breakAtFive(num){
    for (let i = 1;i <= num; i++){
        if(i === 5){
            break; //this would get us out of the loop
        }
        console.log(i);
    }
}
*/
console.log("if the number is prime");
console.log(isPrime(7));
console.log("if the 2nd number is prime");
console.log(isPrime(9));
console.log("if the 3rd number is prime");
console.log(isPrime(15));
function isPrime(num){
    if(num < 2)
    {
        console.log("Not a prime number");
    }
    else{
        for (let i=2; i<num;i++){
            if(num % i === 0){
                return false;
                //break;
                //console.log("number is not prime");
                //break;
            }
        }
        
        // console.log("number is prime");
        return true;
        //break;
            
    }
}



