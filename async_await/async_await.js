// ***************** Конструкція async await ***************** \\

//async await дозволяє в середині функції оброблювати асинхронний код
// так, ніби він синхронний

// function serviceCountry() {
//   console.log('before fetch');
//   fetch('https://restcountries.com/v3.1/name/Ukraine').then(resp =>
//     console.log(resp)
//   );
//  .then(data => {
// умовно якби потрібно було робити ще один запит на бек на основі
// отриманих даних, що робить код нечитабельним
//    console.log(data);
//    fetch(`http://someurl/${data.capital[0]}`)
//      .then(resp => resp.json())
//      .then(data => console.log(data));
//  });
//   console.log('after fetch');
// }
// console.log('before function');

// serviceCountry();

// перепишемо на async await

// console.log('before function');

// async function serviceCountry() {
//   console.log('before fetch');
// на рядочку resp інструкція await зупиняє будь-яке виконання коду
//і очікує поки fetch запит не поверне свою відповідь
//за рахунок цього ми можемо не вказувати обробку з then
// так як вже повернувся готовий response

//   const resp = await fetch('https://restcountries.com/v3.1/name/Ukraine');
//   console.log('resp', resp);
//   const data = await resp.json();
//   console.log('data', data);
//   console.log('after fetch');
// }
// serviceCountry();

// console.log('after function');

// тобто можливість асинхронної функції це виконання промісів всередині
// неї по типу як синхронних операцій
// за допомогою ключового слова async ми вказуємо, що функція асинхронна
// за допомогою ключового слова await ми вказуємо, що ми хочемо очікувати
// коли інструкція коду попадає на await, побудова виконання синхронного
// коду зупиняється доти, поки не виконається асинхронний код, тобто поки
// не відпрацює проміс
// після того як проміс відпрацював, розблоковується синхронний стек
// таким чином не потрібно використовувати then-catch-finally
// ми одразу можемо присвоювати результати fetch у змінну response
// на відміну від просто роботи через fetch, коли вказуємо await
// то отримуємо не об'єкт Promice в статусі pending,
// а повноцінний об'єкт Response,тобто Promice, який вже пройшов статус
// fulfiled або reject відповідно
// на отриманому  об'єкті Response викликаємо метод json, щоб розпарсити
// отримані данні
// тобто консолі відпрацюють у порядку
// console.log('before function');
// console.log('before fetch');
// console.log('after function');
// console.log('resp', resp);
// console.log('data', data);
// console.log('after fetch');
// важливо пам'ятати, що async\await блокує виконання синхронного коду
// лише всередині себе і не впиливає на виконання зовнішнього
// синхронного коду
// тому console.log('after function'); ми бачимо третім в консолі

// ***************** Асинхрона функція завжди поверне проміс ***************** \\

// ключове слово async ми можемо використовувати без ключового слова await
// але в цьому немає жодної логіки, але помилки не буде
// використання await без async не може бути і поверне помилку

//  async function serviceCountry(){
// console.log('1');
// }

// console.log(serviceCountry());

// *****************Асинхронною функціює може бути будь який різновид функції ***************** \\

// ****** Arrow function ****** \\

// const serviceCountry = async () => {
//   const resp = await fetch('https://restcountries.com/v3.1/name/Ukraine');
//   const data = await resp.json(); //якщо не вказати await - отримаємо Promise в статусі pending
//   // якщо буде await, то побачимо уже відпрацьований Promise, тобто Promise пройде вже статус fulfiled
//   // і побачимо вже дані, які повернув бекенд
//   console.log(data);
// };
// serviceCountry();

// ****** Function expression ****** \\

// const serviceCountry = async function () {
//   const resp = await fetch('https://restcountries.com/v3.1/name/Ukraine');
//   const data = await resp.json();
//   console.log(data);
// };
// serviceCountry();

// ****** Function declaration ****** \\

// async function serviceCountry() {
//   const resp = await fetch("https://restcountries.com/v3.1/name/Ukraine");
//   const data = await resp.json();
//   console.log(data);
// }
// serviceCountry()

// ****** Object method ****** \\

// const service = {
//   countryName: "Ukraine",
//   async serviceCountry() {
//     const resp = await fetch(
//       `https://restcountries.com/v3.1/name/${this.countryName}`
//     );
//     const data = await resp.json();
//     console.log(data);
//   },
// };
// service.serviceCountry();

// ****** ES6 Class ****** \\

// class Service {
//   constructor(country) {
//     this.countryName = country;
//   }

//   async serviceCountry(){
//     const resp = await fetch(
//         `https://restcountries.com/v3.1/name/${this.countryName}`
//       );
//       const data = await resp.json();
//       console.log(data);
//   }
// }

// const ukraine = new Service('Ukraine')

// console.log(ukraine);
// ukraine.serviceCountry()

// ************ Обробка за допомогою then та catch ************ \\

// якщо хочемо повертати щось із асинхронної функції у зовнішній код,
// то потрібно обробляти функцію за її межами з допомогою then та catch
// тобто, якщо в функції є return, то маємо обробити функцію поза її
// межами і не обробляти всередині

// async function serviceCountry() {
//   const resp = await fetch('https://restcountries.com/v3.1/name/Ukraine');

//   if (!resp.ok) {
//     throw new Error('Some error');
//   }

//   const data = await resp.json();

//   return data;
// }
// serviceCountry()
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// нижче в функції нічого не повертаємо, немає ключового слова return
// тому всередині функції
// маємо обробити відповідь з допомогою try/catch
// async\await заміняє використання then\catch

// async function serviceCountry() {
//   try {
//     const resp = await fetch('https://restcountries.com/v3.1/name/weryuiop');

//     if (!resp.ok) {
//       throw new Error('Some error');
//     }

//     const data = await resp.json();

//     //  return data; //так краще не робити!!! і не
//     //  використовувати одночасно try/catch return, а потім then\catch
//   } catch (err) {
//     console.log(err);

//     // throw new Error("Some error");
//   }
// }

// serviceCountry()
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// ************ Обробка за допомогою try та catch ************ \\

// async function serviceCountry() {
//   try {
//     const resp = await fetch("https://restcountries.com/v3.1/name/Ukraine");

//     if (!resp.ok) {
//       throw new Error("Some error");
//     }

//     const data = await resp.json();
//   } catch (err) {
//     console.log(err);
//   }
// }
// serviceCountry();

// Якщо маємо наприклад щось подібне:
// async function fetchSmth(url) {
//   try {
//     const resp = await fetch(url);
//     const data = await resp.json();
//     renderMarkup(data);
//   } catch (err) {
//     console.log(err);
//   }
// }
// тут return немає. Якщо переписати на async await  - який метод використовуємо?

// ************ Паралельні та послідовні запити ************ \\

// *********** Послідовні *********** \\
// час відповіді збільшується, тому краще робити Паралельні запити
// async function serviceCountries() {
//   const resp1 = await fetch('https://restcountries.com/v3.1/name/Ukraine');
//   const resp2 = await fetch('https://restcountries.com/v3.1/name/Greece');
//   const resp3 = await fetch('https://restcountries.com/v3.1/name/France');
//   console.log(resp1);
//   console.log(resp2);
//   console.log(resp3);
// }
// serviceCountries();

// *********** Паралельні *********** \\

async function serviceCountries() {
  const countries = ['Ukraine', 'Greece', 'France'];

  const responses = countries.map(async country => {
    const resp = await fetch(`https://restcountries.com/v3.1/name/${country}`);

    if (!resp.ok) {
      throw new Error('error');
    }

    return resp.json();
  });
  console.log(responses);
  const data = await Promise.allSettled(responses); //щоб отримати данні,
  // а не Promise використовуємо allSettled
  console.log(data);
}
serviceCountries();
