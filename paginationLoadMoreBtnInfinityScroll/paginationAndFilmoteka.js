// Створи фільмотеку з популярними фільмами, для цього використай
// https://developer.themoviedb.org/reference/trending-movies

// Щоб отримати постер фільму потрібно підставити url з відповіді від бекенду та url з документації
// https://developer.themoviedb.org/docs/image-basics

// Відмалюй картки з фільмами
// Приклад картки  => https://prnt.sc/Hi_iLLg7Nd1F

// Реалізуй пагінацію
// 1 Кнопка "Load More"
// 2 Infinity scroll (https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)

// *********************** Кнопка "Load More" ************************** \\

// const elements = {
//   list: document.querySelector('.js-movie-list'),
//   btnLoadMore: document.querySelector('.js-load-more'),
// };

// elements.btnLoadMore.addEventListener('click', handlerLoadMore);
// let page = 499;

// function handlerLoadMore() {
//   page += 1;
//   serviceMovie(page).then(data => {
//     elements.list.insertAdjacentHTML('beforeend', createMarkup(data.results));

//     if (data.page >= 500 || data.page >= data.total_pages) {
//       elements.btnLoadMore.classList.replace(
//         'js-load-more',
//         'load-more-hidden'
//       );
//     }
//   });
// }

// function serviceMovie(page = 1) {
//   const BASE_URL = 'https://api.themoviedb.org/3';
//   const END_POINT = 'trending/movie/week';
//   const API_KEY = 'a661ef86e324b3ea2edd4f22cf9fb615';

//   const params = new URLSearchParams({
//     api_key: API_KEY,
//     page,
//   });

//   console.log(params.toString());

//   return fetch(`${BASE_URL}/${END_POINT}?${params}`).then(resp => {
//     if (!resp.ok) {
//       throw new Error(resp.statusText);
//     }
//     return resp.json();
//   });
// }

// serviceMovie()
//   .then(data => {
//     elements.list.insertAdjacentHTML('afterbegin', createMarkup(data.results));
//     if (data.page < data.total_page) {
//       elements.btnLoadMore.classList.replace(
//         'load-more-hidden',
//         'js-load-more'
//       );
//     }
//   })
//   .catch(err => console.log(err));

// function createMarkup(arr) {
//   return arr
//     .map(
//       ({ poster_path, original_title, release_date, vote_average }) => `
//     <li class="movie-card">
//         <img src="https://image.tmdb.org/t/p/w300${poster_path}" alt="${original_title}" />
//         <h2>${original_title}</h2>
//         <div class="movie-info">
//             <p>Release Date: ${release_date}</p>
//             <p>Vote Average: ${vote_average}</p>
//         </div>
//     </li>
//     `
//     )
//     .join('');
// }

// *********************** Infinity Scroll ************************** \\

// Infinity scroll (https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)

// Intersection Observer - це API веб - платформи, яке надає спосіб
// ефективного відстеження змін в області перетину між елементами DOM
// та браузером або областями елементів між собою. В основному,
// це використовується для визначення того, чи стає видимим або
// ховається певний елемент при прокручуванні сторінки.

// Основні ідеї та поняття в Intersection Observer включають:

// Observer(спостерігач): Це об'єкт, який дозволяє вам вказати цільовий
// елемент(цільові елементи), який ви хочете відстежувати.

// Target(цільовий елемент): Елемент, який ви хочете відстежувати.
// Спостерігач буде повідомляти вас про зміни в його видимості або
// перетині з іншим елементом.

// Root(корінь): Елемент, щодо якого відбувається вимірювання перетину.
// Якщо корінь не вказано, то відстежування буде відбуватися щодо видимої
// частини документа(екрана). Можна вказати Root як null або взагалі не вкажемо
// дану властивість, то Observer буде слідкувати за всим view port.
// Якщо потрібно, наприклад, в середині модального вікна є необхідність
// зробити додатковий блок, який можна скролити і всередині того блоку
// робити HTTP запити, то в якості root можна вказати посилання на цей
// блок і таким чином Observer буде слідкувати за входженням елементів
// саме в цей блок

// rootMargin:вказуємо за скільки пікселів до входження елемента
// до view port викликати callback функцію, яка виконає нашу операцію

// Thresholds(пороги): вживається або rootMargin або Thresholds оскільки
// вони один одного +\- взаємовиключають. Thresholds вказується на скільки
// відсотків має елемент пересікти view port, щоб викликалась callback функція

// На об'єкті нового представника класу Observer викликаємо метод observe
// та вказуємо за чим він має спостерігати, а саме за останнім HTML-елементом
// колекції, яка динамічно може змінюватись.
// Так як відслідковувати динамічно останній елемент дороговартісна операція,
// є загальна практика створити порожній div - <div class="js-guard"></div>
// і вказуємо цей div як елемент відслідковування:observer.observe(elements.guard).
// властивість isIntersecting - чи працює callback функція із Observer
// властивість isVisible - чи видимий HTML-елемент, за яким спостерігаєм

const elements = {
  list: document.querySelector('.js-movie-list'),
  guard: document.querySelector('.js-guard'),
};

const options = {
  root: null,
  rootMargin: '300px',
  threshold: 1.0,
};
const observer = new IntersectionObserver(handlerLoadMore, options);
let page = 1;

function serviceMovie(page = 1) {
  const BASE_URL = 'https://api.themoviedb.org/3';
  const END_POINT = 'trending/movie/week';
  const API_KEY = '345007f9ab440e5b86cef51be6397df1';

  const params = new URLSearchParams({
    api_key: API_KEY,
    page, // page: 1
  });

  console.log(params.toString());

  return fetch(`${BASE_URL}/${END_POINT}?${params}`).then(resp => {
    if (!resp.ok) {
      throw new Error(resp.statusText || 'Error');
    }

    return resp.json();
  });
}
serviceMovie()
  .then(data => {
    elements.list.insertAdjacentHTML('afterbegin', createMarkup(data.results));

    if (data.page < data.total_pages) {
      observer.observe(elements.guard);
    }
  })
  .catch(err => console.log(err));

function createMarkup(arr) {
  return arr
    .map(
      ({ poster_path, original_title, release_date, vote_average }) => `
      <li class="movie-card">
          <img src="https://image.tmdb.org/t/p/w300${poster_path}" alt="${original_title}" />
          <h2>${original_title}</h2>
          <div class="movie-info">
              <p>Release Date: ${release_date}</p>
              <p>Vote Average: ${vote_average}</p>
          </div>
      </li>
      `
    )
    .join('');
}

document.addEventListener('scroll', handlerScroll);
let counterScroll = 0;
function handlerScroll() {
  counterScroll += 1;
  console.log('Scroll counter', counterScroll);
}

let counterObserver = 0;
function handlerLoadMore(entries) {
  counterObserver += 1;
  console.log('Observer counter', counterObserver);
  entries.forEach(entry => {
    console.log(entry);
    if (entry.isIntersecting) {
      page += 1;
      serviceMovie(page)
        .then(data => {
          elements.list.insertAdjacentHTML(
            'beforeend',
            createMarkup(data.results)
          );
          //  observer.unobserve - вимикаємо спостерігач за конкретним елементом, щоб не було запитів на бекенд після того
          //   як всі сторінки завантажені.
          if (data.page >= 500 || data.page >= data.total_pages) {
            observer.unobserve(elements.guard);
            // observer.disconnect(); //відразу зупиняє за всіма елементами
          }
        })
        .catch(err => console.log(err));
    }
  });
}
