//
// Object Destructuring
//

// const person = {
//   name: 'Chloe',
//   age: 24,
//   location: {
//     city: 'Taipei',
//     temp: 88
//   }
// };

// // const name = person.name;
// // const age = person.age;
// const { name: firstName = 'Anonymous', age } = person;

// console.log(`${firstName} is ${age}.`);

// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}`);
// }

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName);

//
// Array destructuring
//

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];
const [ , , state = 'New York' ] = address;
console.log(`You are in ${state}`);

const item = ['coffee (hot)', '$2.00', '$2.60', '$2.75'];
const [ food, , mediumCoffeePrice, ] = item;
console.log(`A medium ${food} costs ${mediumCoffeePrice}`);