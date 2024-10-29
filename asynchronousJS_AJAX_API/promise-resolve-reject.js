// // Promise.resolve() is a static method that creates a new Promise that is resolved with a given value.
// // Promise.resolve() - поверне об'єкт Promise зі значенням, яке було передано в якості аргументу.
// // Promise.resolve() - використовується щоб зберегти інтерфейс
// const fetchPokemon = pokemonId =>
//   fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);

// // Promise.reject  - повертає об'єкт Promise, який був відхилений з вказаною причиною.
// Promise.reject('Error: Pokemon not found');

// // Функція, яка дивиться чи є покемон в кеші, якщо немає, то викликає функцію fetchPokemon

// const pokemonsCashe = {};

// const getPokemon = async pokemonId => {
//   // якщо покемон є в кеші, то повертаємо його, але огорнувши в Promise.resolve,
//   // щоб він повертався як Promise. Якщо не огорнути, то повернеться об'єкт і не буде працювати async/await
//   if (pokemonsCashe[pokemonId]) {
//     console.log('From cache ', ppokemonId);
//     return new Promise(resolve => {
//       resolve(pokemonsCashe[pokemonId]);
//     });
//   }
//   const pokemon = await fetchPokemon();
//   pokemonsCashe[pokemonId] = pokemon;
//   console.log('From server ', pokemonId);
//   return pokemon;
// };

// // якщо буде повернення із кешу без обгортки в Promise.resolve, то викликати функцію нижче getPokemon не вийде
// // const pokemon = await getPokemon(1);

// // щоб викликати функцію getPokemon з консолі, потрібно її експортувати
// window.getPokemon = getPokemon;

// // Promise.reject - повертає об'єкт Promise, який був відхилений з вказаною помилкою.
// // Promise.reject('Error: Pokemon not found'); - його використовують найчастіше в тестах, коли хочуть земулювати
// // що впала відповідь сервера, або коли в коді потрібно викинути помилку, щоб вона була оброблена в catch
