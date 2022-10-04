var dog1 = {
    name: 'Fido'
  };
  
  dog1.bark = function () {
    console.log('bark bark!');
  };
  
  dog1['speak'] = function (string) {
    console.log('WOOF ' + string + ' WOOF!!!');
  };
  
  dog1.bark(); // prints `bark bark!`
  dog1.speak('pizza'); // prints `WOOF pizza WOOF!!!`

  var dog2 = {
    name: "Rover",
  
    bark: function () {
      console.log("bork bork!");
    },
  
    speak: function (string) {
      console.log("BORK " + string + " BORK!!!");
    }
  };
  // Notice that in the object above, we still separate the key-value pairs with commas.
  // `bark` and `speak` are just keys with long-looking values.
  
  dog2.bark(); // prints `bork bork!`
  dog2.speak('burrito'); // prints `BORK burrito BORK!!!`
  var bootcamp = {
    name: 'App Academy',
  
    founders: ['Kush', 'Ned'],
  
    locations: ['SF', 'NY'],
  
    students: ['Tommy', 'Fred', 'Meagan', 'Alex'],
  
    population: 200,
  
    birthYear: 2012,
  };
  console.log(bootcamp.name+" " + bootcamp.students+" "+bootcamp.birthYear);
  let dog = {name: "Fido", age: "2"}
 Object.keys(dog)
['name', 'age']
console.log("")
