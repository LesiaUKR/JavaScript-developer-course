/********* Arrays /Масиви *********/

// const color1 = 'red';
// const color2 = 'orange';
// const color3 = 'yellow';
// const color4 = 'green';
// const color5 = 'blue';
// const color6 = 'indigo';
// const color7 = 'violet';

// console.log(color2);

/*** Масив ***/

// Масив - це тип данних об'єкт

// const rainbowColors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// console.log(typeof rainbowColors); //object
// console.log(Array.isArray(rainbowColors)); //true - краще використовувати саме цей спосіб перевірки isArray() чи
// дійсно ми працюємо з масивом

// console.log(rainbowColors[1]);
// console.log('The sky is ' + rainbowColors[4]);

/*** Масиви зміна елементів ***/

// rainbowColors[5] = 'dark blue';
// rainbowColors[7] = 'indigo';

/*** Last element of Array ***/

// const lengthOfArray = rainbowColors.length;
// const lastElementOfArray = rainbowColors.length - 1;
// const lastEl = rainbowColors[lastIdx];
// console.log(lastEl);
// console.log(rainbowColors);
// console.log(lengthOfArray);
// console.log(lastElementOfArray);

/*** 1. create new Array ***/

// const stringNumbers = [];
// stringNumbers[0] = 'one';
// stringNumbers[1] = 'two';
// stringNumbers[2] = 'three';
// console.log(stringNumbers);

/*** 2. create new Array with function new Array() ***/

// const stringNumbers2 = new Array('one', 'two', 'three');
// console.log(stringNumbers2);

/*** Array може містити різні типи даних   ***/

const numbers = [34, 5, 32, 67];
console.log(numbers);

const anyItems = [4, true, new Date(), 'something'];
console.log(anyItems);

/****** Присвоєння за значенням чи за посиланням ******/

/*** Примітивні типи даних - присвоєння за значенням ***/

// let a = 1;
// let b = a;
// console.log('a', a);
// console.log('b', b);
// console.log(a === b);

// a = 3;
// console.log('a', a);
// console.log('b', b);

/*** Складні  типи даних - присвоєння за посиланням ***/

// let a = [1, 2, 3];
// let b = a;
// console.log('a', a);
// console.log('b', b);

// b[0] = 'c';
// console.log('a', a);
// console.log('b', b);

// console.log(a === b);
// console.log(a === [1, 2, 3]); //завжди буде false
// console.log(b === [1, 2, 3]); //завжди буде false

/******* ПЕРЕБІР МАСИВУ *******/

/*** Цикл for ***/

// якщо потрібно мутувати масив, видалити елемент з масиву, замінити елемент
// Найпоширеніший тип циклу JS
// for (a; b; c), де a є інструкцією ініціалізації, b є інструкцією умови, а c є кінцевим виразом.
// умова  (a; b; c) продовжуватиметься поки не прийде до true
// якщо умова починається як «false»,  цикл ніколи не виконається

// перебрати вміст масиву і виводити кожен елемент масиву на консоль
// for (let i = 0; i < rainbowColors.length; i += 1){
//    const item = rainbowColors[i];
//    console.log(item)
//    if (typeof rainbowColors[i] === 'boolean') {
//       array[i] = 1;
//    }
// }

// потрібно додати значення кожного елемента масиву myArr до total

// const myArr = [2, 3, 4, 5, 6];
// let total = 0;

// for (let i = 0; i < myArr.length; i++) {

//    total += myArr[i];
//    console.log(total);
// }

// const myArray = [];

// for (let i = 1; i <= 5; i++) {
//   myArray.push(i);
// }

// тільки парні числа
// const ourArray = [];

// for (let i = 0; i < 10; i += 2) {
//   ourArray.push(i);
// }

// тільки непарні числа
// const myArray = [];

// for (let i = 1; i <= 9; i += 2) {
//   myArray.push(i);
// }

// зворотний рахунок
// const ourArray = [];

// for (let i = 10; i > 0; i -= 2) {
//   ourArray.push(i);
// }

// перебір вкладених масивів
// const arr = [
//   [1, 2], [3, 4], [5, 6]
// ];

// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr[i].length; j++) {
//     console.log(arr[i][j]);
//   }
// }

// добуток усіх чисел у вкладених масивах

// function multiplyAll(arr) {
//   let product = 1;

//    for (let i = 0; i < arr.length; i++) {
//       for (let j = 0; j < arr[i].length; j++) {
//          product *= (arr[i][j]);
//          console.log(product)
//       }
//    }

//   return product;
// }

// multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

/*** Цикл for of ***/

// for (const item of rainbowColors) {
//    console.log(item);
//    if (typeof item === 'boolean') {
//       item = 1;
//    }
//    console.log(item);
// }

/*** Цикл While ***/
// виконується за заданою істинною умовою і припиняється, як тільки ця умова більше не буде істинною.

// const myArray = [];

// let i = 5;

// while (i >= 0) {
//   myArray.push(i);
//   i--;
// }

// console.log(myArray);

/*** 1. Зробити незалежну копію масиву ***/

let a = [1, 2, 3];
let b = Array.from(a); //копія з масиву a, тобто зміни в b не будуть відображатися в a
let c = [...a];
let d = [].concat(a);
// console.log('a', a);
// console.log('b', b);
// console.log('c', c);
// console.log(a === d);

/*** Напиши функцію calculateTotal(number), яка приймає ціле число (параметр number) і
 * повертає суму всіх цілих чисел від одиниці і до цього числа. Наприклад, якщо number
 * дорівнює 3, то сума - це 1 + 2 + 3, тобто 6***/

function calculateTotal(number) {
  // Change code below this line
  let total = 0;

  for (i = 1; i <= number; i += 1) {
    total += i;
  }

  return total;
  // Change code above this line
}

console.log(calculateTotal(4));

/*** Напиши функцію calculateTotalPrice(order), яка приймає один параметр order - масив чисел,
 і обчислює загальну суму його елементів. Загальна сума елементів повинна зберігатися у 
 змінній total, яка повертається як результат роботи функції. ***/

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
//   for (item of order) {
//     total += item;
//   }
//   // Change code above this line
//   return total;
// }

function calculateTotalPrice(order) {
  let total = 0;
  // Change code below this line
  for (i = 0; i < order.length; i += 1) {
    total += order[i];
  }
  // Change code above this line
  return total;
}
console.log(calculateTotalPrice([12, 85, 37, 4]));

/*** Напиши функцію findLongestWord(string), яка приймає довільний рядок, що складається 
 тільки зі слів, розділених пробілом (параметр string), і повертає найдовше слово в цьому
  рядку. ***/

function findLongestWord(string) {
  // Change code below this line
  let stringByWords = string.split(' ');
  console.log(stringByWords);
  let longestWord = stringByWords[0];

  for (let i = 0; i < stringByWords.length; i += 1) {
    console.log(stringByWords[i]);
    if (stringByWords[i].length > longestWord.length) {
      longestWord = stringByWords[i];
    }
  }
  return longestWord;
  // Change code above this line
}

console.log(findLongestWord('hello worlds'));

/*** Напиши функцію getCommonElements(array1, array2), яка отримує два масиви довільної довжини в параметри
 array1 і array2, і повертає новий масив, що складається з тих елементів, які присутні в обох вихідних масивах.***/
function getCommonElements(array1, array2) {
  // Change code below this line
  const identicalElementsArray = [];

  for (const element of array1) {
    if (array2.includes(element)) {
      identicalElementsArray.push(element);
    }
    console.log(element);
  }
  return identicalElementsArray;
  // Change code above this line
}

console.log(getCommonElements([1, 2, 3], [2, 4]));

/*** Виконай рефакторинг коду функції calculateTotalPrice(order), замінивши цикл for на for...of. ***/

function calculateTotalPrice(order) {
  let total = 0;
  // Change code below this line

  for (let element of order) {
    total += element;
  }

  // Change code above this line
  return total;
}

/*** Напиши функцію getEvenNumbers(start, end), яка повертає масив усіх парних чисел від start до end.
 * Парним вважається число, яке ділиться на 2 без остачі (10 % 2 === 0). ***/

function getEvenNumbers(start, end) {
  // Change code below this line
  let evenNumbersArray = [];

  for (let i = start; i <= end; i += 1) {
    console.log(i);
    if (i % 2 === 0) {
      evenNumbersArray.push(i);
    }
  }

  return evenNumbersArray;

  // Change code above this line
}

/*** Напиши функцію includes(array, value), яка робить те саме, що і метод масиву масив.includes(значення) - перевіряє, 
 * чи присутнє в масиві array значення value, повертаючи true, якщо присутнє, і false в іншому випадку.
При виконанні цього завдання в тілі функції includes() не можна використовувати метод масив.includes(значення). ***/

function includes(array, value) {
  // Change code below this line

  for (const element of array) {
    if (element === value) {
      return true;
    }
  }
  return false;
  // Change code above this line
}
