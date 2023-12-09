console.log('A');
const promise = new Promise(resolve => {
  resolve('B');
});
promise.then(value => {
  console.log(value);
  console.log('C');
});