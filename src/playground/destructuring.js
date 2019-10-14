// const person = {
//     name: 'Jose',
//     age: 50,
//     location: {
//         city: 'Dublin',
//         temp: 92
//     }
// };

// const { name, age } = person;

// console.log(`${name} is ${age}`);


/* const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        //name: 'Penguin'
    }
};

const { name: publisherName = 'Self-Published' } = book.publisher;

console.log(publisherName); */
/* 
const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

const [street, city, state, zip] = address; */

const item = ['Coffe (hot)', '$2.00', '$2.50', '$2.75'];

const [ coffee, small, medium, large] = item;

console.log(`A medium ${coffee} costs ${medium}`);