// const value = 10;

// if (value === 10) {
//    console.log('condition is true');
// }

// const str = 'Hello world';

// if (str.includes('world')) {
//      console.log('condition is true');
// }

// 6 falsy:
// 0
// ''
// NaN
// null
// undefined
// false

// const value = 0;

// if (value) {
//    console.log('condition is true');
// }

// const value = 10;

// if (value === 10) {
//    console.log('condition is true');
// } else {
//    console.log('condition is false');
// }

// console.log('after');

// const value = 11;
// if (value === 9) {
//     console.log('condition is true 😊 VALUE 9');
// } else if(value === 10){
//     console.log('condition is true 😊 VALUE 10');
// }else if(value === 11){
//  console.log('condition is true 😊 VALUE 11');
// } else {
//     console.log('condition is FALSE 😒😒😒');
// }

// Instruction switch - тільки строге порівняння === і в умову можна вставити або строки або числа
// windows + V - відкрити буфер і смайли

// const str = 'hello';

// switch (str) {
//    case "world":
//       console.log("case 1");
//       break;
//    case "hello world":
//       console.log("case 2");
//       break;
//    case "hello":
//       console.log("case 3");
//       break;
//    default:
//       console.log('default');
// }

/****** Тернарний оператор *****/

// condition ? true : false

const value = 21;
const message = value > 10 && value < 20 ? "CONDITION TRUE" : "CONDITION FALSE";
console.log(message);


/****** Область видимості *****/

// Глобальна та локальна

// будь-які фігурні дужки створюють додаткову область видимості
