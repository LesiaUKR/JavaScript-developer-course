/****** ПРАКТИКА ******/

/* Task 1 */

// const weight = prompt(`Enter your weight in kilograms`);
// const height = prompt(`Enter your height in meters`);
// const bodyMassIndex = weight / (height ** 2); //зріст в квадраті можна хаписати ще так Math.pow(height,2)
// const areYouOverweight = bodyMassIndex >= 25;
// console.log(bodyMassIndex);
// console.log(areYouOverweight);
// alert("Are you overweight " + areYouOverweight);

/* Task 2 */

// const myStorage = {
//   "car": {
//     "inside": {
//       "glove box": "maps",
//       "passenger seat": "crumbs"
//      },
//     "outside": {
//       "trunk": "jack"
//     }
//   }
// };

// const gloveBoxContents = myStorage.car["inside"]["glove box"];
// const gloveBoxContents2 = myStorage.car.inside["glove box"]; //аналогічний запис до верхнього рядка - видасть теж "maps"
// console.log(gloveBoxContents);

/* Task 3 */

// const myPlants = [
//   {
//     type: "flowers",
//     list: [
//       "rose",
//       "tulip",
//       "dandelion"
//     ]
//   },
//   {
//     type: "trees",
//     list: [
//       "fir",
//       "pine",
//       "birch"
//     ]
//   }
// ];

// const secondTree = myPlants[1].list[1];
// console.log(secondTree);


/* Task 4 */

// const recordCollection = {
//   2548: {
//     albumTitle: 'Slippery When Wet',
//     artist: 'Bon Jovi',
//     tracks: ['Let It Rock', 'You Give Love a Bad Name']
//   },
//   2468: {
//     albumTitle: '1999',
//     artist: 'Prince',
//     tracks: ['1999', 'Little Red Corvette']
//   },
//   1245: {
//     artist: 'Robert Palmer',
//     tracks: []
//   },
//   5439: {
//     albumTitle: 'ABBA Gold'
//   }
// };

// // Змініть код лише під цим рядком
// function updateRecords(records, id, prop, value) {
//  // Перевірка, чи value є пустим рядком і якщо так, видалимо властивість prop
//    if (value === '') {
//       delete records[id][prop];
//    } else if
//   // Якщо prop не 'tracks' і value не є пустим рядком, просто оновлюємо властивість prop
//    (prop !== "tracks" && value !== '') {
//       records[id][prop] = value;
//    } else if (prop === "tracks") {
//       // Перевірка, чи prop є 'tracks' і value не є пустим рядком
//       // Якщо альбом не має властивості 'tracks', створюємо порожній масив
//       if(!records[id].hasOwnProperty('tracks')){
//          records[id]["tracks"] = [];
//       }
// // Якщо альбом має властивість 'tracks', оновлюємо масив tracks
//       records[id]["tracks"].push(value);
//    }
//   return records;
// }

// updateRecords(recordCollection, 5439, 'artist', 'ABBA');

/* Task 5 */

// function calculateTotal(number) {
//  // Change code below this line
//    let total = 0;
   
// for(i=1; i<=number; i++){
//    total += i;
//    console.log(total);
//     console.log(i);
  
//    }
//     return total;
//   // Change code above this line
// }

// console.log(calculateTotal(6));

/* Task 6 */

// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i+=1) { // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }

/* Task 7 */

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
// for (item of order) {
//    total += item;
// }
//   // Change code above this line
//   return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));

/* Task 8 */

// function findLongestWord(string) {
//   // Change code below this line
//    let stringByWords = string.split(' ');
//    console.log(stringByWords);
//    let longestWord = stringByWords[0];
//    console.log(longestWord);
   
//    for (let i = 0; i < stringByWords.length; i += 1){
//       console.log(stringByWords[i]);
//       if (stringByWords[i].length > longestWord.length) {
//           longestWord = stringByWords[i];
//       }
//    }
//    return longestWord;
//   // Change code above this line
// }

// console.log(findLongestWord("Google do a roll"));

/* Task 9 */

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
// for(i=min; i <=max; i+=1){
//   numbers.push(i);
// }
//   // Change code above this line
//   return numbers;
// }

// console.log(createArrayOfNumbers(1, 3))

/* Task 10 */

// function filterArray(numbers, value) {
//    // Change code below this line
// const newNumbers = [];

//    for (i = 0; i <= numbers.length; i += 1){
   
//    if (numbers[i] > value) {
//       newNumbers.push(numbers[i])
      
//   }
// }
//   return newNumbers;
//   // Change code above this line
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));

/* Task 11 */

// function getCommonElements(array1, array2) {
//   // Change code below this line
//    const identicalElementsArray = [];
   
//    for (const element of array1) {
//       if (array2.includes(element)) {
//           identicalElementsArray.push(element)
//       }
//    }
//    return identicalElementsArray;
//  // Change code above this line
// }

// console.log(getCommonElements([1, 2, 3], [2, 4]));

/* Task 12 */

// function filterArray(numbers, value) {
//   // Change code below this line
//   const filteredNumbers = [];

//   for (let element of numbers) {

//     if (element > value) {
//       filteredNumbers.push(element);
//     }
//   }

//   return filteredNumbers;
//   // Change code above this line
// }

/* Task 13 */

// function getEvenNumbers(start, end) {
//    // Change code below this line
//   let evenNumbersArray = [];

// for (let i = start; i <= end; i+=1){
//   console.log(i);
//   if (i % 2 === 0) {
//     evenNumbersArray.push(i)
//   }
//   }
  
//    return evenNumbersArray;
//     // Change code above this line
// }
  
// console.log(getEvenNumbers(3, 11));

/* Task 14 */

// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break
//   }
// }

/* Task 15 Рекурсія*/

//    function multiply(arr, n) {
//     if (n <= 0) {
//       return 1;
//     } else {
//       return multiply(arr, n - 1) * arr[n - 1];
//     }
// }
  
// console.log(multiply([1, 2, 3, 4], 3))

/* Task 16 Рекурсія*/

// function sum(arr, n) {
//   // Змініть код лише під цим рядком
//  if (n <= 0) {
//       return 0;
//     } else {
//       return sum(arr, n - 1) + arr[n - 1];
//     }
//   // Змініть код лише над цим рядком
// } 

// console.log(sum([1], 0));
// console.log(sum([2, 3, 4], 1));
// console.log(sum([2, 3, 4, 5], 3));

/* Task 17 */

// const contacts = [
//   {
//     firstName: "Akira",
//     lastName: "Laine",
//     number: "0543236543",
//     likes: ["Pizza", "Coding", "Brownie Points"],
//   },
//   {
//     firstName: "Harry",
//     lastName: "Potter",
//     number: "0994372684",
//     likes: ["Hogwarts", "Magic", "Hagrid"],
//   },
//   {
//     firstName: "Sherlock",
//     lastName: "Holmes",
//     number: "0487345643",
//     likes: ["Intriguing Cases", "Violin"],
//   },
//   {
//     firstName: "Kristian",
//     lastName: "Vos",
//     number: "unknown",
//     likes: ["JavaScript", "Gaming", "Foxes"],
//   },
// ];

// function lookUpProfile(name, prop) {
//   // Змініть код лише під цим рядком

//    for (let i = 0; i < contacts.length; i += 1) {

//       if (contacts[i].firstName === name) {
//          if (contacts[i].hasOwnProperty(prop)) {
//             return contacts[i][prop];

//          } else {
//             return "No such property"
//          }
//       }
//    }
//  return "No such contact"
  

//   // Змініть код лише над цим рядком
// }
// console.log(lookUpProfile("Akira", "likes"));
// console.log(lookUpProfile("Kristian", "lastName"));
// console.log(lookUpProfile("Sherlock", "likes"));
// console.log(lookUpProfile("Harry", "likes"));
// console.log(lookUpProfile("Bob", "number"));
// console.log(lookUpProfile("Bob", "potato"));
// console.log(lookUpProfile("Akira", "address"));

// /* Task 18 */

// function randomWholeNum() {
//   return Math.floor(Math.random() * 10);
// }

/* Task 19 */

// Створіть функцію під назвою randomRange, яка приймає діапазон myMin та myMax і 
// повертає випадкове ціле число, яке більше або дорівнює myMin і менше або дорівнює myMax.

// function randomRange(myMin, myMax) {

//   return Math.floor(Math.random() * (myMax -myMin + 1)) + myMin;
// }

/* Task 20 */

// Використайте parseInt() у функції convertToInteger, щоб вхідний рядок str перетворився 
// на ціле число та повернувся.

// function convertToInteger(str) {
// return parseInt(str);
// }

// convertToInteger("56");

/* Task 21 */

// Використайте parseInt() у функції convertToInteger, щоб двійкове число перетворилось на ціле число і повернулось.

// function convertToInteger(str) {
// return parseInt(str, 2);
// }

// convertToInteger("10011");

/* Task 22 */

// Використайте декілька умовних операторів у функції checkSign, дотримуючись рекомендованого формату,
// використаного у findGreaterOrEqual, щоб перевірити, чи число додатнє,
// від’ємне або дорівнює нулю.Функція повинна повертати positive, negative або zero.

// function checkSign(num) {
// return (num === 0) ? 'zero'
// : (num < 0) ? 'negative'
// : 'positive'
// }

// checkSign(10);

/* Task 23 */

// function countdown(n){
// if (n<1) {
//     return [];
//   } else {
//     const newArray = countdown(n - 1);
//    const unshiftedArray = newArray.unshift(n);
//    console.log(newArray);
//     return newArray;
//    }
// }
  
// console.log(countdown(10));


/* Task 24 */

// Ми визначили функцію під назвою rangeOfNumbers з двома параметрами.Функція повинна повернути масив цілих чисел,
// що починається з числа, представленого параметром startNum і закінчується числом, представленим параметром endNum.
// Початкове число завжди буде меншим або дорівнюватиме кінцевому числу.Ваша функція повинна використовувати рекурсію,
// викликаючи саму себе, та не повинна використовувати цикли.
// Вона також повинна працювати, якщо startNum та endNum однакові.

// function rangeOfNumbers(startNum, endNum) {

//    const numbers = [];

//   if (endNum < startNum) {
//     return [];
//   } else {
//      const numbers = rangeOfNumbers(startNum, endNum-1);
//    numbers.push(endNum);
//     return numbers;
//    }
// };

// console.log(rangeOfNumbers(1, 5));
// console.log(rangeOfNumbers(6, 9));
// console.log(rangeOfNumbers(4, 4));


/* Task 25 */

// const numbers = [1, 2, [45, 67, [12]]];

// function add(arr) {
//   let total = 0; // undefined +1 ; NaN

//   for (const item of arr) {
//     if (Array.isArray(item)) {
//     total+=add(item) //цією умовою розбиваємо загальний масив на підмасиви
//     } else {
//       total += item;
//     }
//     return total;
// }
// }

/* Task 26 */

// const weight = prompt("Enter your weight in kilograms");
// const height = prompt("Enter your height in meters*");

// const bodyMassIndex = weight / Math.pow(height, 2);

// const areYouOverweight = bodyMassIndex >= 25;

// if (areYouOverweight) {
//     console.log(`Yes, your BMI is more than normal by ${bodyMassIndex - 25}`);
//  alert(`Yes, your BMI is more than normal by ${bodyMassIndex - 25}`);
// } else {
//    console.log("No, your weight is normal");
// alert("No, your weight is normal");
 
// }

/* Task 27 */