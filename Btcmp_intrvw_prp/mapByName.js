// Write a function mapByName that takes in an array of objects and 
// returns a new array containing the names of each object.
const pets = [
    {"type": "dog", "name": "Rolo"},
    {"type": "cat", "name": "Sunny"},
    {"type": "rat", "name": "Saki"},
    {"type": "dog", "name": "Finn"},
    {"type": "cat", "name": "Buffy"}
  ];
    const countries = [
   {"name": "Japan", "continent": "Asia"},
   {"name": "Hungary", "continent": "Europe"},
   {"name": "Kenya", "continent": "Africa"},
  ];
  console.log(mapByName(pets)); //["Rolo", "Sunny", "Saki", "Finn", "Buffy"]
  console.log(mapByName(countries)); //["Japan", "Hungary", "Kenya"]
function mapByName(arr) {
    let array=[];
    for(let i=0;i<arr.length;i++){
        array.push(arr[i].name);
    }
    return array;
}

