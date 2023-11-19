// ******************************Деструктуризація об'єкта***************************************\\
// const user = {
//   name: 'Test name',
//   skills: {
//     html: true,
//     css: false,
//     js: true,
//   },
// };

// // const name = user.name;
// // const skills = user.skills;

// const { skills, name } = user;

// console.log(name);
// console.log(skills);

// console.log(skills);
// console.log(name);

// ************************Глибока деструктуризація об'єкта***************************************\\

// const user = {
//   name: 'Test name',
//   skills: {
//     html: true,
//     css: false,
//     js: true,
//   },
// };

// const {
//   skills,
//   skills: { html, js },
// } = user;
// // // const {html, js} = user.skills

// // console.log('html', html);
// // console.log('js', js);
// // console.log(skills);

// *********************  Деструктуризація об'єкта в параметрах функції  ******************************\\

// const user = {
//     name: 'Test name',
//     skills: {
//         html: true,
//         css: false,
//         js: true
//     }
// }

//*********  Без деструктуризації  *********//
// function getUserName(obj) {
//   console.log(
//     `Hello my name is ${obj.name}, I know html - ${obj.skills.html}, css - ${obj.skills.css} and js -${obj.skills.js}`
//   );
// }
// коли хочете зробити деструктуризацію в оголошенні параметрів - завжди робіть значення по дефолту, щоб не впасти в помилку undefined
// getUserName(user);

//*********  З деструктуризацією  *********//

// const user = {
//     name: 'Test name',
//     skills: {
//         html: true,
//         css: false,
//         js: true
//     }
// }
// function getUserName({name, skills : {html, css, js} = {}} = {} ) {
//     // console.log(name);
//     // console.log(html);
//     // console.log(css);
//     // console.log(js);
//     // const js = 'test'
//     console.log(`Hello my name is ${name}, I know html - ${html}, css - ${css} and js -${js}`);
// }

// getUserName(user)

// ({ name, skills: { html, css, js } = {} } = {}) - перші {} це дефолтне значення для всього об'єкта, наступне {} для вкладеного значення skills

// *************************Деструктуризація об'єкта в циклі***********************************\\

// const users = [{ name: 'Kate' }, { name: 'Alex' }, { name: 'Mark' }];

// ********  Без деструктуризації  *******
// const names = [];

// for (const user of users) {
//     console.log(user);
//     names.push(user.name)
// }

// console.log(names);

// ********  З деструктуризацією  *********//

// const users = [{ name: 'Kate' }, { name: 'Alex' }, { name: 'Mark' }];
// const names = [];

// for (const { name } of users) {
//   names.push(name);
// }

// console.log(names);

// ********  З деструктуризацією  *********//

// Надійшов триденний прогноз максимальних температур і ми рахуємо середню температуру за три дні(meanTemperature).
// Заміни оголошення змінних yesterday, today і tomorrow однією операцією деструктуризації властивостей об'єкта highTemperatures.

// ********  Task 1  *********//

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line
// const { yesterday, today, tomorrow } = highTemperatures;
// // const yesterday = highTemperatures.yesterday;
// // const today = highTemperatures.today;
// // const tomorrow = highTemperatures.tomorrow;

// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;

// ********  Task 2  *********//

// ***  Variant 1  ***//

// Виконай рефакторинг циклу for...of таким чином, щоб в ньому використовувалася деструктуризація об'єкта.

// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (const color of colors) {
//   const { hex, rgb } = colors;
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }

// console.log(hexColors);
// console.log(rgbColors);

// ***  Variant 2  ***//

// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (const { hex, rgb } of colors) {
//   // const { hex, rgb } = color;

//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }

// ********  Task 3  *********//

// Ми отримали прогноз погоди на два дні, з мінімальними і максимальними температурами, а також необов'язковими іконками.
// Заміни оголошення всіх змінних однією операцією деструктуризації властивостей об'єкта forecast.Задай значення за
// замовчуванням для іконок,
// змінних todayIcon і tomorrowIcon - рядок "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".

const forecast = {
  today: {
    low: 28,
    high: 32,
    icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
  },
  tomorrow: {
    low: 27,
    high: 31,
  },
};
// Change code below this line

// const {
//   today: {
//     low: lowToday,
//     high: highToday,
//     icon: todayIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
//   },
//   tomorrow: {
//     low: lowTomorrow,
//     high: highTomorrow,
//     icon: tomorrowIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
//   },
// } = forecast;
// const highToday = forecast.today.high;
// const lowToday = forecast.today.low;
// const todayIcon = forecast.today.icon;

// const highTomorrow = forecast.tomorrow.high;
// const lowTomorrow = forecast.tomorrow.low;
// const tomorrowIcon = forecast.tomorrow.icon;

// ********  Task 4  *********//

// Функція calculateMeanTemperature(forecast) приймає один параметр
// forecast - об'єкт температур на два дні наступного формату.

// {
//   today: { low: 10, high: 20 },
//   tomorrow: { low: 20, high: 30 }
// }
// Заміни оголошення змінних todayLow, todayHigh, tomorrowLow і
// tomorrowHigh однією операцією деструктуризації властивостей об'єкта forecast.

function calculateMeanTemperature(forecast) {
  // const todayLow = forecast.today.low;
  // const todayHigh = forecast.today.high;
  // const tomorrowLow = forecast.tomorrow.low;
  // const tomorrowHigh = forecast.tomorrow.high;
  const {
    today: { low: todayLow, high: todayHigh },
    tomorrow: { low: tomorrowLow, high: tomorrowHigh },
  } = forecast;
  // Change code above this line
  return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
}

// ********  Task 5  *********//

// У змінній scores зберігається масив результатів тестування.Використовуючи розподіл
// і методи Math.max() і Math.min(),
// доповни код таким чином, щоб у змінній bestScore був найвищий бал, а у worstScore - найнижчий.

// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Change code below this line
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);

// ********  Task 6  *********//

// У змінних firstGroupScores, secondGroupScores і thirdGroupScores зберігаються результати
// тестування окремих груп.Використовуючи розподіл, доповни код таким чином, щоб:

// У змінній allScores зберігався масив всіх результатів від першої до третьої групи.
// У змінній bestScore був найвищий загальний бал.
// У змінній worstScore був найнижчий загальний бал.
// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Change code below this line
// const allScores = [
//   ...firstGroupScores,
//   ...secondGroupScores,
//   ...thirdGroupScores,
// ];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

// ********  Task 7  *********//

// В конструкторі можна створювати нові тести, для яких є налаштування за замовчуванням,
// які зберігаються у змінній defaultSettings.Під час створення тесту, усі або частину
// налаштувань можна перевизначити, вони зберігаються у змінній overrideSettings.
// Для того щоб отримати фінальні налаштування тесту, необхідно взяти налаштування за замовчуванням
// і поверх них застосувати перевизначені налаштування.Доповни код таким чином, щоб у змінній finalSettings
// утворився об'єкт фінальних налаштувань тесту.

// const defaultSettings = {
//   theme: 'light',
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// // Change code below this line
// const finalSettings = { ...defaultSettings, ...overrideSettings };

// ********  Task 8  *********//

// Напиши функцію makeTask(data) яка приймає один параметр data -
// об'єкт з наступними властивостями.

// text - текст завдання.
// category - категорія завдання.
// priority - пріоритет завдання.
// Функція повинна створити і повернути новий об'єкт завдання, не змінюючи напряму параметр data.
// У новому об'єкті повинна бути властивість completed, значення якої зберігається в однойменній локальній змінній.

// В параметрі data гарантовано буде тільки властивість text, а інші дві, category
// і priority, можуть бути відсутніми.Тоді, в новому об'єкті завдання, у властивостях
// category і priority повинні бути значення за замовчуванням,
// що зберігаються в однойменних локальних змінних.
// function makeTask(data) {
//   const completed = false;
//   const category = 'General';
//   const priority = 'Normal';
//   // Change code below this line
//   return { completed, category, priority, ...data };
//   // Change code above this line
// }

// makeTask({});

// ********  Task 9  *********//

// Використовуючи операцію rest, доповни код функції add() таким чином, щоб вона приймала будь - яку
// кількість аргументів, рахувала і повертала їх суму.
// function add(...args) {
//   // Change code above this line
//   console.log(args);
//   let total = 0;
//   for (const arg of args) {
//     total += arg;
//   }
//   return total;
// }
// add(15, 27);

// ********  Task 10  *********//

// Функція addOverNum() рахує суму всіх аргументів.Зміни параметри і тіло функції addOverNum()
// таким чином, щоб вона рахувала суму тільки тих аргументів, які більші за задане число.
// Це число повинно бути першим параметром функції.

// Change code below this line
// function addOverNum(firstArg, ...args) {
//   let total = 0;

//   for (const arg of args) {
//     if (arg > firstArg) {
//       total += arg;
//     }
//   }

//   return total;
//   // Change code above this line
// }

// ********  Task 11  *********//

// Функція findMatches() приймає довільну кількість аргументів.Першим аргументом завжди буде масив чисел,
// а решта аргументів будуть просто числами.
// Доповни код функції таким чином, щоб вона повертала новий масив matches, в якому будуть тільки ті аргументи,
// починаючи з другого, які є в масиві першого аргументу.
// Наприклад, findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) повинна повернути масив[1, 2],
// тому що тільки вони є в масиві першого аргументу.
// Change code below this line
// function findMatches(array, ...args) {
//   const matches = []; // Don't change this line
//   for (const element of array) {
//     //      console.log('array: ', array);
//     //   console.log('args: ', args);

//     if (args.includes(element)) {
//       matches.push(element);

//       console.log(`${element} есть везде!`);
//     }
//   }
//   // Change code above this line
//   return matches;
// }

// findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7);
// findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2);
// findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41);
// findMatches([63, 11, 8, 29], 4, 7, 16);

// ********  Task 12  *********//

// Додай об'єкту bookShelf ще два методи, які поки що будуть повертати просто
// рядки за аналогією з getBooks() і addBook(bookName).
// Метод removeBook(bookName) буде видаляти книгу за назвою.
// Повертає рядок "Deleting book <назва книги>", де < назва книги > - це значення параметра bookName.
// Метод updateBook(oldName, newName) буде оновлювати назву книги на нову.
// Повертає рядок "Updating book <стара назва> to <нова назва>",
// де < стара назва > і < нова назва > - це значення параметрів oldName і newName відповідно.

// const bookShelf = {
//   // Change code below this line
//   books: ['The last kingdom', 'The guardian of dreams'],
//   getBooks() {
//     return 'Returning all books';
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },

//   removeBook(bookName) {
//     return `Deleting book ${bookName}`;
//   },
//   updateBook(oldName, newName) {
//     return `Updating book ${oldName} to ${newName}`;
//   },
//   // Change code above this line
// };

// ********  Task 13  *********//

// Доповни метод updateBook(oldName, newName) таким чином, щоб він змінював назву книги з oldName
// на newName у властивості books.Використовуй indexOf() для того, щоб знайти потрібний елемент масиву,
// і splice() для того, щоб замінити цей елемент.

// const bookShelf = {
//   books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
//   updateBook(oldName, newName) {
//     // Change code below this line

//     const oldNameIndex = this.books.indexOf(oldName);
//     this.books.splice(oldNameIndex, 1, newName);

//     // Change code above this line
//   },
// };

// ********  Task 14  *********//

// Додай об'єкту atTheOldToad метод getPotions(), який просто повертає значення властивості potions.
// const atTheOldToad = {
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   // Change code below this line
//   getPotions() {
//     return atTheOldToad.potions;
//   },
//   // Change code above this line
// };

// ********  Task 15 *********//

// Доповни метод addPotion(potionName) таким чином, щоб він додавав зілля potionName
// в кінець масиву зілля у властивості potions.

// const atTheOldToad = {
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   addPotion(potionName) {
//     // Change code below this line

//     this.potions.push(potionName);

//     // Change code above this line
//   },
// };

// ********  Task 16 *********//

// Доповни метод removePotion(potionName) таким чином,
// щоб він видаляв зілля potionName з масиву зілля у властивості potions.
// const atTheOldToad = {
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   removePotion(potionName) {
//     // Change code below this line
//     const potionIndex = this.potions.indexOf(potionName);
//     this.potions.splice(potionIndex, 1);
//     // Change code above this line
//   },
// };

// ********  Task 17 *********//

// Доповни метод updatePotionName(oldName, newName) таким чином,
// щоб він оновлював назву зілля з oldName на newName в масиві зілля у властивості potions.

// const atTheOldToad = {
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   updatePotionName(oldName, newName) {
//     // Change code below this line

//     const potionIndex = this.potions.indexOf(oldName);
//     this.potions.splice(potionIndex, 1, newName);
//     // Change code above this line
//   },
// };

// ********  Task 18 *********//

// Замовниця хоче, щоб кожне зілля було представлено не тільки ім'ям, але й ціною,
// а в майбутньому, можливо, й іншими характеристиками.
// Тому зараз у властивості potions буде зберігатися масив об'єктів з наступними властивостями.

// {
//   name: "Dragon breath",
//   price: 700
// }
// Виконай рефакторинг методів об'єкта atTheOldToad таким чином, щоб вони працювали не з масивом рядків,
// а з масивом об'єктів.

const atTheOldToad = {
  potions: [
    { name: 'Speed potion', price: 460 },
    { name: 'Dragon breath', price: 780 },
    { name: 'Stone skin', price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    for (let i = 0; i < this.potions.length; i += 1) {
      if (newPotion.name === this.potions[i].name) {
        return `Error! Potion ${newPotion.name} is already in your inventory!`;
      }
    }
    this.potions.push(newPotion);
  },
  removePotion(potionName) {
    for (let i = 0; i < this.potions.length; i += 1) {
      if (potionName === this.potions[i].name) {
        this.potions.splice(i, 1);
        return;
      }
    }
    return `Potion ${potionName} is not in inventory!`;
  },
  updatePotionName(oldName, newName) {
    for (let i = 0; i < this.potions.length; i += 1) {
      if (oldName === this.potions[i].name) {
        this.potions[i].name = newName;
        return;
      }
    }

    return `Potion ${oldName} is not in inventory!`;

    // Change code above this line
  },
};

// const atTheOldToad = {
//   potions: [
//     { name: 'Speed potion', price: 460 },
//     { name: 'Dragon breath', price: 780 },
//     { name: 'Stone skin', price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     for (i = 0; i < this.potions.length; i += 1) {
//       if ((this.potions.name = newPotion.name)) {
//         return `Error! Potion ${newPotion} is already in your inventory!`;
//       }
//     }
//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     for (i = 0; i < this.potions.length; i += 1) {
//       if (potionName === this.potions[i].name) {
//         console.log(potionName);
//         console.log(this.potions[i].name);
//         console.log(i);
//         this.potions.splice(i, 1);
//       }
//     }
//     return `Potion ${potionName} is not in inventory!`;
//   },
//   updatePotionName(oldName, newName) {
//     for (i = 0; i < this.potions.length; i += 1) {
//       const potionIndex = this.potions[i].indexOf(oldName);
//       if (potionIndex === -1) {
//         return `Potion ${oldName} is not in inventory!`;
//       }
//     }

//     this.potions.splice(potionIndex, 1, newName);
//   },
//   // Change code above this line
// };

// // atTheOldToad.addPotion({ name: 'Invisibility', price: 620 });
// // console.log(atTheOldToad);
// // atTheOldToad.removePotion('Dragon breath');
// // console.log(atTheOldToad);
// atTheOldToad.updatePotionName('Dragon breath', 'Polymorth');
// console.log(atTheOldToad);

// ********  Task 19 *********//

// Деструктуроване присвоєння для присвоєння змінних з об’єктів
// Деструктуризація дозволяє присвоїти нову назву змінної при вилученні значень.
// Для цього потрібно поставити нову назву після двокрапки, коли присвоюєте значення.

// Використовуючи той самий об’єкт, що і в попередньому прикладі:

// const user = { name: 'John Doe', age: 34 };
// Ось так ви можете надати нові назви змінних у присвоєнні:

// const { name: userName, age: userAge } = user;
// Ви можете прочитати це як «отримати значення user.name та присвоїти його до нової
// змінної під назвою userName» і т.д.Значенням userName буде рядок John Doe,
// а значенням userAge буде число 34.

// Замініть два присвоєння на еквівалентні деструктуровані присвоєння. Вони досі
// повинні присвоювати змінним highToday та highTomorrow значення today та
// tomorrow з об’єкта HIGH_TEMPERATURES.

// const HIGH_TEMPERATURES = {
//   yesterday: 75,
//   today: 77,
//   tomorrow: 80,
// };

// const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;

// ********  Task 20 *********//

// Деструктуроване присвоєння для присвоєння змінних з вкладених об’єктів
// Ви можете використовувати принципи з попередніх завдань, щоб деструктурувати значення з вкладених об’єктів.

// Використовуючи об’єкт, схожий до попередніх прикладів:

const user = {
  johnDoe: {
    age: 34,
    email: 'johnDoe@freeCodeCamp.com',
  },
};
// Ось так ми отримуємо значення властивостей об’єкта та присвоюємо їх до змінних з однаковою назвою:

const {
  johnDoe: { age, email },
} = user;
// А ось так ми можемо присвоїти значення властивостей об’єкта до змінних з іншою назвою:

const {
  johnDoe: { age: userAge, email: userEmail },
} = user;

// Замініть два присвоєння на еквівалентні деструктуровані присвоєння.
// Вони досі повинні присвоювати змінним lowToday та highToday значення
// today.low та today.high з об’єкта LOCAL_FORECAST.

const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 },
};

// const lowToday = LOCAL_FORECAST.today.low;
// const highToday = LOCAL_FORECAST.today.high;

// Рішення

const {
  today: { low: lowToday },
} = LOCAL_FORECAST;
const {
  today: { high: highToday },
} = LOCAL_FORECAST;

// ********  Task 21 *********//

function removeFirstTwo(list) {
  const [a, b, ...arr] = list;
  console.log('first two', [a, b]);
  console.log('sourceWithoutFirstTwo', arr);
  return arr;
}

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);
console.log(sourceWithoutFirstTwo);
