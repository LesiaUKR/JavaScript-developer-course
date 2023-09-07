/********* Керуючі послідовності у рядках *********/

const myStr = "FirstLine\n\t\\SecondLine\nThirdLine";
console.log(myStr);

/***  Лапки — не єдині символи, що можуть бути екрановані в рядку. 
Екрановані символи дозволяють використовувати символи, 
які інакше неможливо використати.  ***/

// Код	Вивід
// \'	одинарні лапки
// \"	подвійні лапки
// \\	зворотна коса риска
// \n	новий рядок
// \t	табуляція
// \r	повернення каретки
// \b	крок назад
// \f	перевід сторінки

/*** Об’єднання рядків за допомогою оператора += ***/

let ourStr = "I come first. ";
ourStr += "I come second.";

// Тепер ourStr має значення рядка I come first. I come second.

/*** Пропуски у словах += ***/

const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

const wordBlanks = "We saw " + myAdjective + " " + myNoun + " " + "that " + myVerb + " " + myAdverb + ".";


console.log(wordBlanks)