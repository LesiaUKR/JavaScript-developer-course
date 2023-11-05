// *********** localStorage *************** \\

// щоб переглянути localStorage переходимо в dev tools браузера
// на закладці Application - розділ storage
// єдиний тип данних, який підтримується localStorage та session storage
// є тип данних string(рядочок)
// щоб перевести данні у формат рядочка, не використовується метод toString
// використовуємо метод JSON.stringify для перетворння данних у формат
// JSON, оскільки цей метод є зворотнім і примінивши метод JSON.parse
// маємо змогу повернути данні до звичайного вигляду, якими вони було з самого
// початку
// щоб зробити звернення до localStorage, який знаходиться на глобальному об'єкті
// window нам потрібно звернутись до window.localStorage
// window можна не прописувати із-за частої вживаності

const LS_KEY = 'Array of names';
const names = ['Kate', 'Alice', 'Olga'];

// localStorage.setItem(LS_KEY, JSON.stringify(names));

// *****Збереження в LS***** \\

const user = {
  name: 'ALice',
  city: 'Lviv',
};

window.localStorage.setItem(LS_KEY, JSON.stringify(user));

// localStorage.setItem(LS_KEY, JSON.stringify('Hello world'));

// *****Читання з LS***** \\

// const value = localStorage.getItem(LS_KEY);
// console.log(value); //
// console.log(JSON.parse(value));

// коли працюємо в рамках проекту ми не можемо бути впевнені, що всі використовують
// JSON.stringify, або відсутність данних в localStorage (наприклад видалив користувач)
// тому аби запобігти падінню проєкту та перереванню коду огортаємо в конструкцію try{}catch(error){}
// try/catch формує додаткову зону видимості
// повна конструкція try{}catch(){}finally{}
// finally, який буде виконано в будь-якому випадку чи після try чи після catch
// finally не є обовя'язковим, але дає змогу згрупувати все те спільне, що могло \
// бути і в try і в catch
// практичне застосування finally:
// 1. форма реєстрації і після сабміту форми потрібно закрити модальне вікно
// цієї форми, то ми можемо закрити його в try та cacth
// щоб не дублювати код по закриттю форми в try та cacth,
// прописуємо закриття в finally
// 2. наприклад при використанні лоадера(спіннера), щоб не прописувати закриття
// спіннера в try та cacth прописуємо закриття один раз в finally

try {
  const value = localStorage.getItem(LS_KEY);
  console.log(value);
  console.log(JSON.parse(value));
} catch (error) {
  console.log(error);
} finally {
  console.log('after all');
}

const btnLS = document.querySelector('.js-ls');
const btnSS = document.querySelector('.js-ss');

btnLS.addEventListener('click', handlerLS);
btnSS.addEventListener('click', handlerSS);

function handlerLS() {
  localStorage.setItem('ls-name');
}

function handlerSS() {}
