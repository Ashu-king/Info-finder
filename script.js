'use strict';

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
/*
const Alphabets = 'ABCD EFGH IJKL MNOP QRSTU VWXYZ';
console.log(Alphabets.indexOf('D'));
console.log(Alphabets.lastIndexOf('D'));
console.log(Alphabets.indexOf('EFGH'));
console.log(Alphabets.slice(0, 8));
const p = Alphabets.toLocaleLowerCase();
const c = p[0].toLocaleUpperCase() + p.slice(1);

console.log(c);
const email = 'ashujha007322@gmail.com';
const Email = 'AshuJHa007322@gmail.CoM\n';
const lowercaseEmail = Email.toLocaleLowerCase();
const coor = lowercaseEmail
  .trim()
  .replace('ashujha007322@gmail.com', 'creativemedia004@gmail.com');
console.log(coor);
console.log(coor.includes(''));

//const Name = ['Ashu', 'Jack', 'Sansa', 'Rudy'];
*/
function myFunction() {
  const Name = {
    name1: [
      'ARSALAN',
      'HARSHIT',
      'PRIYANSHU',
      'AMAN',
      'VASU',
      'BHAVYA',
      'PARLLAV',
      'ADNAN',
      'AHMAD',
      'GAURAV',
      'RUDY',
      'ASHU',
      'JACK',
      'SANSA',
    ],
    Property: function (name_of) {
      const details = new Map([
        [
          'ASHU',
          {
            phone: '9868381599',
            Email: 'ashujha007322@gmail.com',
            Address: 'III-F, 954, Sector 3, Vaishali ,Ghaziabad,U.P',
            School: 'V.P.S',
          },
        ],
        [
          'RUDY',
          {
            phone: '9868381599',
            Email: 'RUDY007322@gmail.com',
            Address: 'III-F, 954, Sector 3, Vaishali ,Ghaziabad,U.P',
            School: 'V.P.S',
          },
        ],
        [
          'SANSA',
          {
            phone: '9868381599',
            Email: 'SANSA007322@gmail.com',
            Address: 'III-F, 954, Sector 3, Vaishali ,Ghaziabad,U.P',
            School: 'V.P.S',
          },
        ],
        [
          'JACK',
          {
            phone: '9868381599',
            Email: 'JACK007322@gmail.com',
            Address: 'III-F, 954, Sector 3, Vaishali ,Ghaziabad,U.P',
            School: 'V.P.S',
          },
        ],
        [
          'GAURAV',
          {
            phone: '+919066707370',
            Email: 'GAURAV009XSY2@gmail.com',
            Address: '54-Streets, manhaton, Newyork',
            School: 'NYC',
          },
        ],
        [
          'AHMAD',
          {
            phone: '+916388623967',
            Email: 'AHMAD009322@gmail.com',
            Address: '54-Streets, manhaton, Newyork',
            School: 'NYC',
          },
        ],
        [
          'ADNAN',
          {
            phone: '+919711106290',
            Email: 'ADNAN009322@gmail.com',
            Address: '54-Streets, manhaton, Newyork',
            School: 'NYC',
          },
        ],
        [
          'PARLLAV',
          {
            phone: '+919997787803',
            Email: 'PARLLAV009YX2@gmail.com',
            Address: '24-Streets, manhaton, Newyork',
            School: 'NYC',
          },
        ],
        [
          'BHAVYA',
          {
            phone: '+919560321797',
            Email: 'BHAVYA006ABD2@gmail.com',
            Address: '54-Streets, manhaton, Newyork',
            School: 'NYC',
          },
        ],
        [
          'VASU',
          {
            phone: '+919582081194',
            Email: 'VASU0XY5422@gmail.com',
            Address: '54-Streets, manhaton, Newyork',
            School: 'NYC',
          },
        ],
        [
          'AMAN',
          {
            phone: '+916352534221',
            Email: 'AMAN89XY0322@gmail.com',
            Address: '54-Streets, manhaton, Newyork',
            School: 'NYC',
          },
        ],
        [
          'PRIYANSHU',
          {
            phone: '+91 98187 27245',
            Email: 'PRIYANSHU23XBG2@gmail.com',
            Address: '54-Streets, manhaton, Newyork',
            School: 'NYC',
          },
        ],
        [
          'HARSHIT',
          {
            phone: '+919911286679',
            Email: 'HARSHIT09xy@gmail.com',
            Address: '23-12 road, vaishali,delhi,india',
            School: 'D.P.S',
          },
        ],
        [
          'ARSALAN',
          {
            phone: '+919540705298',
            Email: 'arsalan009lkg@gmail.com',
            Address: '23-12 road, vaishali,delhi,india',
            School: 'D.P.S',
          },
        ],
      ]);
      const Details = details.get(name_of);
      const { phone, Email, Address, School } = Details;
      console.log(
        'Email:',
        Email,
        '\n',
        'Address: ',
        Address,
        '\n',
        'School: ',
        School,
        '\n',
        'School: ',
        phone
      );
      //*******************************************8 */
      document.getElementById('demo5').innerHTML = phone;
      document.getElementById('demo2').innerHTML = Email;
      document.getElementById('demo3').innerHTML = Address;
      document.getElementById('demo4').innerHTML = School;
    },
  };
  var x = document.getElementById('myText').value;
  document.getElementById('demo').innerHTML = x;
  const Arr = x;
  const UpperCase = Arr.toUpperCase();
  const Index = Name.name1.indexOf(UpperCase);
  const details = Name.name1[Index];
  Name.Property(details);
  //**************************************************** */
}

/*
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderPizza: function (starterIng, ...restIng) {
    console.log(starterIng);
    console.log(restIng);
  },
  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order recived! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be be deliverd to ${address} at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`You orderd pasta with ${ing1}, ${ing2} and ${ing3},`);
  },
};

const student = {
  name1: ['Jake, Ashu, Aria, Sansa, Theon, Edard, Tryion'],
};
const Student = prompt();
const Name = student.name1.Stundent.indexOf();

console.log(`${Name}`);

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

const events = [...new Set(gameEvents.values())];
console.log(events);

gameEvents.delete(64);
console.log(events);
console.log([...gameEvents.keys()].pop(9));

for (const [min, events] of gameEvents) {
  const half = min <= 45 ? 'first' : 'second';
  console.log(`[${half}half] ${min}: ${events}`);
}


const question = new Map([
  ['question', 'what is best programming language in the world?'],
  [1, 'C'],
  [2, 'java'],
  [3, 'javascript'],
  ['correct values', 3],
  [true, 'correct values'],
  [false, 'try again'],
]);
console.log(question);

for (const [key, values] of question) {
  if (typeof key === 'number') {
    console.log(`Answer ${key}: ${values}`);
  }
}
const answer = Number(prompt('you answer '));
console.log(answer);

console.log(...question);



const rest = new Map();
rest.set('name', 'classical.restiano');
rest.set(1, 'italy');
rest.set(2, 'brazil');
console.log(rest);

for (const item of rest) console.log(item);

//sets

//colllection of unique values.

const orderset = new Set(['pasta', 'pizza', 'pizza', 'pasta', 'food']);
console.log(orderset);

console.log(new Set('ashu'));
console.log(orderset.size);
console.log(orderset.has('pizza'));
console.log(orderset.has('bread'));
orderset.add('Garlic bread');
orderset.delete('pizza');
console.log(orderset);

for (const item of orderset) console.log(item);

//examples
const staff = ['water', 'chef', 'waiter', 'maneger', 'chef'];

const staffunique = [...new Set(staff)];
console.log(staffunique);


const properties = Object.entries(Hours.openingDays);
for (const [key, { open, close }] of properties) {
  console.log(`On ${key}, we open at : ${open} and close at ${close}`);
}


const Menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const [index, element] of Menu.entries()) {
  console.log(`${index}: ${element}`);
}


restaurant.orderDelivery({
  time: '22:33',
  address: 'delhi',
  mainIndex: 0,
  starterIndex: 3,
});
// Destructuring Objects

const { name, openingHour, categories } = restaurant;
console.log(name, 'opening and closing hours:', openingHour);
const {
  name: punjabi_dabha,
  openingHour: hours,
  categories: tags,
} = restaurant;

console.log(punjabi_dabha, hours, tags);

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);
//mutated ojects;

let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 44 };
({ a, b } = obj);
console.log(a, b);

//nested ojects

const {
  mon: { open: o, close: c },
} = openingHour;
console.log(o, c);

let arr = [1, 2, 3];
let newarray = [23, 23, 4, ...arr];
console.log(...newarray);

const ingridents = [
  prompt('pelese enter ing 1'),
  prompt('pelese enter ing 2'),
  prompt('pelese enter ing 3'),
];



console.log(restaurant.orderPasta(...ingridents));

const [Pizza, , Risotto, ...others] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(Pizza, Risotto, others);

const { sat, ...wekdays } = restaurant.openingHour;

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
    console.log(sum);
  }
};

const x = [23, 4, 7];
add(...x);*

restaurant.orderPizza('Mushroom', 'onion', 'Olives', 'spinech');


const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const [player1, player2] = game.players;

console.log(`${player1}, ${player2}`);

const [gk, ...feildPlayers] = player1;
console.log(`GoalKepper: `, gk, `and his team players:`, feildPlayers);

const all_Players = [...player1, ...player2];
console.log(`player list:`, all_Players);
*/
