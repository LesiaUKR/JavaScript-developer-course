// JSDoc - comment коротка відомість про функцію яка допомагає іншому розробнику швидше зрозуміти що робить, приймає та повертає функція.
// Для створення JSDoc - comment на рядку перед створеною функціює натискаємо /**
// Далі описуємо нашу функцію.

/*** FUNCTION expression ***/
// не можемо звертатись до FUNCTION expression до місця її оголошення

// const valC = 15;
// const add = function (valA, valB) {
//    // const valA = 19; //параметри не можна перевизначати з const, тільки через let
//    co5nsole.log("valC", valC);
//    co5nsole.log("valA", valA);
//    const sum = valA + valB;
//    return sum;
// }

/****** FUNCTION declaration ******/

// іменоване оголошення функції
// можемо викликати як до так і після місця оголошення
// повертає результат виклику в місце виклику
// не може  бути стрілки =>

/*** Task 1 ***/
/**
 * Підраховує суму двох параметрів valA і valB
 * @param {Number} valA
 * @param {Number} valB
 * @returns {sum}
 */
// function add(valA, valB) {
//   const sum = valA + valB;
//   return sum;
// }

/*** Task 2 ***/
/**
 * Buy product, log message with purchase info
 * @param {string} productName
 * @param {number} productQty
 * @param {number} price
 */
// function buyProduct(productName, productQty, price) {
//   console.log(
//     `You buy ${productQty} ${productName}'s, cost per item ${price}, total cost ${
//       productQty * price
//     }`
//   );
// }
// buyProduct('apple', 10, 35)

/****** ARROW FUNCTION ******/

// не можна викликати раніше місця оголошення функції
// обов'язково повинна бути стрілка =>

// const buyProduct = (productName, productQty, price) => {
//   console.log(
//     `You buy ${productQty} ${productName}'s, cost per item ${price}, total cost ${
//       productQty * price
//     }`
//   );
// };

// *** НЕЯВНЕ повернення ARROW FUNCTION *** \\

/**
 * Get product total price
 * @param {number} qty - quantity items
 * @param {number} price - price per item
 * @returns {number|string} - total price/error message
 */
// const getTotalPrice = (qty, price) => qty * price;

// console.log(getTotalPrice(3, 150));

// *** ЯВНЕ повернення ARROW FUNCTION *** \\

/**
 * Get product total price
 * @param {Number} qty - quantity items
 * @param {Number} price - price per item
 * @returns {Number} - total price
 */
// const getTotalPrice = (qty, price) => {
//     return qty * price
// }
// getTotalPrice(3, 150)

// ****** Можливість не огортати параметри в круглі дужки якщо параметр один ******\\

/* Один параметр з дужками */

/**
 * Check user strong password 😂
 * @param {String} password
 * @returns {Boolean}
 */
// const checkPassword = (password) => password === 'qwerty111';

/*  Один параметр без дужок  */

// const checkPassword = password => {
//     return password === 'qwerty111';
// };
// console.log(checkPassword('qwerty111'));

// ******  Відсутність псевдомасиву arguments  ARROW FUNCTION ****** \\

/*** function declaration ***/

/**
 * Log items
 */
// function getProductList(a, b) {
//   console.log(arguments);

//   const copy = Array.from(arguments);
//   const copy1 = [...arguments];
//   console.log(copy1);
//   for (const product of arguments) {
//     console.log(product);
//   }
// }

// getProductList('Apple', 'Banana', 'Orange', 'Mango', 'Watermelon')

/***  arrow function  ***/

// на відміну від FUNCTION declaration в arrow function в args в прикладі нижче будуть тільки "Orange", "Mango"
// const getProductList = (a, b, ...args) => {
//   console.log(args);
// };

// getProductList("Apple", "Banana", "Orange", "Mango");

// **************************************  CALLBACK FUNCTION  *********************************************\\

// ******* Callback функція у вигляді посилання на функції *****\\

// function logResult(a, b, callback) {
//   console.log(callback);
//   const result = callback(a, b);
//   console.log(`Result is ${result}`);
// }

// logResult(4, 5, add);
// logResult(4, 5, sum);

// function add(a, b) {
//   return a + b;
// }

// function sum(a, b) {
//   return a * b;
// }

// ****************** Інлайнова Callback функція ******************\\

// в перебираючих методах масиву завжди використовується інлайнова callback function

// function logResult(a, b, callback) {
//   console.log(callback);
//   const result = callback(a, b);
//   console.log(`Result is ${result}`);
// }

// передаємо в аргумент  function declaration function (a, b) { return a + b;}
// logResult(4, 5, function (a, b) {
//   return a + b;
// });

// передаємо тіло Callback функції як аргумент
// дану інлайн функцію вже ніколи не перевикористаєм
// logResult(4, 5, (a, b) => a + b);
// logResult(4, 5, (a, b) => a * b);

// ************************************** forEach + Callback *********************************************\\

// callback завжди використовуються з перебираючими методами масиву і рідше як посилання чи як Інлайнова Callback функція
// перебираючі методи масиву завжди викликаються на масиві

/*** Цикл for: ****/

// for (let i = 0; i < products.length; i += 1) {
//     const product = products[i];

//     console.log(`${i + 1} - ${product}`);
// }

/*** forEach: ****/

// перебирає масив від початку до кінця
// немає можливості перервати його
// нічого не повертає - щоб не вказали в return - завжди буде undefined
// не присвоюють в змінну, бо нічого не повертає
// не мутує масив
// слугує більше для того, щоб змінити окремо кожен елемент

// const products = ['Apple', 'Banana', 'Orange', 'Mango', 'Watermelon'];
// // products.forEach(console.log);

// //forEach приймає один аргумент - callback функцію
// //callback функція для forEach приймає три параметри:
// // item - єдиний обов'язковий параметр - назва ітеруємого елементу
// // idx - індекс ітеруємого елементу
// //arr - сам масив, який перебираємо. Використовується тоді, коли хочемо отримати доступ до проміжкового параметру під час чейнінгу
// products.forEach((item, idx, arr) => {
//   //   console.log(item);
//   //   console.log(idx);
//   //   console.log(arr);
//   console.log(`${idx + 1} - ${item}`);
//   return `${idx + 1} - ${item}`; //поверне undefined
// });

//якщо треба пропустити якийсь параметр в callback для forEach, то замість параметру ставимо нижнє підкреслення - underscore (item, _, arr)
// одне підкреслення для першого параметру, для наступного два нижніх підкреслення, тобто  (_, __, arr)

// forEach під капотом - всередині будь якого перебираючого масиву лежить callback функція і цикл for
//функція нижче дуже схоже на те, що під капотом у forEach

// function customForEach(arr, callback) {
//   for (let i = 0; i < arr.length; i += 1) {
//     callback(arr[i], i, arr);
//   }
// }

// customForEach(products, (product, idx, arr) => {
//   console.log('product', product);
//   console.log('idx', idx);
//   console.log('arr', arr);
//   if (idx === 3) {
//     arr.splice(idx, 1);
//   }

//   console.log(`${idx + 1} - ${product}`);
// });
// console.log(products);

// ******************************************* ПРАКТИКА **************************************************\\

/***  Task - 1 ****/

// Напишіть наступні функції:
// createProduct(obj, callback) - приймає об'єкт товару без id, а також коллбек. Функція створює об'єкт товару, додаючи йому унікальний ідентифікатор у властивість id та викликає коллбек передаючи йому створений об'єкт.
// logProduct(product) - колббек що приймає об'єкт продукту і логуючий його в консоль
// logTotalPrice(product) - колббек, що приймає об'єкт продукту і логіює загальну вартість товару в консоль

// function createProduct(obj, callback) {
//   const product = {
//     id: Date.now(),
//     ...obj,
//   };
//   callback(product);
// }

// function logProduct(product) {
//   console.log(`Product`, product);
// }

// function logTotalPrice({ price, quantity }) {
//   console.log(`Product total price ${price * quantity}`);
// }

// createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct);
// createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice);

/***  Task - 2 ****/

// Напишіть функцію яка буде отримувати 2 параметри.
// 1 - масив чисел.
// 2 - функцію яка має опрацювати кожен елемент масиву.
//
// Функція повертає новий масив кожен елемент якого є результатом виконання колбек функції

// function each(arr, action) {
//   const items = [];

//   arr.forEach(elem => {
//     const result = action(elem);
//     items.push(result);
//   });
//   //другий більш коротший варіант
//   //   arr.forEach((elem) => items.push(action(elem)));

//   return items;
// }

// console.log(each([64, 49, 36, 25, 16], value => value * 2));
// console.log(each([64, 49, 36, 25, 16], value => value - 10));
// console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], value => Math.ceil(value)));
// console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], value => Math.floor(value)));

/***  Task - 3 ****/

// Напишіть функцію getProductDetails, яка приймає ідентифікатор товару productId та дві колбек-функції successCallback та errorCallback.
// Функція getProductDetails повинна отримати деталі про вказаний товар та передати їх у successCallback.
// У випадку якщо товар не знайдено, викликається errorCallback і передається повідомлення про помилку.

// const products = [
//   {
//     id: 1,
//     name: 'Телефон',
//     price: 10000,
//     description: 'Смартфон з високоякісним дисплеєм та потужним процесором.',
//   },
//   {
//     id: 2,
//     name: 'Ноутбук',
//     price: 25000,
//     description: 'Легкий та потужний ноутбук для роботи та розваг.',
//   },
//   {
//     id: 3,
//     name: 'Планшет',
//     price: 8000,
//     description: 'Компактний планшет для перегляду контенту.',
//   },
// ];

// function getProductDetails(id, success, error) {
//   // forEach недоречний, бо він не переривається поки не дійде до кінця масиву навіть якщо елемент, який шукали буде першим
//   //   products.forEach(product => {
//   //     console.log(product.id);
//   //     if (product.id === id) {
//   //       success(product);
//   //     }
//   //   });
//   // краще використовувати for

//   for (const product of products) {
//     if (product.id === id) {
//       return success(product);
//     }
//   }
//   error(id);
// }

// getProductDetails(3, handleSuccess, handleError);
// getProductDetails(44, handleSuccess, handleError);

// function handleSuccess(message) {
//   console.log(`✅ Success!`, message);
// }

// function handleError(productId) {
//   console.log(`❌ Error! Product with ${productId} id not found`);
// }

/***  Task - 4 ****/

// Напишіть функцію calculateAveragePrice, яка приймає на вхід масив об'єктів, що представляють товари, та колбеки onSuccess та onError.
// Функція повинна обчислювати середню ціну товарів у масиві та викликати колбек onSuccess, передаючи йому отриману середню ціну як аргумент.
// Якщо масив товарів порожній, функція повинна викликати колбек onError, передаючи йому рядок "No products found".
// Для форматування середньої ціни використовується метод toFixed(2), щоб обмежити число до двох десяткових знаків.

// const products = [
//   { name: 'Apple', price: 0.99 },
//   { name: 'Banana', price: 0.49 },
//   { name: 'Orange', price: 0.79 },
//   { name: 'Mango', price: 1.99 },
// ];

// function calculateAveragePrice(products, onSuccess, onError) {
//   if (!products.length) {
//     // products.length === 0
//     onError('No products found');
//     return;
//   }

//   let total = 0;

//   // products.forEach((product) => total += product.price);
//   products.forEach(({ price }) => (total += price));

//   const averagePrice = total / products.length;
//   onSuccess(averagePrice);
// }

// const onSuccess = averagePrice => {
//   console.log(`Average price ${averagePrice.toFixed(2)}`);
// };

// const onError = errorMessage => {
//   console.log(`Error! ${errorMessage}`);
// };

// calculateAveragePrice(products, onSuccess, onError);

// const result = value => (value > 5 ? value - 5 : value + 5);
// console.log(result(4));

/***  Task - 5 ****/

// Доповни код таким чином, щоб у змінній result був результат виконання функції makePizza,
// а у змінній pointer було посилання на функцію makePizza.
// function makePizza() {
//   return 'Your pizza is being prepared, please wait.';
// }
// // Change code below this line

// const result = makePizza();
// const pointer = makePizza;

/*** Псевдомасив аргументів ***/

/***  Task - 6 ****/
