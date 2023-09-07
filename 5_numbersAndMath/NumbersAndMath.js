/********* Number Math *********/

const firstNumber = 50;
const secondNumber = 10;

let result;

/*** Simple Math Operations ***/

result = firstNumber + secondNumber;
result = firstNumber - secondNumber;
result = firstNumber * secondNumber;
result = firstNumber / secondNumber;
result = firstNumber % secondNumber;

/*** Math Object - built-in JS methods ***/

result = Math.PI;
result = Math.round(3.5);
result = Math.ceil(3.3);
result = Math.floor(3.7);
result = Math.sqrt(9); //квадратний корінь
result = Math.abs(7); //абсолютне значення чи модуль
result = Math.pow(2, 2); //перший аргумент - що підносимо до степеню, другий - ступінь
result = Math.min(2, 3, 4, 5, 6);
result = Math.max(2, 3, 4, 5, 6, -57);
result = Math.random(); //отримуємо число рандомно від 0 до 1
result = Math.random() * 100; //отримуємо число рандомно від 1 до 100
result = Math.floor(Math.random() * 100); //отримуємо число рандомно від 0 до 99, але ціле. 
result = Math.floor(Math.random() * 100) + 1; //отримуємо число рандомно від 1 до 100, але ціле. 
console.log(result);
