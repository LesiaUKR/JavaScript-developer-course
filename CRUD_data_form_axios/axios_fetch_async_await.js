axios.get(`http://127.0.0.1:3000/api/getAll`).then(data => console.log(data));

fetch(`http://127.0.0.1:3000/api/getAll`).then(data => console.log(data));

async function getAll() {
  const data = await axios.get(`http://127.0.0.1:3000/api/getAll`);
  console.log(data);
}

// axios повертає promise в першому then
// axios робить сам перевірку як відпрацював запит і немає
// потреби прописувати перевірку
// на відміну від fetch, який повертає в першому then
// об'єкт Response, де ще жодного парсу не було
// в axios відразу наряду з headers, status, statusText повертаються
// розпарсені дані з беку
// щоб відразу дістати з axios дані можемо прописати then(data => console.log(data.data));
// при async await для axios не потрібен then

// ********* fetch, axios, async/await ********** \\

// fetch, axios, та async / await — це три концепції або інструменти,
// які часто використовуються в розробці веб - додатків на мові
// JavaScript для виконання асинхронних запитів і отримання даних
// з сервера.Давайте подивимося на кожен з них:

// ********* fetch ********** \\

// fetch - це стандартний API для виконання сучасних
// асинхронних запитів до сервера у веб - браузерах.
// Використання: fetch повертає об'єкт Promise,
// що представляє відповідь на запит.Для отримання даних
// потрібно викликати метод.json() або інші методи для обробки
// вмісту відповіді.

fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

// ********* axios ********** \\

// axios - це стороння бібліотека для виконання HTTP - запитів
// у веб - браузері та на сервері(Node.js).
// Використання: axios повертає Promise і використовує синтаксис
// Promise для обробки відповіді.
// axios побудований на базі fetch
// Потрібно підключити бібліотеку перед використанням
// npm install axios

const axios = require('axios');

axios
  .get('https://api.example.com/data')
  .then(response => console.log(response.data))
  .catch(error => console.error('Error:', error));

// ********* async/await ********** \\

// async / await - це синтаксичний цукор для роботи з Promise - ами в
// JavaScript.async визначає асинхронну функцію, а await заставляє
// функцію чекати, доки Promise виконається або відхилиться.
// Використання: async / await зазвичай використовуються разом з
// fetch або axios для більш зручного та читабельного коду.

// Приклад з fetch:
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}

fetchData();

// Приклад з axios:
// Потрібно підключити бібліотеку перед використанням
// npm install axios

const axios = require('axios');

async function fetchData() {
  try {
    const response = await axios.get('https://api.example.com/data');
    console.log(response.data);
  } catch (error) {
    console.error('Error:', error);
  }
}

fetchData();

// Ці інструменти допомагають зробити асинхронні запити в JavaScript
// більш зручними та ефективними.
// Вибір між fetch та axios залежить від конкретних потреб проекту.
