const person = {
  name: 'Jason',
  age: 27,
  location: {
    city: 'New York',
    temp: 62
  }
};

// Destructuring
const {name, age} = person;

// Destructring from a nested object.
// Also, renaming temp -> temperature in the destination variable.
const {city, temp: temperature} = person.location;

console.log(`${person.name} is ${person.age}.`);
console.log(`It's ${temperature} in ${city}.`);

const [one, ...two] = [1, 2, 3, 4.5, 5.6, 7, 8, 9.10];
console.log(one, two);

var {three = 3.14, four} = {'threex': 3, 'four': 4};
console.log(three, four);
