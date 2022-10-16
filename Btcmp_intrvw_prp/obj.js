// Output
// {k: 2, a: 3, p: 2, i: 2, l: 2}
let string = 'kapilalipak';
mystring(string);
function mystring(string){
  
  const table={}; 
  for(let char of string) {
    table[char]=table[char]+1 || 1;
  }
  console.log(table)
}
