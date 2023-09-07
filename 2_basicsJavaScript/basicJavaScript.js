/********* Оголошення змінних *********/

//var value //поведінка хоістингу - почитати - всплиття
// var name = "Jack";
// console.log(name);
// name = 'Jane';
// console.log(name);

// var color;
// console.log(color);
// color = 'red';
// console.log(color);

// let value //можемо не присвоювати значення і буде в консолі undefined
// console.log(value);

// value = 10;
// console.log(value);

// value = 'Hello world';
// console.log(value);


/*********************

JavaScript variables names can include:
letters, numbers, $, _
JavaScript variables names can't include:
start with number

*********************/
// myMainColor = 'green'; //camel case
// my_main_color //snake case
// my-main-color //kebab case
// MyMainColor //Pascal case

const name = 'Jack';
console.log(name);
// name = 'Jane';

const color = 'red';
console.log(color);

// object - can change internal properties even for variable announced with const

const user = {
   name: 'Jack',
   gender: 'male',
   age: 24
}

console.log(user);

user.name = 'Jane' //changed internal properties
console.log(user);

// can change arrays even announced with const
const colors = ['red', 'orange', 'green'];
console.log(colors);

colors.push('blue');
console.log(colors);

//will be mistake because it is not allowed to announce for const new array
// colors = ['red', 'orange', 'green'];

/********* Always falsy *********/ 
// 0
console.log(Boolean(0));
// ""
console.log(Boolean(""));
// NaN
console.log(Boolean(NaN));
// null
console.log(Boolean(null));
// undefined
console.log(Boolean(undefined));
// false
console.log(Boolean(false));

/********* Communication with user *********/ 

// console.log('Привіт вчи JS');

// alert('Привіт вчи JS')

// const message = prompt("Введіть і'мя") //завжди повертає рядок навіть якщо ввели число
// console.log(message);
// console.log(typeof message);
// const result = confirm('Будеш вчити JS ?');
// console.log(result);


