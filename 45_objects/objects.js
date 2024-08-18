// не зручно використовувати індексацію, коли потрібно отримати значення
// потрібно знати індекс, але коли ми використовуємо об'єкт, ми можемо
// використовувати ключі, які ми знаємо, що вони є унікальними
myData = [
  'YouRa',
  'Allakhverdov',
  1974,
  'programming instructor',
  ['Irina', 'Michael']
];
console.log(myData[4]); 

youraObject = {
  name: 'YouRa',
  lastname: 'Allakhverdov',
  birthYear: 1975,
  job: 'programming instructor',
  familyMembers: ['Irina', 'Michael']
};
console.log(youraObject); 

// ****************Об'єкт**************** \\
// const user = {
//   name: 'Alice',
//   skills: {
//     html: true,
//     css: true,
//     react: false,
//   },
//   city: 'Lviv',
// };
// console.log(user);

// ****** Звернення до властивостей об'єкта ****** //

// console.log(user.name);
// console.log('css', user.skills.css);

// const objectKey = 'name';

// console.log(user[objectKey]);
// console.log(user['name']);
// console.log(user['skills']['react']); //аналогічно user.skills.css
// console.log(user.skills['react']);
// console.log(user['skills'].react);

/*** Зміна значення властивості об'єкта ***/

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   owner: {
//     name: 'Henry',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };

// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = 'Henry Sibola';
// apartment.tags.push('trusted');

// const user = {
//   name: 'Alice',
//   skills: {
//     html: false,
//     css: true,
//     react: false,
//   },
// };

// user.city = 'Lviv';
// user['age'] = 28;
// console.log(user);
// // console.log(user.city);

// user.city = 'Odessa';
// user['age'] = 38;
// console.log(user);

// ****************Object.freeze**************** \\

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze
// const user = {
//   name: 'Alice',
//   skills: {
//     html: false,
//     css: true,
//     react: false,
//   },
// };

// const key = prompt('key');
// const value = prompt('value');
// user[key] = value;
// // user.key = value
// // user.name = 'Kate'
// // user['name'] = 'Den'
// console.log(user);
// Object.freeze(user.skills); //не можемо заморозити окремі ключі, тільки повний об'єкт, або ключ, який являється об'єктом - в прикладі skills
// user.name = 'Kate';
// user.city = 'Lviv';
// user.skills.html = true;
// console.log(user);

/*** Додавання нової властивості об'єкта ***/

// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   genres: ['historical prose', 'adventure'],
//   public: true,
//   rating: 8.38,
// };

// book.pageCount = 836;
// book.originalLanguage = 'en';
// book.translations = ['ua', 'ru'];

// console.log(book.pageCount); // 836
// console.log(book.originalLanguage); // "en"
// console.log(book.translations); // ["ua", "ru"]

/*** Синтаксис коротких властивостей (shorthand properties) ***/

// const name = 'Repair Droid';
// const price = 2500;
// const image = 'https://via.placeholder.com/640x480';
// const tags = ['on sale', 'trending', 'best buy'];

// const product = {
//   name,
//   price,
//   image,
//   tags,
// };

/*** Синтаксис обчислюваних властивостей (computed properties)  ***/

// const emailInputName = 'email';
// const passwordInputName = 'password';

// const credentials = {

//   [emailInputName]: 'henry.carter@aptmail.com',
//   [passwordInputName]: 'jqueryismyjam',

//
// };

// const propName = 'name';
// const user = {
//   age: 25,
//   // Ім'я цієї властивості буде взято зі значення змінної propName
//   [propName]: 'Генрі Сибола',
// };

// console.log(user.name); // "Генрі Сибола"

// ****** Методи об'єкта ****** //

// const user = {
//   name: 'Alice',
//   skills: {
//     html: false,
//     css: true,
//     react: false,
//   },
//   sayHello(city) {
//     //   console.log(city);
//     console.log(this);
//     console.log(`Hello my name ${this.name}`);
//     // console.log(user.name);
//     console.log(this);
//     // console.log(this);
//   },
//   // getAge() {
//   //   console.log(this);
//   // },
// };
// user.sayHello('Alisa');

// console.log('-----');
// user.getAge()
// // console.log(user.sayHello);
// const user2 = {
//   name: 'Kate',
//   skills: {
//     html: false,
//     css: true,
//     react: false,
//   },
//   sayHello: user.sayHello,
// };

// user.sayHello();
// user2.sayHello();

/*** На відміну від масиву або рядка, об'єкт - це не ітерабельна сутність,
 * тобто його не можна перебрати циклами for або for...of. Для перебирання
 * об'єктів використовується спеціальний цикл for...in, який перебирає ключі
 * об'єкта object. For in не часто використовується, бо він перебирає як власні властивості так і успадковані ***/

// **************** Цикл for...in  **************** \\

// const userA = {
//   name: 'Alice',
//   skills: {
//     html: false,
//     css: true,
//     react: false,
//   },
//   age: 30,
// };

// const userB = Object.create(userA);
// userB.city = 'Lviv';
// console.log(userB); //пустий об'єкт

// // for (const key in userA) {
// //   // console.log(key);
// //   console.log(userA[key]);
// // }

// for (const key in userB) {
//   // перевіряємо чи власна властивість і чи є вона в об'єкті
//   if (userB.hasOwnProperty(key)) {
//     console.log(key);
//   }
// }

// for(const key in userA){
//     console.log(key);
//     console.log(user[key]);
// }

// *******  Метод Object.keys()  ******* \\

// const user = {
//   name: 'Alice',
//   skills: {
//     html: false,
//     css: true,
//     react: false,
//   },
// };

// // const userB = Object.create(user);
// // userB.city = 'Lviv';
// // const keys = Object.keys(userB);
// // console.log(keys);

// const keys = Object.keys(user);
// console.log(keys);

// for (const key of keys) {
//   console.log(key, user[key]); //отримаємо name Alice та skills { html: false, css: true, react: false }
// }
// console.log(keys);

// ******* Метод Object.values() ****** //

// коли цікавлять значення, а не ключі. Переважно для одного і того самого типу данних в ключах

// const user = {
//   name: 'Alice',
//   skills: {
//     html: false,
//     css: true,
//     react: false,
//   },
// };
// // const values = Object.values(user);
// const values = Object.values(user.skills);
// console.log(values);

// *******  Метод Object.entries() ****** //

//
// const user = {
//   name: 'Alice',
//   skills: {
//     html: false,
//     css: true,
//     react: false,
//   },
// };

// // const entries = Object.entries(user);
// const entries = Object.entries(user.skills);
// console.log(entries);

// *******  ПРАКТИКА ****** //

/*** Task - 1 ***/

// Створи функцію яка буде приймати 3 параметри та формувати об'єкт покупки
// 1 Назва продукту
// 2 Кількість одиниць
// 3 Ціна за 1 одиницю товару
// Функція має повертати сформований об'єкт з ключами name, price, quantity, totalPrice.

// function createBasket(product, quantity, price) {
//   const totalPrice = quantity * price;
//   const productObj = {
//     name: product,
//     quantity: quantity,
//     price: price,
//     totalPrice: totalPrice,
//   };

//   // return productObj

//   return {
//     name: product,
//     quantity, // quantity : 3
//     price,
//     totalPrice: quantity * price,
//   };
// }

// console.log(createBasket('pizza', 3, 120));
// console.log(createBasket('apple', 13, 1200));

/*** Task - 2 ***/

// Створи функцію для ведення статистики комп'ютерного клубу. Функція приймає 1 параметр це об'єкт користувачів де ключ це ім'я користувача, а значення це час оренди у хвилинах.
// Функція повертає рядок з інформацією про те скільки було користувачів та який середній час оренди комп'ютер.

// const players = {
//   Den: 60,
//   Kate: 130,
//   William: 45,
//   Matthew: 120,
//   Ethan: 40,
//   David: 55,
// };

// function getTime(obj) {
//   // перший варіант вирішення
//   // let totalPlayers = 0;
//   // let totalTime = 0;

//   // for (const key in obj) {
//   //   totalPlayers += 1;
//   //   totalTime += obj[key];
//   // }

//   // const average = totalTime / totalPlayers;

//   // другий варіант вирішення
//   const keys = Object.keys(obj);
//   let totalTime = 0;

//   for (const key of keys) {
//     totalTime += obj[key];
//   }

//   const average = totalTime / keys.length;
//   return `Count of players ${keys.length}, average time ${average}`;

//   // третій варіант вирішення
//   // const values = Object.values(obj);
//   // console.log(values);
//   // let totalTime = 0;

//   // for (const value of values) {
//   //   totalTime += value;
//   // }

//   // return `Count of players ${values.length}, average time ${
//   //   totalTime / values.length
//   // }`;
// }

// console.log(getTime(players));

/*** Task - 3 ***/

// 1 Створити функцію яка буде приймати 2 параметри
//    1 параметр масив
//    2 параметр назва книги
// Функція повертає Імена юзерів (формат стрінги) в яких є дана книга ("Harry Potter") \\\ "Anna, Oleksii"

// 2 Порахувати вік всіх юзерів у яких є ключ age.

// const friends = [
//   { name: 'Anna', books: ['Bible', 'Harry Potter'], age: 21 },
//   { name: 'Bob', books: ['War and peace', 'Romeo and Juliet'], age: 26 },
//   { name: 'Alice', books: ['War and peace', 'Romeo and Juliet'] },
//   {
//     name: 'Oleksii',
//     books: ['Bible', 'War and peace', 'Harry Potter', 'Romeo and Juliet'],
//     age: 26,
//   },
// ];

// function getTotalAge(arr) {
//   let totalAge = 0;
//   for (const reader of arr) {
//     // console.log(reader);
//     // if (reader.age) {
//     //   totalAge += reader.age;
//     // }
//     // console.log(reader.name, 'age' in reader);
//     // if('age' in reader){
//     //     totalAge += reader.age;
//     // }

//     console.log(reader.name, reader.hasOwnProperty('age'));
//     if (reader.hasOwnProperty('age')) {
//       totalAge += reader.age;
//     }
//   }
//   return totalAge;
// }
// console.log(getTotalAge(friends));

// function getUsers(arr, bookName) {
//   let readers = [];
//   for (const user of arr) {
//     if (user.books.includes(bookName)) {
//       readers.push(user.name);
//     }
//   }
//   console.log(readers);
//   return readers.join(', ');
// }
// console.log(getUsers(friends, 'Harry Potter'));

/*** Task - 4 ***/

//  1 Створити метод об'єкту який буде приймати 1 параметр назву факультету та повертати списoк імен учнів факультету
// 2 Створити метод об'єкту який буде приймати 1 параметр назву факультету та повертати кількість очків факультету

// const hogvarts = {
//   griffindor: [
//     {
//       name: "Harry",
//       points: 17,
//     },
//     {
//       name: "Hermiona",
//       points: 19,
//     },
//     {
//       name: "Ron",
//       points: 14,
//     },
//   ],
//   slizerin: [
//     {
//       name: "Draco",
//       points: 17,
//     },
//     {
//       name: "Goyl",
//       points: 14,
//     },
//     {
//       name: "Crabbe",
//       points: 5,
//     },
//   ],
//   hasFaculty(faculty) {
//     return this.hasOwnProperty(faculty);
//   },
//   getUserList(faculty) {
//     // if (!(faculty in this)) {
//     //   return "Faculty not found 😰";
//     // }
//     if (!this.hasFaculty(faculty)) {
//       return "Faculty not found 😰";
//     }
//     const students = [];

//     for (const student of this[faculty]) {
//       students.push(student.name);
//     }

//     return students.join(", ");
//   },
//   getTotalPoints(faculty) {
//     // if (!this.hasOwnProperty(faculty)) {
//     //   return "Faculty not found 😰";
//     // }

//     if (!this.hasFaculty(faculty)) {
//       return "Faculty not found 😰";
//     }

//     let totalPoints = 0;

//     for (let i = 0; i < this[faculty].length; i += 1) {
//       totalPoints += this[faculty][i].points;
//     }

//     return totalPoints;
//   },
// };

// console.log(hogvarts.getUserList("griffindor"));
// console.log(hogvarts.getUserList("slizerin"));
// console.log(hogvarts.getUserList("slitherin"));

// console.log(hogvarts.getTotalPoints("griffindor"));
// console.log(hogvarts.getTotalPoints("slizerin"));
// console.log(hogvarts.getTotalPoints("slitherin"));

/*** Task - 5 ***/

// Перебери об'єкт apartment, використовуючи цикл for...in, і запиши в масив keys всі його ключі,
// а в масив values всі значення його властивостей.

// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];

// for (const key in apartment) {
//   keys.push(key);
//   console.log(keys);
// }

// for (const value in apartment) {
//   values.push(apartment[value]);
//   console.log(values);
// }

/*** Task - 6 ***/

// Виконай рефакторинг рішення попереднього завдання, додавши в цикл for...in
// перевірку на власну властивість.

// const keys = [];
// const values = [];
// const advert = {
//   service: 'apt',
// };
// const apartment = Object.create(advert);
// apartment.descr = 'Spacious apartment in the city center';
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Change code below this line
//   if (apartment.hasOwnProperty(key)) {
//     console.log(key);
//     console.log(apartment[key]);
//     keys.push(key);
//     values.push(apartment[key]);
//   }
//   // Change code above this line
// }

/*** Task - 7 ***/

// Напиши функцію countProps(object), яка рахує і повертає кількість власних властивостей
// об'єкта в параметрі object.
// Використовуй змінну propCount для зберігання кількості властивостей об'єкта.

// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
//   for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//       propCount += 1;
//       // Change code above this line
//     }
//     console.log(propCount);
//   }
//   return propCount;
// }

// countProps({});
// countProps({ name: 'Mango', age: 2 });
// countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 });

/*** Task - 8 ***/

// Перебери об'єкт apartment, використовуючи метод Object.keys() і цикл for...of.
// Запиши у змінну keys масив ключів власних властивостей об'єкта apartment,
// і додай в масив values всі значення його властивостей.

// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// const keys = Object.keys(apartment);
// console.log(keys);

// for (const key of keys) {
//   // Ключ

//   // console.log(key);
//   // Значення властивості
//   // console.log(apartment[key]);
//   values.push(apartment[key]);
//   console.log(values);
// }

/*** Task - 9 ***/

// Виконай рефакторинг функції countProps(object), використовуючи метод Object.keys() і,
// можливо, але не обов'язково, цикл for...of.

// function countProps(object) {
//   // Change code below this line
//   let propCount = 0;
//   const keys = Object.keys(object);
//   for (const key of keys) {
//     propCount += 1;
//   }

//   return propCount;
//   // Change code above this line
// }

/*** Task - 10 ***/

// Напиши функцію countTotalSalary(salaries), яка приймає об'єкт зарплат,
// де ім'я властивості - це ім'я співробітника, а значення властивості -
//    це зарплата.Функція повинна розрахувати загальну суму зарплат співробітників
// і повернути її. Використовуй змінну totalSalary для зберігання загальної суми зарплати.

// Перший варіант

function countTotalSalary(salaries) {
  let totalSalary = 0;
  // Change code below this line
  const values = Object.values(salaries);
  for (const value of values) {
    totalSalary += value;
    console.log(totalSalary);
  }
  // Change code above this line
  return totalSalary;
}

countTotalSalary({});
countTotalSalary({ mango: 100, poly: 150, alfred: 80 });
countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 });

// Другий варіант

function countTotalSalary(salaries) {
  let totalSalary = 0;
  // Change code below this line
  let keys = Object.keys(salaries);
  for (key of keys) {
    totalSalary += salaries[key];
  }
  // Change code above this line
  return totalSalary;
}

/*** Task - 11 ***/

// Перебери масив об'єктів colors, використовуючи цикл for...of.
// Додай у масив hexColors значення властивостей hex,
// а в масив rgbColors - значення властивостей rgb з усіх об'єктів масиву colors.

// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];

// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }
// console.log(hexColors);
// console.log(rgbColors);

/*** Task - 12 ***/

// Напиши функцію getProductPrice(productName), яка приймає один параметр
// productName - назва продукту.Функція шукає об'єкт продукту з таким
// ім'ям(властивість name) в масиві products і повертає його ціну(властивість price).
// Якщо продукт з такою назвою не знайдений, функція повинна повертати null.

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line

//   for (product of products) {
//     if (product['name'] === productName) {
//       return product['price'];
//     }
//   }
//   return null;
//   // Change code above this line
// }
// console.log(getProductPrice('Radar'));

/*** Task - 13 ***/

// Напиши функцію getAllPropValues(propName), яка приймає один параметр
// propName - ім'я (ключ) властивості. Функція повинна повернути масив
// всіх значень властивості з таким ім'ям з кожного об'єкта в масиві products.
// Якщо в об'єктах відсутні властивості з таким ім'ям, функція повинна повернути порожній масив.

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
//   let propNameValues = [];
//   for (product of products) {
//     let productKeys = Object.keys(product);
//     console.log(productKeys);
//     if (productKeys.includes(propName)) {
//       propNameValues.push(product[propName]);
//     }
//   }
//   return propNameValues;
//   // Change code above this line
// }

// console.log(getAllPropValues('name'));

// getAllPropValues('name');
// getAllPropValues('quantity');
// getAllPropValues('price');
// getAllPropValues('category');

// getAllPropValues('name');
// getAllPropValues('quantity');
// getAllPropValues('price');
// getAllPropValues('category');

/*** Task - 14 ***/

// Напиши функцію calculateTotalPrice(productName), яка приймає один параметр
// productName - назва товару.Функція повинна повернути загальну
// вартість(ціна * кількість) товару з таким ім'ям з масиву products.

const products = [
  { name: 'Radar', price: 1300, quantity: 4 },
  { name: 'Scanner', price: 2700, quantity: 3 },
  { name: 'Droid', price: 400, quantity: 7 },
  { name: 'Grip', price: 1200, quantity: 9 },
];

function calculateTotalPrice(productName) {
  // Change code below this line
  let totalPrice = 0;
  for (product of products) {
    if (product.name === productName) {
      totalPrice = product.price * product.quantity;
    }
  }
  return totalPrice;
  //   Change code above this line
}

console.log(calculateTotalPrice('Radar'));

function calculateTotalPrice(productName) {
  // Change code below this line

  for (const product of products) {
    if (productName === product.name) {
      return product.price * product.quantity;
    }
  }
  return 0;
  // Change code above this line
}

calculateTotalPrice('Blaster');
calculateTotalPrice('Radar');
calculateTotalPrice('Droid');
calculateTotalPrice('Grip');
calculateTotalPrice('Scanner');
