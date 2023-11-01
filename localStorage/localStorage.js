// const LS_KEY = ['Kate', 'Alice', 'Olga'];
// const user = {
//   city: 'Lviv',
// };

// localStorage.setItem(LS_KEY, JSON.stringify('Hello world'));

// try {
//   const value = localStorage.getItem(LS_KEY);
//   console.log(value);
//   console.log(JSON.parse(value));
// } catch (error) {
//   console.log(error);
// } finally {
//   console.log('after all');
// }

const btnLS = document.querySelector('.js-ls');
const btnSS = document.querySelector('.js-ss');

btnLS.addEventListener('click', handlerLS);
btnSS.addEventListener('click', handlerSS);

function handlerLS() {
  localStorage.setItem('ls-name');
}

function handlerSS() {}
