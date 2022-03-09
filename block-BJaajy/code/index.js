let first = new Promise((resolve) => 
setTimeout(() => resolve(Math.random()), 1000)
);
let secound = new Promise((resolve) => 
setTimeout(() => resolve(Math.random()), 2000)
);
let three = new Promise((resolve) => 
setTimeout(() => resolve(Math.random()), 3000)
);
let four = new Promise((resolve) => 
setTimeout(() => resolve(Math.random()), 4000)
);
Promise.all([first,secound,three,four]);

userName = [
  'mojombo',
  'defunkt',
  'pjhyett',
  'wycats',
  'ezmobius',
  'ivey'
];

let name = userName.map((user) => {
  return fetch(`https://api.github.com/users/${user}`).then((res) => res.json()).then((data) => {console.log(data.followers)});
});

let first = fetch('https://random.dog/woof.json').then((res) => res.json());
let secound = fetch('https://aws.random.cat/meow').then((res) => res.json());
Promise.race([first, secound]);

const one = new Promise((resolve, reject) =>
  setTimeout(() => resolve('Arya'), 1000)
);
const two = new Promise((resolve, reject) =>
  setTimeout(() => reject(new Error('Whoops!')), 2000)
);
const three = new Promise((resolve, reject) =>
  setTimeout(() => resolve('John'), 3000)
);

let promise = [one,two,three];
Promise.allSettled(promise).then((result) => result.forEach((result) => { console.log(result.status)}));



Promise.all([
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('Arya'), 1000);
  }),
  'Sam',
  { name: 'John' },
]).then(console.log);

// {'Arya','Sam','Jhon'};