// map - колекція схожа на об'єкт, але ключами можуть бути будь-які значення(навіть об'єкти)

const map = new Map();
const personBill = { name: 'Bill' };
const personBob = { name: 'Bob' };

const dog = { name: 'Mango' };
const cat = { name: 'Ajax' };

// // set - приймає ключ і значення
// map.set(personBill, dog);
// console.log(map);
// map.set(personBob, cat);
// console.log(map);

// weakMap - колекція, де ключами можуть бути тільки об'єкти та немає метода, щоб отримати всі ключі
// використовується для очищення пам'яті як і weakSet
const map1 = new WeakMap();
console.log(map1); // WeakMap { [items unknown] }
map1.set(personBill, dog);
map1.set(personBob, cat);
console.log(map.size); // undefined
