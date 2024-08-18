const getAge2 = function (birthYear, yearNow) {
   return yearNow - birthYear;
}

const myAge2 = getAge2(1974, 2021);
console.log(myAge2);

// створюємо стрілкову функцію
// можна не використовувати дужки, якщо функція має тільки один параметр
// якщо функція нічого не повертає, можна не використовувати слово return
// можна не використовувати фігурні дужки, якщо функція має тільки один вираз

const getAge3 = (birthYear, yearNow) => yearNow - birthYear;

const myAge3 = getAge3(1974, 2021);
console.log(myAge3);

// використовуємо фігурні дужки, якщо функція має більше одного виразу
// стрілкова функція не має доступу до this
const canBuyAlcohol = (birthYear, yearNow) => {
   const age = yearNow - birthYear;
   const isPersonOlderThan21 = age >= 21 ? true : false;
   return isPersonOlderThan21;
}

console.log(canBuyAlcohol(2001, 2021));
