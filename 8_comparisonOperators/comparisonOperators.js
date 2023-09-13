/********* Comparison Operators >, <, >=, <=, ==, !=  *********/

// 1. Greater Than (Більше/Less Than (Менше): a > b, a < b
// 2. Greater Than or Equal To (Більше або рівне)/Less Than or Equal To (Менше або рівне):
// a >= b, a <= b
// 3. Equal (Рівно): == - Порівнює дві змінні на рівність за значенням.
// Наприклад, x == y поверне true, якщо x і y мають однакове значення.
// Зверніть увагу, для порівняння потрібно використовувати два
// знаки рівності ==. Один знак рівності a = b означав б присвоєння.
// 4. Not Equal (Не рівно/Не дорівнює) != в JavaScript записується як a != b.
// != - Порівнює дві змінні на нерівність за значенням.
// Наприклад, x != y поверне true, якщо x і y мають різні значення.


const x = 3;
const y = 10;
let isXMore = x > 5;
let isXMoreThanY = x != y;

console.log(isXMoreThanY); 

/*** String Comparison ***/

// Алгоритм порівняння рядків досить простий:

// Порівнюються перші символи обох рядків.
// Якщо перший символ першого рядка більший (менший) за перший символ другого рядка, то перший рядок більший (менший) за другий. Порівняння закінчено.
// В іншому випадку, якщо перші символи обох рядків рівні, то таким самим чином порівнюються вже другі символи рядків.
// Порівняння продовжується до того часу, доки не закінчиться один з рядків.
// Якщо два рядки закінчуються одночасно, то вони рівні. Інакше, довший рядок вважатиметься більшим.
// В прикладах нище, порівняння 'Я' > 'А' завершиться на першому кроці.
// Використовується кодування Unicode, а не справжній алфавіт
// Проте друге порівняння слів 'Соки' і 'Сода' буде виконуватися посимвольно:

// С дорівнює С.
// о дорівнює о.
// к більше ніж д. На цьому кроці порівнювання закінчується. Перший рядок більший.

alert( 'Я' > 'А' ); // true
alert( 'Соки' > 'Сода' ); // true
alert('Комар' > 'Кома'); // true

/*** Not Strict Comparison ***/

// оператора порівняння == може викликати проблеми.
// Наприклад, він не відрізняє 0 від false:

let c = 0;
console.log( Boolean(c) ); // false

let d = "0";
console.log( Boolean(d) ); // true

console.log(c == d); // true!

/*** Оператори JS, які порівнюють з приведенням типів  ***/

//  (==) | (!=) |(>) | (<) | (>=) | (<=) | (&&) | (||)
// ці оператори порівнюють з приведенням типів тільки у випадках,
// коли типи операндів відрізняються.Якщо типи однакові,
// приведення типів не виконується, і порівняння проводиться на основі значень.
// Щоб уникнути непередбачуваної поведінки, рекомендується використовувати строге порівняння(=== і !==)
// для явного порівняння із збереженням типів даних.

const a = 3;
const b = "3";
let isAMoreThanB = a != b; //false

console.log(isAMoreThanB); 
console.log(true == 1); //true
console.log(true === 1); //false
console.log(true == "1"); //true
console.log(true == "abc"); //false
console.log(true == 25); //false
console.log(false == 0); //true
console.log(false == "0"); //true
console.log(false == "abc"); //false
console.log(false === 0); //false
console.log(false === "abc"); //false
console.log(false == 7); //false
console.log( 0 == false ); // true
console.log( '' == false ); // true


console.log(null  === undefined); //false
console.log(null == undefined); //true
console.log(NaN == NaN); //false

/*** Strict comparison operators === | !== ***/

// Оператори строгої рівності === і строгої нерівності !== перевіряють рівність без перетворення типів.
// якщо a і b мають різні типи, то перевірка a === b негайно поверне результат false без спроби їхнього перетворення.

console.log(0 === false); // false, тому що порівнюються різні типи
console.log("0" !== false); //true


/*** Comparison null ***/

console.log(null === undefined); // false
console.log(null == undefined); // true

// Під час використання математичних операторів та інших операторів порівняння < > <= >=
// Значення null/undefined конвертуються в числа: null стає 0, тоді як undefined стає NaN.

console.log( null > 0 );  // (1) false
console.log( null == 0 ); // (2) false
console.log(null >= 0); // (3) true - Оператори >= <= конвертують null в число, розглядаючи його як 0.

// Причина в тому що нестроге порівняння == і порівняння > < >= <= працюють по-різному.
// Оператори >= <= конвертують null в число, розглядаючи його як 0.
// Ось чому вираз (3) null >= 0 дає true, а вираз (1) null > 0 — false.
// Порівняння == значень undefined і null діє окреме правило: ці значення не перетворюються на інші типи,
// вони рівні один одному і не рівні будь - чому іншому.Ось чому вираз(2) null == 0 повертає результат false.

/*** Comparison undefined ***/

console.log( undefined > 0 ); // false (1)
console.log( undefined < 0 ); // false (2)
console.log(undefined == 0); // false (3)

// Значення undefined не має порівнюватись з іншими значеннями
// Порівняння(1) і(2) повертає false, тому що undefined під час порівняння з “не null” значеннями завжди конвертується в NaN,
// а NaN — це спеціальне числове значення, яке завжди повертає false під час будь - яких порівнянь.
// Нестроге порівняння (3) повертає false, тому що undefined рівне тільки null, undefined і жодним іншим значенням.


// Значення null і undefined рівні == один одному і не рівні будь-якому іншому значенню.

// Будьте обережні, використовуючи оператори порівняння на зразок > чи < зі змінними, які можуть приймати значення null / undefined.
// Хорошою ідеєю буде зробити окрему перевірку на null / undefined для таких значень.

5 > 4 //true
"ананас" > "яблуко" //false
"2" > "12" //true - Перший символ рядка "2" більший за перший символ другого рядка — "1".
undefined == null // true
undefined === null //false Строге порівняння різних типів, тому false
null == "\n0\n" // false null дорівнює лише undefined
null === +"\n0\n" //false Строге порівняння різних типів