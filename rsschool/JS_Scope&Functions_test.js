// function sayWord(word) {
//   return () => console.log(word);
// }

// const sayHello = sayWord('hello');

// sayHello(); // "hello"

/*** task 1 ***/
//  What will the code below output to the console?

// var name = 'John';

// var user = {
//   name: 'Peter',
//   printMessage() {
//     console.log(`Hello, ${this.name}!`);
//   },
// };

// var printMessage = user.printMessage;
// // console.log(printMessage);
// printMessage();

/*** task 2 ***/

// let name = 'John';

// function printName() {
//   let name = 'Peter';
//   console.log(name);
// }
// printName();

/*** task 3 ***/

// function foo(a, b) {
//   return a * b;
// }

// const bar = foo.bind(null, 2);
// bar(2);
// console.log(bar(2));

/*** task 4 ***/

// What will be the result of the code execution?

// const foo = bar();
// const number = 2;

// function bar() {
//   return number;
// }

/*** task 5 ***/

// printMessage();

// function printMessage() {
//   console.log('Hello');
// }

/*** task 6 ***/

// const details = {
//   name: 'John',
// };

// function getMessage(message) {
//   return `${message} ${this.name}`;
// }

// console.log(getMessage.apply(details, ['Hello']));

/*** task 7 ***/

// What will the code below output to the console?

// function foo() {
//   console.log(this);
// }
// foo.call(null);

/*** task 8 ***/
// What will the code below output to the console?

// for (let i = 0; i < 3; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, 1000);
// }

/*** task 9 ***/

// 'use strict';

// function getThis() {
//   return this;
// }

// console.log(getThis());

/*** task 10 ***/

// console.log(message);
// var message = 'Hello';

/*** task 11 ***/

// function foo() {
//   return { bar: 1 };
// }
// console.log(typeof foo().bar);

/*** task 14 ***/
// 'use strict';

// const details = { message: 'Hello!' };
// function getMessage() {
//   return this.message;
// }

// console.log(getMessage.call(details));

/*** task 15 ***/

// let f = function g() {
//   return 23;
// };

// console.log(typeof g());

/*** task 16 ***/

// for (var i = 0; i < 10; i++) {}
// console.log(i);

/*** task 18 ***/

// for (var i = 0; i < 3; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, 1000);
// }

/*** task 19 ***/

// Which options correctly declare a function f that returns the sum of two arguments?

// let f = function (a, b) {
//   return a + b;
// };

// let f = (a, b) => a + b;

/*** task 20 ***/

// Specify the correct way to access all function arguments:

// function foo() {
//   console.log(Function.getArguments(this));
// }

// function foo() {
//   console.log(arguments);
// }

// function foo() {
//   console.log(foo.getArguments());
// }

// function foo() {
//   console.log(this.arguments());
// }

/*** task 21 ***/

// function getThis() {
//   return this;
// }

// console.log(getThis());

/*** task 21 ***/

// let name = 'John';

// function printName() {
//   console.log(name);
// }

// setTimeout(() => {
//   let name = 'Peter';
//   printName();
// }, 1000);

/*** task 22 ***/

// let name = 'John';

// function printName() {
//   console.log(name);
// }

// setTimeout(() => {
//   let name = 'Peter';
//   printName();
// }, 1000);

/*** task 23 ***/

// var name = 'John';

// function printName() {
//   console.log(name);
//   var name = 'Peter';
//   console.log(name);
// }

// setTimeout(() => {
//   let name = 'Peter';
//   printName();
// }, 1000);

/*** task 24 ***/

// var a = 1,
//   b = function a(x) {
//     x && a(--x);
//   };
// console.log(a);

/*** task 25 ***/

// (function (a) {
//   arguments[0] = 10;
//   return a;
// })(5);

/*** task 26 ***/

console.log(message);

let message = 'Hello';
