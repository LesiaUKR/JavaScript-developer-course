const numbers = [1, 1, 1, 1, 2, 2, 2, 3, 4, 5, 4];

new Set(numbers); // {1, 2, 3, 4, 5}

const set = new Set(numbers);

// додаємо елементи в set
set.add(6); // {1, 2, 3, 4, 5, 6}

const person1 = {
  name: 'Bob',
  age: 40,
};

// додаємо об'єкт в set - перевіряється по посиланню чи такий об'єкт є в set
set.add(person1); // {1, 2, 3, 4, 5, 6, {name: 'Bob', age: 40}}
console.log(set);

// size - кількість елементів в set
console.log(set.size); // 7

// відбираємо унікальні значення з масиву
const filteredNumbers = new Set(numbers); // {1, 2, 3, 4, 5}

// перетворюємо set в масив
[...filteredNumbers]; // [1, 2, 3, 4, 5]

// weakSet - це колекція, яка дозволяє зберігати тільки об'єкти
const filteredValues = new WeakSet();
filteredValues.add(person1);
filteredValues.add(1); // TypeError: Invalid value used in weak set

// видаляємо елемент з set
set.delete(1); // {2, 3, 4, 5, 6, {name: 'Bob', age: 40}}
