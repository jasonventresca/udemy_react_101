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
