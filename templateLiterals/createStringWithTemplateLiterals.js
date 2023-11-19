/******** Task 1 ********/
// Використайте синтаксис шаблонних літералів зі зворотними лапками,
// щоб створити масив із рядками елементів списку(li).Текстом кожного
// елемента масиву повинен бути один з елементів, що містяться в масиві
// у властивості failure об’єкта result та мати атрибут class зі значенням
// text - warning.Функція makeList повинна повертати масив із рядками
// елементів списку.

// Використайте метод ітератора(будь - який цикл), щоб отримати бажаний
// вивід(наведений нижче).

// [
//   '<li class="text-warning">no-var</li>',
//   '<li class="text-warning">var-on-top</li>',
//   '<li class="text-warning">linebreak</li>'
// ]

const result = {
  success: ['max-length', 'no-amd', 'prefer-arrow-functions'],
  failure: ['no-var', 'var-on-top', 'linebreak'],
  skipped: ['no-extra-semi', 'no-dup-keys'],
};

/**** Solving variant 1 ****/

// function makeList(arr) {
//   // Змініть код лише під цим рядком
//   const failureItems = [];
//   for (let i = 0; i < arr.length; i++) {
//     failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
//   }
//   // Змініть код лише над цим рядком

//   return failureItems;
// }

/**** Solving variant 2 ****/

function makeList(arr) {
  // Змініть код лише під цим рядком
  const failureItems = arr.map(item => `<li class="text-warning">${item}</li>`);
  // Змініть код лише над цим рядком

  return failureItems;
}

const failuresList = makeList(result.failure);
console.log(failuresList);
