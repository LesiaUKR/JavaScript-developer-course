// console.log('Push ups repetition 1');
// console.log('Push ups repetition 2');
// console.log('Push ups repetition 3');
// console.log('Push ups repetition 4');
// console.log('Push ups repetition 5');
// console.log('Push ups repetition 6');
// console.log('Push ups repetition 7');
// console.log('Push ups repetition 8');
// console.log('Push ups repetition 9');
// console.log('Push ups repetition 10');

/******** використаємо цикл замість виклику console.log 10 разів ********/
// for(let rep = 1; rep <= 10; rep += 1) {
//    console.log(`Push ups repetition ${rep}`);
//    console.log('Hello!')
// }

// console.log('Out of loop');


// 
// const user123 = ['YouRa', 'Allakhverdov', 1974, 'developer', ['Irina', 'Michael'], false];

// const types = [];

// for(let i = 0; i < user123.length; i++) {
//    console.log(user123[i], typeof user123[i]);

//    // types[i] = typeof user123[i];
//    // types.push(typeof user123[i]);
//    types.unshift(typeof user123[i]);
// }

// console.log(types);

// const birthYears = [1974, 1994, 2000, 2003];
// const ages = [];

// for (let i = 0; i < birthYears.length; i++) {
//    ages.push(2021 - birthYears[i]);
// }

// console.log(ages);



// continue & break

const user123 = ['YouRa', 'Allakhverdov', 1974, 'developer', ['Irina', 'Michael'], false];

console.log('CONTINUE EXAMPLE');

for(let i = 0; i < user123.length; i++) {
   if (typeof user123[i] !== 'string') continue;

   console.log(user123[i], typeof user123[i]);
}

console.log('BREAK EXAMPLE');

for(let i = 0; i < user123.length; i++) {
   if (typeof user123[i] === 'number') break;

   console.log(user123[i], typeof user123[i]);
}
