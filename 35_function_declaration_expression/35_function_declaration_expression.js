// можемо викликати функцію до її оголошення, якщо вона оголошена через function declaration
const myAge1 = getAge1(1974, 2021);
console.log(myAge1);

// function declaration
function getAge1(birthYear, yearNow) {
   // const age = yearNow - birthYear;
   // return age;
   return yearNow - birthYear;
}

// function expression
// const myAge1 = getAge1(1974, 2021);
// console.log(myAge1);

// function expression
// тут видасть помилку ReferenceError, бо функцію function expression можна викликати тільки після її оголошення
const myAge2 = getAge2(1974, 2021);
console.log(myAge2);

// function expression
const getAge2 = function (birthYear, yearNow) {
   return yearNow - birthYear;
}

// const myAge2 = getAge2(1974, 2021);
// console.log(myAge2);