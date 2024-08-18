
// const user123 = ['YouRa', 'Allakhverdov', 1974, 'developer', ['Irina', 'Michael'], false];

// const types = [];

// for(let i = 0; i < user123.length; i++) {
//    console.log(user123[i], typeof user123[i]);

//    // types[i] = typeof user123[i]; //додаємо в масив types типи даних з масиву user123
//    // types.push(typeof user123[i]); //додаємо в кінець масиву types типи даних з масиву user123
//    types.unshift(typeof user123[i]); //додаємо в початок масиву types типи даних з масиву user123, тобто масив types буде відображати типи даних в зворотньому порядку
// }

// console.log(types);

const birthYears = [1974, 1994, 2000, 2003];
const ages = [];

for (let i = 0; i < birthYears.length; i++) {
   ages.push(2024 - birthYears[i]);
}

console.log(ages);



