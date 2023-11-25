// ******************** CRUD ******************** \\

// Create - POST - 201 - маж
// Read   - GET - 200
// Update - PUT PATCH - 200
// DELETE - DELETE - 200
//  throw new Error і try/catch несумісні, бо throw відразу перенаправляє в catch автоматом

// headers - несе службову інформацію для бекенду: токен для авторизації,
// Content-type: де вказуємо тип даних, також в headers підставляється інформація
// самим браузером, як то Origin, User-Agent - інфо про девайс і http адреса з якої був запит,
// найчастіше заповнюється браузером самостійно, передача Bearer token для авторизації

// ******************** POST - CREATE ******************** \\

// const post = {
//   title: 'Hello world',
//   body: 'I love JS',
//   userId: 11,
// };

// const options = {
//   method: 'POST',
//   body: JSON.stringify(post),
//   headers: {
//     'Content-type': 'application/json',
//   },
// };

// fetch('https://jsonplaceholder.typicode.com/posts', options)
//   .then(resp => {
//     if (!resp.ok) {
//       throw new Error(resp.statusText);
//     }

//     return resp.json();
//   })
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// ******************** GET - READ ******************** \\

// fetch('https://jsonplaceholder.typicode.com/posts/1')
//   .then(resp => {
//     if (!resp.ok) {
//       throw new Error(resp.statusText);
//     }

//     return resp.json();
//   })
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// ******************** PATCH - UPDATE ******************** \\

// const oldPost = {
//   title: 'Hello world',
//   body: 'I love JS',
//   userId: 11,
//   id: 1,
// };

//можна оновити одну властивість чи всі, при цьому всі інші залишаться без змін
// тобто оновлює частково
// якщо на бекенді немає для елементу строгої схеми, то методом PATCH
// можна додавати нові властивості
// якщо написати PATCH і PUT в нижньому регістрі, видасть помилку CORS
// інші методи не чутливі до регістру

// const newPost = {
//   title: 'Hello from GOIT',
// };

// приклад результату на бекенді
// const result = {
//   title: 'Hello from GOIT',
//   body: 'I love JS',
//   userId: 11,
//   id: 1,
// };

// const newPost = {
//   title: 'Hello from GOIT',
//   body: 'Test 20:16',
//   authorName: 'TEST USER',
// };

// const options = {
//   method: 'PATCH',
//   body: JSON.stringify(newPost),
//   headers: {
//     'Content-type': 'application/json',
//   },
// };

// fetch('https://jsonplaceholder.typicode.com/posts/1', options)
//   .then(resp => {
//     if (!resp.ok) {
//       throw new Error(resp.statusText);
//     }

//     return resp.json();
//   })
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// ******************** PUT - UPDATE ******************** \\

// const oldPost = {
//   title: "Hello world",
//   body: "I love JS",
//   userId: 11,
//   id: 1,
// };

// якщо передамо лише title для оновлення, то інші властивості видаляться і
// лишиться тільки title
// метод put не може видалити лише id, воно зарезервоване

// const newPost = {
//   title: "Hello from GOIT",
// };

// приклад результату на бекенді
// const result = {
//   title: "Hello from GOIT",
//   id: 1,
// };

// методом PUT не рекомендується створювати нові елементів на бекенді, оскільки
// цей метод може перезаписати дані в об'єкті із вже існуючим id
// 1-101

// 101

// const result = {
//     title: "Hello from GOIT",
//     id: 101,
//   };

// const newPost = {
//     title: "Hello from GOIT",
//   };

//   const options = {
//       method: 'PUT',
//       body: JSON.stringify(newPost),
//       headers: {
//           "Content-type": "application/json"
//       }
//   }

//   fetch("https://jsonplaceholder.typicode.com/posts/1", options)
//   .then((resp) => {
//       if (!resp.ok) {
//         throw new Error(resp.statusText);
//       }

//       return resp.json();
//     })
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));

// ******************** DELETE ******************** \\

// поверне пустий об'єкт після видалення
// якщо потрібно видалити декілька записів, наприклад, очищення корзини товарів,
// то прокидаємо список id для видалення в body
// також в боді можна прокинути id для видалення тоді,
// коли в параметри url backendне просить вказувати id об'єкта для видалення

// const options = {
//     method: "DELETE",
//     body: {
//         id: 1
//     }
// }

// fetch("https://jsonplaceholder.typicode.com/posts/1", options)

// ******************** Практика ******************** \\

// Завдання - 1.
// Потрібно створи форму "Зв'яжіться зі мною" в якій користувач має можливість
// залишити заявку для того, щоб з ним зв'язались та відповіли на його питання
// Форма має складатись з таких елементів:
// 1 - Поле для імені.
// 2 - Поле для номера телефону.
// 3 - Поле для адреси електронної пошти.
// 4 - Поле для питання.

// Форма має відправляти дані на бекенд та зберігати їх в базі даних.

// Завдання - 2.
// Реалізуй сторінку для власника бізнесу - після того, як потрапляємо на сторінку
// потрібно отримати з бази даних всі заявки, які були залишені користувачами

const elements = {
  form: document.querySelector('.js-question'),
};

elements.form.addEventListener('submit', handlerAddQuestion);

function handlerAddQuestion(evt) {
  evt.preventDefault();

  const formData = new FormData(evt.currentTarget); //

  // щоб зформувати об'єкт форм дати, необхідно використати метод forEach,
  // який відрізняється від перебираючого метода масива forEach.
  // він сформує об'єкт форм дати, бо дає доступ до ключа і значення,
  // де ключ це name атрибут кожного елемента форми
  const data = {};
  formData.forEach((val, key) => {
    data[key] = val;
    //data[key] - тут використовуємо саме квадратні дужки, а не крапочку
    // бо з допомогою крапочки ми створимо новий ключ key,
    // який буде перезаписуватись незалежно від поля форми
    //   з нотацією з квадратними дужками ми в ключ підставляємо змінну key
    //яка буде приймати значення атрибута name
    //   так перебираючи всі значення створиться об'єкт зі всіма полями форми,
    //   де у змінній val буде передано значення поля
  });

  console.log(data);
}

// напишемо функцію для відправки даних із форми на бекенд

function serviceSendFormData(formData) {
  const options = {
    method: 'POST',
    body: JSON.stringify(request),
    headers: {
      'Content-type': 'application/json',
    },
  };

  return fetch('http://127.0.0.1:3000/api/question', options).then(resp => {
    if (!resp.ok) {
      throw new Error('Fail 😥');
    }

    return resp.json();
  });
}
