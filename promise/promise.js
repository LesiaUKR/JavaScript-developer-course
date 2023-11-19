/************ Створення Promise ************/

// resolve та reject - це колбек функції

const promise = new Promise((resolve, reject) => {
  const random = Math.random();
  setTimeout(() => {
    if (random > 0.5) {
      resolve({ name: 'Alice' });
    } else {
      reject('Rejected');
    }
  }, 100);
});

console.log(promise);

promise
  .then(resp => {
    console.log(resp);
  })
  .catch(err => {
    console.log(err);
  })
  .finally();
