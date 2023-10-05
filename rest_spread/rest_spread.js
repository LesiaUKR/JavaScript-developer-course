/******  ******/
/*** ***/

// *************************  Операція rest та spread  ********************************\\

// spread - розпилює масив в колекцію масив чисел і т.д.

// const numbers = [1, 2, 3];
// const copy = [...numbers]; //spread відбувається праворуч від оператора дорівнює

// rest - збирає певну кількість аргументів в масив

// const numbers = [1, 2, 3];
// const [first, ...args] = numbers; // rest відбувається ліворуч від оператора дорівнює
// console.log(first);
// console.log(args);

// ************  Операція rest та spread в функціях  ********************************\\

// const numbers = [1, 2, 3];

// // під час параметрів завжди rest
// function foo(...props) {
//   //rest
//   // [1,2,3]
// }

// foo(...numbers); //під час аргументів завжди spread foo(1,2,3)

// ************  ПРАКТИКА rest та spread в функціях  ********************************\\

// const names = ['Alice', 'Kate', 'Emma', 'Olga'];

// function foo(first, second, third) {
//   console.log('first', first);
//   console.log('second', second);
//   console.log('third', third);
// }

// foo(...names); // foo('Alice', 'Kate', 'Emma')// spread

// function foo(first, second, ...args) {
//   //rest
//   console.log(arguments);//це псевдомасив, який поверне список всіх параметрів
//    console.log(first);
//    console.log(second);
//    console.log(args);
// }

// foo('Alice', 'Kate', 'Emma', 'Mia', 'Lily');

// ************  приклад отримання об'єкту при деструктуризації об'єкту і використання rest **************//
// const user = {
//   name: 'Test name',
//   age: 22,
//   city: 'Lviv',
//   skills: {
//     html: true,
//     css: false,
//     js: true,
//   },
// };

// function foo({ name, age, ...props }) {
//   console.log(name);
//   console.log(age);
//   console.log(props);
// }
// foo(user);

// ************  приклад отримання об'єкту при деструктуризації об'єкту і використання rest **************//

// const user = {
//     name: 'Test name',
//     age: 22,
//     city: 'Lviv',
//     skills: {
//         html: true,
//         css: false,
//         js: true
//     }
// }
// function foo({ name, skills: { html, ...props }, ...props2}) {
//     console.log(name);
//     console.log(html);
//     console.log(props);
//     console.log(props2);
// }
// foo(user)

/****** Task - 1 - Деструктуризація  ******/

// Деструктуризуй об'єкт таким чином щоб отримати значення name, surname, username

// const user = {
//   id: 1,
//   username: 'harry_potter',
//   profile: {
//     name: 'Harry',
//     surname: 'Potter',
//     age: 25,
//   },
// };

// // Деструктуризація об'єкта для отримання окремих змінних
// // const ......
// const {username, profile: {name, surname} = {}} =  user;

// // Виведення отриманих значень
// console.log(`Ім'я користувача: ${name}`);
// console.log(`Прізвище користувача: ${surname}`);
// console.log(`Ім'я користувача (за нікнеймом): ${username}`);

/****** Task - 2 Деструктуризація  ******/

// Допиши функцію таким чином щоб кожна властивість об'єкта product була незалежним параметром

// const product = {
//   name: "Smart TV",
//   price: 25000,
//   category: "Electronics",
//   details: {
//     brand: "Samsung",
//     color: "Black",
//     weight: "15.5",
//   },
// };

// function displayProductInfo({
//   name,
//   price,
//   category,
//   details: { brand, color, weight } = {},
// } = {}) {
//   console.log(`Назва товару: ${name}`);
//   console.log(`Ціна: ${price} грн`);
//   console.log(`Категорія: ${category}`);
//   console.log("Деталі:");
//   console.log(`- Бренд: ${brand}`);
//   console.log(`- Колір: ${color}`);
//   console.log(`- Вага: ${weight} кг`);
// }

// displayProductInfo(product);

/****** Task - 3 - Операція spread  ******/

// Напиши функцію createContact(partialContact) так, щоб вона повертала новий об'єкт контакту з доданими властивостями id та createdAt, а також list зі значенням "default" якщо в partialContact немає такої властивості.

// function createContact(partialContact) {
//   return {
//     id: Date.now(),
//     createdAt: new Date(),
//     list: 'default',
//     ...partialContact,
//   };
// }

// console.log(
//   createContact({
//     name: 'Mango',
//     email: 'mango@mail.com',
//     list: 'friends',
//   })
// );
// console.log(
//   createContact({
//     name: "Poly",
//     email: "poly@hotmail.com",
//   })
// );

/****** Task - 4 - Операція rest  ******/

// Напиши функцію transformUsername(user) так, щоб вона повертала новий об'єкт із властивістю fullName, замість firstName та lastName.

// function transformUsername({ firstName, lastName, ...props } = {}) {
//     return {
//         fullName: `${firstName} ${lastName}`,
//         ...props
//     }
// }

// console.log(
//   transformUsername({
//     id: 1,
//     firstName: "Jacob",
//     lastName: "Mercer",
//     email: "j.mercer@mail.com",
//     friendCount: 40,
//   })
// );

// console.log(
//   transformUsername({
//     id: 2,
//     firstName: "Adrian",
//     lastName: "Cross",
//     email: "a.cross@hotmail.com",
//     friendCount: 20,
//   })
// );

/****** Task - 5 Об'єкт параметрів  ******/

// Необхідно зрoбити рефакторинг функції calculateHousePerimeter, так щоб вона приймала об'єкт з параметрами будинку,
//  включаючи довжини сторін будинку.Функція повинна розрахувати та повернути периметр будинку.

function calculateHousePerimeter({ sideA: a, sideB: b, sideC: c, sideD: d }) {
  const perimeter = a + b + c + d;
  return perimeter;
}

const perimeter = calculateHousePerimeter({
  sideA: 10,
  sideB: 15,
  sideC: 10,
  sideD: 15,
});
console.log(`Периметр будинку: ${perimeter}`);

function foo(...args) {
  console.log(args);
  console.log(arguments);
  const arr = [...arguments];
  const arr2 = Array.from(arguments);
}
foo('a', 'b', 'c', 'd');
console.log('-----------');
foo('a', 'b', 'c', 'd', 'e');
console.log('-----------');
foo('a', 'b', 'c');
const boo = function () {
  console.log(arguments);
};

boo(1, 2, 3, 4, 5);

const foo = (...args) => {
  console.log(args);
  // console.log(arguments);//Error
};

foo(1, 2, 3, 4, 5);
