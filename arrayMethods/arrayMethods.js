/****** МЕТОДИ РОБОТИ З МАСИВАМИ ******/

// const numbers = [1, 2, 3, 4];
// let result;

/*** length ***/

// result = numbers.length;

/*** Array.isArray ***/
// перевірка чи є масивом, де Array загальний об'єкт масиву

// Масиви не мають окремого типу в Javascript. Вони засновані на обʼєктах.
// Тому typeof не може відрізнити простий обʼєкт від масиву
// alert(typeof {}); // обʼєкт
// alert(typeof []); // також обʼєкт

// result = Array.isArray(numbers);

/*** indexOf ***/

// result = numbers.indexOf(4);

/*** push ***/
// мутуючий метод, додає в кінець один або список елементів - повертає довжину оновленого масиву

// result = numbers.push(5, 6, 7, 8, 9);

/*** pop ***/
// видалити з кінця ОДИН елемент за ОДНУ операцію - повертає той елемент, який метод вирізав

// result = numbers.pop(); //метод без параметрів

/*** unshift ***/

// мутуючий метод, додає на початок один або список елементів - повертає довжину оновленого масиву.
// під час цього методу завжди буде проходит ре-індексація елементів масиву

// result = numbers.unshift(9, 10);

/*** shift ***/
// мутуючий метод, видаляє на початку одинелемент - повертає той елемент, який метод вирізав

// result = numbers.shift(); //метод без параметрів

/*** splice ***/

// універсальний «швейцарський ніж» для роботи з масивами. Вміє все: додавати, видаляти і замінювати елементи.
// arr.splice(start[, deleteCount, elem1, ..., elemN])
// Він змінює arr починаючи з позиції start: видаляє deleteCount елементів і вставляє elem1, ..., elemN на їх місце.
// Повертається масив з видалених елементів.

// delete - видалення
// result = numbers.splice(1, 1); // з індексу 1 видалимо 1 елемент

// result = numbers.splice(0, 3); // з індексу 0 видалимо 3 елементи

// // delete - видалення із заміною/вставленням інших елементів

// result = numbers.splice(0, 3, 1, 2, 3, 4, 5, 6); // видалимо 3 перших елементи і замінимо їх іншими 1, 2, 3, 4, 5, 6

// // adding - додавання без видалення елементів

// result = numbers.splice(8, 0, 9, 10); // починаючи з індекса 8 видалимо 0 елементів та вставимо 9 та 10

// // Дозволяються відʼємні індекси

// // починаючи з індекса -1 (перед останнім елементом)
// // видалимо 0 елементів
// // вставимо значення 9 та 10
// result = numbers.splice(-1, 0, 11, 12);

// /*** reverse ***/

// // метод для влаштування елементів масиву у зворотньому напрямку - повертає масив у зворотному порядку

// result = numbers.reverse();

/*** slice ***/

// синтаксис - arr.slice([start], [end])
// повертає новий масив, копіюючи до нього всі елементи від індексу start до end (не включаючи end)
// початковий масив не змінюється!

// result = numbers.slice(); //без аргументів slice() створить копію масиву numbers

// result = numbers.slice(1, 3); // 12, 11 (копіює з 1 до 3)

// // start, і end в  slice() можуть бути відʼємними. В такому випадку відлік буде здійснюватися з кінця масиву

// result = numbers.slice(-2); // 2,1 (копіює з -2 до кінця)

/*** concat ***/

// створює новий масив, в який копіює дані з інших масивів та додаткові значення
// синтаксис - arr.concat(arg1, arg2...)
// приймає будь-яку кількість аргументів – масивів або значень
// Результатом є новий масив, що містить елементи з arr, потімarg1, arg2 тощо.

// Якщо аргумент argN є масивом, то всі його елементи копіюються. В іншому випадку буде скопійовано сам аргумент.

// створимо масив з numbers і [0,-1, -2]
// result = numbers.concat([0, -1, -2]); // [ 10, 12, 11, 9, 8, 7, 6,  5,  4, 3, 2, 1, 0, -1, -2]

// // створимо масив з: numbers, [-3,-4] і [-5,-6]
// result = numbers.concat([-3, -4], [-5, -6]); // [ 10, 12, 11, 9, 8, 7, 6,  5,  4, 3, 2, 1, 0, -1, -2,-3,-4,-5,-6]

// // створимо масив з: numbers і [-7, -8], також добавимо значення -9, -10
// result = numbers.concat([-7, -8], -9, -10); // [ 10, 12, 11, 9, 8, 7, 6,  5,  4, 3, 2, 1, 0, -1, -2,-3,-4,-5,-6, -7, -8, -9,-10]

// console.log(numbers);
// console.log(result);

/****** ЗАДАЧІ З МАСИВАМИ ******/

/* Task 1

Tips Calculator Task
You have to build a tips calculator.
The calculator should calculate tips in following manner:
If the bill value is less than 20, tips should be 20%. In other cases tips should be 15%.

1.	Create an arrow function calculateTips(), that takes a bill parameter and returns the corresponding tips.
2.	Create an array of bills with test data below.
3.	Create an array of tips for each bill.
4.	Create an array of total bills, that is bill + tips.

Test data: 11, 20, 47. */

// const calculateTips = bill => (bill < 20 ? bill * 0.2 : bill * 0.15);

// const bills = [11, 20, 47];

// const tips = [
//   calculateTips(bills[0]),
//   calculateTips(bills[1]),
//   calculateTips(bills[2]),
// ];

// const totalBills = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// console.log(bills, tips, totalBills);

/****** ITERATIVE ARRAY METHODS ******/

/* Task 2 */

// function changeEven(numbers, value) {

//   let newArray = [];
//   // Change code below this line
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 === 0) {
//       newArray.push(numbers[i] + value);
//     } else {
//       newArray.push(numbers[i]);
//     }
//   }
//   // Change code above this line
//     return newArray;
// }

// changeEven([2, 8, 3, 7, 4, 6], 10)
// console.log(changeEven([1, 2, 3, 4, 5], 10));

/* Task 3 */
// Доповни код таким чином, щоб у змінній planetsLengths вийшов масив довжин назв планет.
// Обов'язково використовуй метод map().
// const planets = ['Earth', 'Mars', 'Venus', 'Jupiter'];
// // Change code below this line
// const planetsLengths = planets.map(planets => {
//   return planets.length;
// });

/* Task 4 */
// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//   { title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67 },
// ];
// // Change code below this line

// const titles = books.map(books => {
//   return books.title;
// });

/* Task 5 */

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     genres: ['adventure', 'history'],
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     genres: ['fiction'],
//   },
//   {
//     title: 'Redder Than Blood',
//     author: 'Tanith Lee',
//     genres: ['horror', 'mysticism'],
//   },
// ];
// // Change code below this line

// const genres = books.flatMap(books => books.genres);

/* Task 6 */

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Change code below this line

// const evenNumbers = numbers.filter(number => {
//   return number % 2 === 0;
// });
// const oddNumbers = numbers.filter(number => {
//   return number % 2 !== 0;
// });

/* Task 7 */

// Доповни код таким чином, щоб у змінній allGenres був масив всіх жанрів книг(властивість genres) з масиву books,
// а у змінній uniqueGenres - масив унікальних жанрів, без повторень.

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     genres: ['adventure', 'history'],
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     genres: ['fiction', 'mysticism'],
//   },
//   {
//     title: 'Redder Than Blood',
//     author: 'Tanith Lee',
//     genres: ['horror', 'mysticism', 'adventure'],
//   },
// ];
// // Change code below this line
// const allGenres = books.flatMap(books => books.genres);
// const uniqueGenres = allGenres.filter((genres, index, array) => {
//   console.log('genre indexOf', array.indexOf(genres));
//   return array.indexOf(genres) === index;
// });

// console.log(allGenres);
// console.log(uniqueGenres);

/* Task 8 */

// Використовуючи метод filter(), доповни код таким чином, щоб:

// У змінній topRatedBooks утворився масив книг, рейтинг яких(властивість rating)
// більший за або дорівнює значенню змінної MIN_RATING.
// У змінній booksByAuthor утворився масив книг, написаних автором з ім'ям (властивість author),
// яке збігається зі значенням у змінній AUTHOR.

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//   { title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = 'Bernard Cornwell';
// // Change code below this line

// const topRatedBooks = books.filter(({ rating }) => rating > MIN_RATING);
// const booksByAuthor = books.filter(({ author }) => author === AUTHOR);

// console.log(topRatedBooks);

// console.log(booksByAuthor);

/* Task 9 */

// Доповни функцію getUsersWithEyeColor(users, color) таким чином,
// щоб вона повертала масив користувачів, у яких колір очей(властивість eyeColor)
// збігається зі значенням параметра color.

// const getUsersWithEyeColor = (users, color) => {
//   return users.filter(user => user.eyeColor === color);
// };

/* Task 10 */

// Доповни функцію getUsersWithAge(users, minAge, maxAge) таким чином,
// щоб вона повертала масив користувачів, вік яких(властивість age)
// потрапляє у проміжок від minAge до maxAge.

// const getUsersWithAge = (users, minAge, maxAge) => {
//   return users.filter(user => user.age > minAge && user.age < maxAge);
// };

/* Task 11 */

// Доповни функцію getFriends(users) таким чином, щоб вона повертала масив
// друзів всіх користувачів(властивість friends).У декількох користувачів
// можуть бути однакові друзі, зроби так, щоб масив, що повертається, не містив повторень.

const users = [
  {
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    gender: 'male',
  },
  {
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    gender: 'female',
  },
  {
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    gender: 'male',
  },
  {
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    gender: 'female',
  },
  {
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong', 'Adrian Cross'],
    isActive: true,
    balance: 3951,
    gender: 'male',
  },
  {
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: [
      'Jacklyn Lucas',
      'Linda Chapman',
      'Adrian Cross',
      'Solomon Fokes',
    ],
    isActive: false,
    balance: 1498,
    gender: 'male',
  },
  {
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    gender: 'female',
  },
];
// const getFriends = users => {
//   const allFriends = users.flatMap(user => user.friends);
//   console.log(allFriends);
//   const uniqueFriends = allFriends.filter(
//     (friend, idx, array) => array.indexOf(friend) === idx
//   );

//   return uniqueFriends;
// };

// console.log(getFriends(users));

/* Task 12 */
// const getActiveUsers = users => {
//   return users.filter(({ isActive }) => isActive);
// };

// console.log(getActiveUsers(users));

/* Task 13 */
// const getInactiveUsers = users => {
//   return users.filter(user => !user.isActive);
// };

/* Task 14 */

// Використовуючи метод find(), доповни код таким чином, щоб:

// У змінній bookWithTitle утворився об'єкт книги, назва якої (властивість title)
//  збігається зі значенням змінної BOOK_TITLE.
// У змінній bookByAuthor утворився об'єкт книги, автор якої (властивість author)
// збігається зі значенням змінної AUTHOR.
// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
// ];
// const BOOK_TITLE = 'The Dream of a Ridiculous Man';
// const AUTHOR = 'Robert Sheckley';
// // Change code below this line

// const bookWithTitle = books.find(books => books.title === BOOK_TITLE);
// const bookByAuthor = books.find(books => books.author === AUTHOR);

// console.log(bookWithTitle);
// console.log(bookByAuthor);

/* Task 15 */

// Доповни функцію getUserWithEmail(users, email) таким чином, щоб вона повертала об'єкт користувача,
//  пошта якого(властивість email) збігається зі значенням параметра email.
// const getUserWithEmail = (users, email) => {
//   return users.find(users => users.email === email);
// };
// console.log(getUserWithEmail(users, 'shereeanthony@kog.com'));

/* Task 16 */

// Використовуючи метод every(), доповни код таким чином, щоб:

// У змінній eachElementInFirstIsEven був результат перевірки всіх елементів масиву firstArray на парність.
// У змінній eachElementInFirstIsOdd був результат перевірки всіх елементів масиву firstArray на непарність.
// У змінній eachElementInSecondIsEven був результат перевірки всіх елементів масиву secondArray на парність.
// У змінній eachElementInSecondIsOdd був результат перевірки всіх елементів масиву secondArray на непарність.
// У змінній eachElementInThirdIsEven був результат перевірки всіх елементів масиву thirdArray на парність.
// У змінній eachElementInThirdIsOdd був результат перевірки всіх елементів масиву thirdArray на непарність.

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change code below this line

// // const eachElementInFirstIsEven = firstArray.every(element => element % 2 === 0);
// // const eachElementInFirstIsOdd = firstArray.every(element => element % 2 > 0);
// console.log(eachElementInFirstIsEven);
// console.log(eachElementInFirstIsOdd);

// const eachElementInSecondIsEven = secondArray.every(
//   element => element % 2 === 0
// );
// const eachElementInSecondIsOdd = secondArray.every(element => element % 2 > 0);
// const eachElementInThirdIsEven = thirdArray.every(element => element % 2 === 0);
// const eachElementInThirdIsOdd = thirdArray.every(element => element % 2 > 0);

/* Task 17 */
// Доповни функцію isEveryUserActive(users) таким чином, щоб вона перевіряла,
// чи всі користувачі зараз активні(властивість isActive) і повертала true або false.
// const isEveryUserActive = users => {
//   return users.every(user => user.isActive);
// };

/* Task 18 */

// Використовуючи метод some(), доповни код таким чином, щоб:

// У змінній anyElementInFirstIsEven був результат перевірки наявності парних елементів в масиві firstArray.
// У змінній anyElementInFirstIsOdd був результат перевірки наявності непарних елементів в масиві firstArray.
// У змінній anyElementInSecondIsEven був результат перевірки наявності парних елементів в масиві secondArray.
// У змінній anyElementInSecondIsOdd був результат перевірки наявності непарних елементів в масиві secondArray.
// У змінній anyElementInThirdIsEven був результат перевірки наявності парних елементів в масиві thirdArray.
// У змінній anyElementInThirdIsOdd був результат перевірки наявності непарних елементів в масиві thirdArray.

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change below this line

// const anyElementInFirstIsEven = firstArray.some(element => element % 2 === 0);
// const anyElementInFirstIsOdd = firstArray.some(element => element % 2 > 0);

// const anyElementInSecondIsEven = secondArray.some(element => element % 2 === 0);
// const anyElementInSecondIsOdd = secondArray.some(element => element % 2 > 0);

// const anyElementInThirdIsEven = thirdArray.some(element => element % 2 === 0);
// const anyElementInThirdIsOdd = thirdArray.some(element => element % 2 > 0);

/* Task 19 */

// Доповни функцію isAnyUserActive(users) таким чином, щоб вона перевіряла наявність активних
// користувачів(властивість isActive) і повертала true або false.
// const isAnyUserActive = users => {
//   return users.some(user => user.isActive);
// };

/* Task 20 */

// Ігровому сервісу необхідний функціонал підрахунку середнього часу, проведеного в іграх.
// Доповни код таким чином, щоб у змінній totalPlayTime вийшло загальний
// ігровий час з масиву playtimes.
// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244,
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]

// const totalPlayTime = playtimes.reduce((total, value) => total + value, 0);

// const averagePlayTime = totalPlayTime / playtimes.length;

/* Task 21 */

// Доповни функцію getTotalBalanceByGender(users, gender) таким чином,
// щоб вона повертала загальний баланс користувачів(властивість balance),
// стать яких(властивість gender) збігається зі значенням параметра gender.

/********************* 1st variant ***********************/

// const getTotalBalanceByGender = (users, gender) =>
//   [...users]
//     .filter(user => user.gender === gender)
//     .reduce((totalBal, us) => totalBal + us.balance, 0);

/********************* 2nd variant ***********************/

// const getTotalBalanceByGender = (users, gender) => {
//   const filteredUsersByGender = users.filter(users => users.gender === gender);
//   console.log(filteredUsersByGender);

//   const totalBalanceByGender = filteredUsersByGender.reduce(
//     (previousValue, users) => previousValue + users.balance,
//     0
//   );
//   return totalBalanceByGender;
// };

// console.log(getTotalBalanceByGender(users, 'male'));

/* Task 22 */

// Доповни функцію getTotalFriendCount(users) таким чином, щоб вона рахувала і
// повертала загальну кількість друзів(властивість friends) усіх користувачів з масиву users.

/********************* 1st variant ***********************/
// const getTotalFriendCount = users =>
//   users.reduce((total, user) => {
//     console.log(total);
//     console.log(user);
//     console.log(user.friends.length);
//     return total + user.friends.length;
//   }, 0);

/********************* 2nd variant ***********************/

// const getTotalFriendCount = users => {
//   return users.flatMap(({ friends }) => friends).length;
// };

// console.log(getTotalFriendCount(users));

/* Task 23 */

// Метод sort() сортує елементи масиву, але на відміну від інших
// методів перебирання, він сортує вихідний масив.

// Сортує і змінює вихідний масив.
// Повертає змінений масив, тобто посилання на відсортований вихідний.
// За замовчуванням сортує за зростанням.
// Сортування відбувається шляхом приведення значень до рядка і
// порівняння порядкових номерів у таблиці Unicode.

// Доповни код таким чином, щоб у змінній ascendingReleaseDates вийшла копія масиву
// releaseDates, відсортована за зростанням, а у змінній alphabeticalAuthors -
// копія масиву імен авторів authors, відсортована за алфавітом.

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   'Tanith Lee',
//   'Bernard Cornwell',
//   'Robert Sheckley',
//   'Fyodor Dostoevsky',
// ];
// // Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort();

// const alphabeticalAuthors = [...authors].sort();

/* Task 24 */

// Онлайн бібіліотеці необхідно відображати книги, відсортовані за датою видання,
// за її зростанням або спаданням.Доповни код таким чином, щоб у змінній
// ascendingReleaseDates вийшла копія масиву releaseDates, відсортована за зростанням,
// а у змінній descendingReleaseDates - копія, відсортована за спаданням.

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// // Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort(); //за замовчуванням
// // const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b);

// const descendingReleaseDates = [...releaseDates].sort(
//   (prevDate, nextDate) => nextDate - prevDate
// );

/* Task 25 */

// Онлайн бібіліотеці необхідно відображати книги, відсортовані за автором,
// в алфавітному і зворотному алфавітному порядку.Доповни код таким чином,
// щоб у змінній authorsInAlphabetOrder вийшла копія масиву authors, відсортована за алфавітом,
// а у змінній authorsInReversedOrder - копія, відсортована у зворотному алфавітному порядку.
// const authors = [
//   'Tanith Lee',
//   'Bernard Cornwell',
//   'Robert Sheckley',
//   'Fyodor Dostoevsky',
//   'Howard Lovecraft',
// ];

/********************* 1st variant ***********************/

// const authorsInAlphabetOrder = [...authors].sort();
// console.log(authorsInAlphabetOrder);

// const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));
// console.log(authorsInReversed)

/********************* 2nd variant ***********************/

// const authorsInAlphabetOrder = [...authors].sort((prevAuthor, nextAuthor) =>
//   prevAuthor.localeCompare(nextAuthor)
// );

// const authorsInReversedOrder = [...authors].sort((prevAuthor, nextAuthor) =>
//   nextAuthor.localeCompare(prevAuthor)
// );

/* Task 26 */

// Доповни код таким чином, щоб:

// У змінній sortedByAuthorName вийшов масив книг, відсортований за ім'ям автора в алфавітному порядку.
// У змінній sortedByReversedAuthorName вийшов масив книг, відсортований за ім'ям автора у зворотному алфавітному порядку.
// У змінній sortedByAscendingRating вийшов масив книг, відсортований за зростанням рейтингу.
// У змінній sortedByDescentingRating вийшов масив книг, відсортований за спаданням рейтингу.

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//   { title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67 },
// ];
// Change code below this line

// const sortedByAuthorName = [...books].sort((firstBook, secondBook) =>
//   firstBook.author.localeCompare(secondBook.author)
// );

// console.log(sortedByAuthorName);

// const sortedByReversedAuthorName = [...books].sort((firstBook, secondBook) =>
//   secondBook.author.localeCompare(firstBook.author)
// );

// const sortedByAscendingRating = [...books].sort(
//   (firstBook, secondBook) => firstBook.rating - secondBook.rating
// );

// const sortedByDescentingRating = [...books].sort(
//   (firstBook, secondBook) => secondBook.rating - firstBook.rating
// );

/* Task 27 */

// Доповни функцію sortByAscendingBalance(users) таким чином, щоб вона повертала масив користувачів,
// відсортований за зростанням їх балансу(властивість balance).

// const sortByAscendingBalance = users => {
//   return [...users].sort(
//     (firstUser, secondUser) => firstUser.balance - secondUser.balance
//   );
// };

/* Task 28 */

// Доповни функцію sortByDescendingFriendCount(users) таким чином, щоб вона повертала масив користувачів,
// відсортований за спаданням кількості їхніх друзів(властивість friends).

// const sortByDescendingFriendCount = users => {
//   return [...users].sort(
//     (firstUser, secondUser) =>
//       secondUser.friends.length - firstUser.friends.length
//   );
// };

/* Task 29 */

// Доповни функцію sortByName(users) таким чином, щоб вона повертала масив користувачів,
// відсортований за їх ім'ям (властивість name) в алфавітному порядку.

// const sortByName = users => {
//   return [...users].sort((prevUser, nextUser) =>
//     prevUser.name.localeCompare(nextUser.name)
//   );
// };

/* Task 30 */

// Доповни код таким чином, щоб у змінній names вийшов масив імен авторів в алфавітному порядку,
// рейтинг книг яких більший за значення змінної MIN_BOOK_RATING.
// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//   {
//     title: 'The Dreams in the Witch House',
//     author: 'Howard Lovecraft',
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;
// // Change code below this line

// const names = books
//   .filter(book => book.rating > MIN_BOOK_RATING)
//   .map(({ author }) => author)
//   .sort((prevAuthor, nextAuthor) => prevAuthor.localeCompare(nextAuthor));
// console.log(names);

/* Task 31 */

// Доповни функцію getNamesSortedByFriendCount(users) таким чином,
// щоб вона повертала масив імен користувачів,
// відсортований за зростанням кількості їхніх друзів(властивість friends).

// const getNamesSortedByFriendCount = users => {
//   return [...users]
//     .sort(
//       (prevUser, nextUser) => prevUser.friends.length - nextUser.friends.length
//     )
//     .map(user => user.name);
// };

// console.log(getNamesSortedByFriendCount(users));

/* Task 32 */
// Доповни функцію getSortedFriends(users) таким чином,
// щоб вона повертала масив унікальних імен друзів(властивість friends),
// відсортований за алфавітом.

// const getSortedFriends = users => {
//   return users
//     .map(user => user.name)
//     .filter((name, idx, array) => array.indexOf(name) === idx)
//     .sort((prevName, nextName) => prevName.localeCompare(nextName));
// };

// const getSortedFriends = users => {
//   return users
//     .flatMap(user => user.friends)
//     .filter(
//       (userFriendsName, idx, array) => array.indexOf(userFriendsName) === idx
//     )
//     .sort((prevName, nextName) => prevName.localeCompare(nextName));
// };

// console.log(getSortedFriends(users));
