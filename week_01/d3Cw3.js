//loops

for(let i = 0; i <= 10; i++){
    console.log(i);
}
for(let i = 1; i <= 10; i++){
    console.log(i);
}
console.log("after the loop");

let strt=3;
let end=9;
printRang(strt,end);
function printRang(strt,end){
    for(let i = strt; i <= end; i++){
        console.log(i);
    }
}