// *********  Fetch  ********* \\

// https://www.postman.com/downloads/
// https://rickandmortyapi.com/documentation

// до ES6 модулів використовувались XMLHttpRequest
// https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest
// елемент fetch побудований на промісах, проміси це мікротаски і значить фетч піде до eventLoop в розділ до мікротасок

//на сьогоднішній день використовуються fetch запити
// fetch повертає проміс
// щоб його опрацювати і отримати в коді відповідь як показано в devTools-Network-клікнути по запиту - вкладка Preview
// дана відповідь вже перетворена з формату json
// потрібно використовувати ланцюжок then/catch/finally
// в першому then ми не побачимо інформацію так як ми бачимо в Preview
// в першому then приходить об'єкт  Response, в якому видно як відпрацював запит:
// ok: true - статус запиту true\false
// redirected: false - чи відбувався редірект на стороні backend, тобто чи переадресували нас з одного ендпоінта на інший
// statusText: "" - публічні API в більшості не віддають таке повідомлення
// type:'cors' - чи використовується cors policy
// так як спілкування відбувається за допомогою архітектури REST, яка має на меті обмін даними в форматі json,
// то щоб розпарсити відповідь і отримати у вигляді як в Preview, потрібно використати parse метод,
// але не класичний JSON.parse, а використовуючи метод json на об'єкті Response
// прописуємо його в першому then .then(resp=> resp.json())
// даний метод json відпрацьовує лише один раз
// тому код наступного вигляду поверне помилку на рядку return resp.json():
// .then(resp => {console.log(resp.json()); return resp.json()})
// метод resp.json() - поверне нам проміс

// fetch('https://rickandmortyapi.com/api/charact')
//   .then(resp => {
//     console.log(resp);
//     if (!resp.ok) {
//       throw new Error('custom error log 😒');
//     }
//     return resp.json();
//   })
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// ********* Обробка помилок та парсинг відповіді ********* \\

// іноді перед тим як зробити парсинг потрібно "підказати" браузеру як зрозуміти помилку
// це скоріше недопрацювання бекенду, бо іноді там невірно роблять конфігурації
// браузер погано працює з помилками, які пов'язані з 400м, 401(не авторизований), 403, 404м(не знайдено) статусами
// фактично цн
// коли приходить один із таких статусів, можна примусово перевести проміс в статус reject за допомогою
// перевірки статусу ok:false\true із об'єкта Response
// для цього перед результатом парсу вказуємо умову if(!resp.ok){throw new Error}
// яка відбирає falsy значення і за допомогою команди throw перериваємо роботу then і генеруємо самостійно помилку new Error
// throw автоматично перенаправляє в блок catch, де консолимо error
// в new Error, якщо описано на беку передаємо опис помилки через resp.statusText
// або пишемо самі повідомлення з описом помилки

// ********* CORS ********* \\
// в Headers, службова інформація, яку ми передаємо із фронтенда на бекенд (можемо подивитись поруч з Preview)
// є властивість Origin, яку браузер заповнює сам, бере її з нашого url
// fetch('https://common-api.rozetka.com.ua/v2/fat-menu/full?front-type=xl&country=UA&lang=ua&r=0.7297302207424572')
// на сайті розетки ця властивість Origin містить https://rozetka.com.ua
// браузер таким чином перевіряє чи є в умовному білому списку бекенду url з якого робиться запит і
// чи можна віддавати відповідь(дані) тому ресурсу, таким чином відбувається
// при цьому використання запиту в Postman https://common-api.rozetka.com.ua/v2/fat-menu/full?front-type=xl&country=UA&lang=ua&r=0.7297302207424572'
// віддасть дані з бекенду, бо Postman це не браузер і в ньому немає тої нативної поведінки додавати властивість Origin
// тому бекенд не розуміє, що можна тому ресурсу як Postman віддати дані

// *************** ПРАКТИКА *************** \\

// Потрібно створити функціонал для отримання прогнозу погоди в місті.
// Використай публічне API https://www.weatherapi.com/docs/
// Використовуй ендпоінт Forecast для того, щоб отримати прогноз погоди на декілька днів.

// Створи форму в яку користувач:
// 1 вводить назву міста.
// 2 обирає на яку кількість днів він хоче отримати прогноз погоди (3, 5 та 7 днів).
// (Іноді параметр не працює в такому випадку можна зробити пошук на 1, 2 та 3 дні)
// Приклад форми https://prnt.sc/kFmLOj6gBdv-

// Після сабміту форми відмалюй картки з інформацією отриманою з бекенду.
// Картка має містити відомості про:
// 1 Зображення з погодою (icon)
// 2 Текст з погодою (text)
// 3 Дату (date)
// 4 Середню температуру в Цельсія (avgtemp_c)
// Приклад картки https://prnt.sc/h_p-A6Hty-i-

function serviceWeather(city = '', days = '0') {
  const BASE_URL = 'http://api.weatherapi.com/v1';
  const END_POINT = '/forecast.json';
  const API_KEY = '6410346f89264d6e919165208231505';

  // доволі незручний спосіб будувати url
  // fetch(`${BASE_URL}${END_POINT}?key=${API_KEY}$q=Paris&days=2&lang=uk`);

  // краще стоврити новий екземпляр класу
  const params = new URLSearchParams({
    key: API_KEY,
    q: city,
    days: days,
    lang: 'uk',
  });

  // якщо законсолити об'єкт params, то нічого корисного не побачимо, окрім кількості параметрів size
  console.log(params);
  // щоб проконтролювати параметри, потрібно на прототипі об'єкту params
  // викликати метод toString, якщо потрібно подивитись, що там знаходиться
  console.log(params.toString());

  // коли робимо функції загального сервісу, тобто функції для запиту на бекенд, загальноприйнято перший then
  // прописувати прямо в середині функції запиту, але лише єдиний перший then
  // для того, шоб перевірити, що повертає функція - помилку або розпарсені дані
  // перед fetch обов'язково ставимо return інакше отримаємо помилку fetch.js:133 Uncaught TypeError: Cannot read properties of undefined (reading 'then')

  return fetch(`${BASE_URL}${END_POINT}?${params}`).then(resp => {
    if (!resp.ok) {
      // подивимось чи повертається statusText помилки з бекенду
      console.log(resp);
      throw new Error(resp.statusText);
    }
    // тут повертається проміс
    return resp.json();
  });
}
// на результаті виклику функції використовуємо then для обробки розпарсеної відповіді
// або catch для обробки помилки
// цю функцію викличемо під час сабміту форми
// serviceWeather()
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

const elements = {
  form: document.querySelector('.js-search-form'),
  list: document.querySelector('.js-list'),
};

console.log(elements);

elements.form.addEventListener('submit', handlerForecast);

function handlerForecast(evt) {
  //у форми є нативна поведінка під час сабміту відправка даних на бекенд
  // оскільки на сьогоднішній день використовується технологія AJAX, яка
  // під капотом має технологію відправки даних Клієнт-Сервер без перезавантаження сторінки
  // щоб позбутися нативної поведінки форми використаємо  evt.preventDefault();
  evt.preventDefault();

  // із властивості elements об'єкту форми за name із input та select дістаємо значення цих полів
  console.dir(evt.currentTarget.elements);
  const { city, days } = evt.currentTarget.elements;

  console.log(city.value);
  console.log(days.value);

  serviceWeather(city.value, days.value)
    .then(data => {
      elements.list.innerHTML = createMarkup(
        data.forecast.forecastday,
        data.location
      );
    })
    .catch(err => {
      elements.list.innerHTML =
        '<li class="weather-card"><img src="https://repository-images.githubusercontent.com/627560142/41fad3ef-09ac-4e99-a6b7-bacf592b3142" alt="weather" width="500"/></li>';
      console.log(err);
    });
}

// створимо функцію для відмалювання на сторінці розпарсених даних
function createMarkup(arr, location) {
  // перевіримо чи прийшли дані в фунцію
  console.log(arr);
  console.log(location);
  return arr
    .map(
      ({
        date,
        day: {
          avgtemp_c,
          condition: { icon, text },
        },
      }) => `
  <li class="weather-card">
    <img src="${icon}" alt="${text}" class="weather-icon" />
    <h2 class="date">${location.name}</h2>
    <h3 class="date">${location.country}</h3>
    <h4 class="date">${date}</h4>
    <h4 class="weather-text">${text}</h4>
    <h4 class="temperature">${avgtemp_c} °C</h4>
</li>`
    )
    .join('');
}
