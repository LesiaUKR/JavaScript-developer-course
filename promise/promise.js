/************ Створення Promise ************/

// resolve та reject - це колбек функції

// const promise = new Promise((resolve, reject) => {
//   const random = Math.random();
//   setTimeout(() => {
//     if (random > 0.5) {
//       resolve({ name: 'Alice' });
//     } else {
//       reject('Rejected');
//     }
//   }, 100);
// });

// console.log(promise);

// promise
//   .then(resp => {
//     console.log(resp);
//   })
//   .catch(err => {
//     console.log(err);
//   })
//   .finally();

/************ Task 1 ************/

// console.log('A');
// const promise = new Promise(resolve => {
//   resolve('B');
// });
// promise.then(value => console.log(value));
// console.log('C');

/************ Task 2 ************/

console.log('A');
const promise = new Promise(resolve => {
  resolve('B');
});
promise.then(value => {
  console.log(value);
  console.log('C');
});

/************ Task 3 ************/

// const promise = new Promise((resolve, reject) => {
//   reject('Whoops');
// });

// promise.then(value => console.log(value));
