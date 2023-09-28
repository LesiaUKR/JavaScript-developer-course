/******  *****/
/*** ***/
/*** Зміна значення властивості об'єкта ***/
const apartment = {
  imgUrl: 'https://via.placeholder.com/640x480',
  descr: 'Spacious apartment in the city center',
  rating: 4,
  price: 2153,
  tags: ['premium', 'promoted', 'top'],
  owner: {
    name: 'Henry',
    phone: '982-126-1588',
    email: 'henry.carter@aptmail.com',
  },
};

apartment.price = 5000;
apartment.rating = 4.7;
apartment.owner.name = 'Henry Sibola';
apartment.tags.push('trusted');

/*** Додавання нової властивості об'єкта ***/
const book = {
  title: 'The Last Kingdom',
  author: 'Bernard Cornwell',
  genres: ['historical prose', 'adventure'],
  public: true,
  rating: 8.38,
};

book.pageCount = 836;
book.originalLanguage = 'en';
book.translations = ['ua', 'ru'];

console.log(book.pageCount); // 836
console.log(book.originalLanguage); // "en"
console.log(book.translations); // ["ua", "ru"]

/*** Синтаксис коротких властивостей (shorthand properties) ***/
const name = 'Repair Droid';
const price = 2500;
const image = 'https://via.placeholder.com/640x480';
const tags = ['on sale', 'trending', 'best buy'];

const product = {
  name,
  price,
  image,
  tags,
};

/*** Синтаксис обчислюваних властивостей (computed properties)  ***/
const emailInputName = 'email';
const passwordInputName = 'password';

const credentials = {
  // Change code below this line
  [emailInputName]: 'henry.carter@aptmail.com',
  [passwordInputName]: 'jqueryismyjam',

  // Change code above this line
};

const propName = 'name';
const user = {
  age: 25,
  // Ім'я цієї властивості буде взято зі значення змінної propName
  [propName]: 'Генрі Сибола',
};

console.log(user.name); // "Генрі Сибола"

/*** На відміну від масиву або рядка, об'єкт - це не ітерабельна сутність,
 * тобто його не можна перебрати циклами for або for...of. Для перебирання
 * об'єктів використовується спеціальний цикл for...in, який перебирає ключі
 * об'єкта object. ***/
