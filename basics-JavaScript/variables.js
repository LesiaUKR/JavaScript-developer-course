// var name = "Jack";
// console.log(name);
// name = 'Jane';
// console.log(name);

// var color;
// console.log(color);
// color = 'red';
// console.log(color);

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