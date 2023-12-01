/********* Керуючі послідовності у рядках *********/

const myStr = 'FirstLine\n\t\\SecondLine\nThirdLine';
console.log(myStr);

/***  Лапки — не єдині символи, що можуть бути екрановані в рядку. 
Екрановані символи дозволяють використовувати символи, 
які інакше неможливо використати.  ***/

// Код	Вивід
// \'	одинарні лапки
// \"	подвійні лапки
// \\	зворотна коса риска
// \n	новий рядок
// \t	табуляція
// \r	повернення каретки
// \b	крок назад
// \f	перевід сторінки

/*** Об’єднання рядків за допомогою оператора += ***/

// let ourStr = "I come first. ";
// ourStr += "I come second.";

// Тепер ourStr має значення рядка I come first. I come second.

/*** Пропуски у словах += ***/

// const myNoun = "dog";
// const myAdjective = "big";
// const myVerb = "ran";
// const myAdverb = "quickly";

// const wordBlanks = "We saw " + myAdjective + " " + myNoun + " " + "that " + myVerb + " " + myAdverb + ".";

// console.log(wordBlanks)

/********* STRING MANIPULATION *********/

/*** Concatanation ***/

let result;
const firstName = 'Jack';
const lastName = 'Brown';
const space = ' ';
const age = 25;
const greeting = 'Hey there!';

result = firstName + ' ' + lastName;

/*** Excaping - екранування ***/

result = "I'm 34 years old";
result = 'I like "Star wars"movie';

/*** Properties and methods ***/

//length

result = 'Hello!'.length;
result = firstName.length;

//concat

result = firstName.concat(' ', lastName);
result = greeting.concat(' ', 'My name is ', firstName, ' ', lastName);

// toUpperCase

result = result.toUpperCase();
result = result.toLowerCase();

//index

result = firstName[0];

result = 'Hello'.indexOf('l');
result = 'Hello lol'.lastIndexOf('l');
result = 'Hello lol'.lastIndexOf('lo');
result = firstName.indexOf('b');

//charAt

result = firstName.charAt(0);

//останній символ в довгому рядку
const longString = "Hi, I'm a long string";
result = longString.charAt(longString.length - 1);

//substring
result = greeting.substring(0, 3);

//slice()
result = greeting.slice(4, 9);
result = greeting.slice(-5);

//split()
result = longString.split(' ');
const colors = 'red, orange, green, blue';
result = colors.split(',');

//replace
result = colors.replace('blue', 'yellow');

// includes()
result = colors.includes('indigo');

console.log(result);

/********* Шаблонні рядки - Template Strings *********/

const brand = 'Toyota';
const model = 'Camry';
const color = 'grey';
const year = '2019';

let carHTML;

//Old approach(before ES6)

carHtml =
  '<h3>' +
  'car Description' +
  '</h3>' +
  '<ul>' +
  '<li>Brand: ' +
  brand +
  '</li>' +
  '<li>Model: ' +
  model +
  '</li>' +
  '<li>Color: ' +
  color +
  '</li>' +
  '<li>Year: ' +
  year +
  '</li>' +
  '</ul>';

//New approach (template literals or template strings)

carHtml = `
<h3>car Description</h3>
<ul>
   <li>Brand: ${brand}</li>
   <li>Model: ${model}</li>
   <li>Color: ${color}</li>
   <li>Year: ${year}</li>
     <li>Year: ${2010 + 17}</li>
       <li>Doors: ${getDoorsNumber()}</li>
       <li>Tax:${year < 2000 ? '20%' : '10%'}</li>
   </ul>
   `;
function getDoorsNumber() {
  return 5;
}
document.body.innerHTML = carHtml;

// Remove first n characters of string
// Write a function that takes a string (a) as argument.
// Remove the first 3 characters of a.Return the result

function myFunction(a) {
  return a.slice(3);
}

console.log(myFunction('abcdefg'));
console.log(myFunction('1234'));
console.log(myFunction('fgedcba'));
