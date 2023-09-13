/****** МЕТОДИ РОБОТИ З МАСИВАМИ ******/

const numbers = [1, 2, 3, 4];
let result;

/*** length ***/

result = numbers.length;

/*** Array.isArray ***/
// перевірка чи є масивом, де Array загальний об'єкт масиву

// Масиви не мають окремого типу в Javascript. Вони засновані на обʼєктах.
// Тому typeof не може відрізнити простий обʼєкт від масиву
alert(typeof {}); // обʼєкт
alert(typeof []); // також обʼєкт

result = Array.isArray(numbers);

/*** indexOf ***/

result = numbers.indexOf(4);

/*** push ***/
// мутуючий метод, додає в кінець один або список елементів - повертає довжину оновленого масиву

result = numbers.push(5, 6, 7, 8, 9);


 
/*** pop ***/
// видалити з кінця ОДИН елемент за ОДНУ операцію - повертає той елемент, який метод вирізав

result = numbers.pop(); //метод без параметрів

/*** unshift ***/

// мутуючий метод, додає на початок один або список елементів - повертає довжину оновленого масиву.
// під час цього методу завжди буде проходит ре-індексація елементів масиву

result = numbers.unshift(9,10);

/*** shift ***/
// мутуючий метод, видаляє на початку одинелемент - повертає той елемент, який метод вирізав

result = numbers.shift(); //метод без параметрів

/*** splice ***/

// універсальний «швейцарський ніж» для роботи з масивами. Вміє все: додавати, видаляти і замінювати елементи.
// arr.splice(start[, deleteCount, elem1, ..., elemN])
// Він змінює arr починаючи з позиції start: видаляє deleteCount елементів і вставляє elem1, ..., elemN на їх місце.
// Повертається масив з видалених елементів.

// delete - видалення
result = numbers.splice(1,1) // з індексу 1 видалимо 1 елемент

result = numbers.splice(0,3) // з індексу 0 видалимо 3 елементи

// delete - видалення із заміною/вставленням інших елементів

result = numbers.splice(0, 3, 1, 2, 3, 4, 5, 6); // видалимо 3 перших елементи і замінимо їх іншими 1, 2, 3, 4, 5, 6


// adding - додавання без видалення елементів

result = numbers.splice(8, 0, 9, 10); // починаючи з індекса 8 видалимо 0 елементів та вставимо 9 та 10

// Дозволяються відʼємні індекси

// починаючи з індекса -1 (перед останнім елементом)
// видалимо 0 елементів
// вставимо значення 9 та 10
result = numbers.splice(-1, 0, 11, 12);

/*** reverse ***/

// метод для влаштування елементів масиву у зворотньому напрямку - повертає масив у зворотному порядку

result = numbers.reverse();

/*** slice ***/

// синтаксис - arr.slice([start], [end])
// повертає новий масив, копіюючи до нього всі елементи від індексу start до end (не включаючи end)
// початковий масив не змінюється!

result = numbers.slice(); //без аргументів slice() створить копію масиву numbers

result = numbers.slice(1, 3); // 12, 11 (копіює з 1 до 3)

// start, і end в  slice() можуть бути відʼємними. В такому випадку відлік буде здійснюватися з кінця масиву

result = numbers.slice(-2); // 2,1 (копіює з -2 до кінця)

/*** concat ***/

// створює новий масив, в який копіює дані з інших масивів та додаткові значення
// синтаксис - arr.concat(arg1, arg2...)
// приймає будь-яку кількість аргументів – масивів або значень
// Результатом є новий масив, що містить елементи з arr, потімarg1, arg2 тощо.

// Якщо аргумент argN є масивом, то всі його елементи копіюються. В іншому випадку буде скопійовано сам аргумент.

// створимо масив з numbers і [0,-1, -2]
result = numbers.concat([0, -1, -2]); // [ 10, 12, 11, 9, 8, 7, 6,  5,  4, 3, 2, 1, 0, -1, -2]

// створимо масив з: numbers, [-3,-4] і [-5,-6]
result = numbers.concat([-3, -4], [-5, -6]); // [ 10, 12, 11, 9, 8, 7, 6,  5,  4, 3, 2, 1, 0, -1, -2,-3,-4,-5,-6]

// створимо масив з: numbers і [-7, -8], також добавимо значення -9, -10
result = numbers.concat([-7, -8], -9, -10); // [ 10, 12, 11, 9, 8, 7, 6,  5,  4, 3, 2, 1, 0, -1, -2,-3,-4,-5,-6, -7, -8, -9,-10]


console.log(numbers);
console.log(result);

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

const calculateTips = bill => bill < 20 ? bill * 0.2 : bill * 0.15;

const bills = [11, 20, 47];

const tips = [calculateTips(bills[0]), calculateTips(bills[1]), calculateTips(bills[2])];

const totalBills = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totalBills);