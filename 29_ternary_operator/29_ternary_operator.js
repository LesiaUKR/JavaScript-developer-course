const money = 150;
const cost = 100;
// money >= cost ? console.log('You can buy it.') : console.log('You can not buy it.');

// ternary operator - завжди повертає значення, тобто це expression і можна використовувати в різних місцях - наприклад в літералах шаблонних рядків
// 
const canYouBuyIt = money >= cost ? 'You can buy it.' : 'You can not buy it.';
console.log(canYouBuyIt);

// if statement аналогічний до ternary operator
let canYouBuyIt1;
if (money >= cost) {
   canYouBuyIt1 = 'You can buy it.';
} else {
   canYouBuyIt1 = 'You can not buy it.';
}

console.log(canYouBuyIt1);

console.log(`You can${money >= cost ? ' ' : ' not '}buy it.`) // в залежності від умови виводить різні значення