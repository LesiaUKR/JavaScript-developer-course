// const elements = {
//   list: document.querySelector('.js-list'),
// };

// serviceGetQuestions()
//   .then(
//     data => console.log(data)
//     //  elements.list.insertAdjacentHTML('beforeend', createMarkup(data))
//   )
//   .catch(err => console.log(err));

// function createMarkup(arr) {
//   return arr
//     .map(
//       ({ _id, name, phone, email, comment }) => `
//       <li class="card" data-id="${_id}">
//       <div class="card-content">
//           <h2 class="card-name">Name: ${name}</h2>
//           <div>Phone: <span class="card-phone">${phone}</span></div>
//           <div>Email: <span class="card-email"> ${email}</span></div>
//           <div> <span class="card-comment">${comment}</span></div>
//       </div>
//   </li>
//   `
//     )
//     .join('');
// }

// function serviceGetQuestions() {
//   const options = {
//     method: 'GET',
//   };

//   return fetch('http://127.0.0.1:5500/api/getAll', options).then(resp => {
//     if (!resp.ok) {
//       throw new Error('Fail 😥');
//     }

//     return resp.json();
//   });
// }

// функція, яка сама себе викликає - IIFE
// https://developer.mozilla.org/ru/docs/Glossary/IIFE
// IIFE - коли не потрібно виділяти комірку певного розміру в пам'яті
// тобто коли функція викликається одноразово при запуску і Garbage collector
// підчищає її щойно виконалась
// Якщо потрібно додати спіннер (лоадер), то
// вказуємо його перед fetch, тобто перед запитом на бек

(function () {
  const options = {
    method: 'GET',
  };

  // spinner.start - приклад місця додавання спінеру
  return fetch('http://127.0.0.1:3000/api/getAll', options).then(resp => {
    if (!resp.ok) {
      throw new Error('Fail 😥');
    }

    return resp.json();
  });
})()
  .then(data =>
    elements.list.insertAdjacentHTML('beforeend', createMarkup(data))
  )
  .catch(err => console.log(err));
// .finally(()=>spinner.stop()) - приклад місця зупинки спінеру
