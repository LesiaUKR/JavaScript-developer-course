/* AND | OR | NOT */

/******* AND && *******/
// console.log(true && true); //return last true if all components true
// console.log(true && false); //return last first false
// console.log(false && false); //return first false

/******* OR || *******/
// console.log(true || true); //return true
// console.log(true || false); //return true
// console.log(false || false); //return first false

/******* NOT ! *******/
// console.log(!true); //return false
// console.log(!false); //return true

// const hasMoney = false;
// const isAdult = false;

// if (hasMoney && isAdult) {
//   console.log('You can buy the drink.');
// } else {
//   console.log('You can not buy the drink.');
// }

// const hasMoney = false;
// const isWithParent = false;

// if (hasMoney || isWithParent) {
//   console.log('You can buy orange.');
// } else {
//   console.log('You can not buy orange.');
// }

const hasMoney = true;
const isAdult = true;
const isCompletelyDrunk = false;

console.log(!hasMoney);

if (hasMoney && isAdult && !isCompletelyDrunk) {
  console.log('You can buy the drink.');
} else {
  console.log('You can not buy the drink.');
}

console.log(Boolean('0') == Boolean(0));
console.log(true + 'hello');
console.log(true - 'hello');
console.log(typeof null);
console.log(typeof (null + 40));
console.log((0 && '') || []);
console.log((0 && '') || []);
console.log(typeof 1n);
console.log(12 && '12');
console.log(typeof (function () {})());
console.log('6' * '3');
let v = !!'0';
console.log(v);
console.log('123' == 123);
console.log(typeof (2 + '2'));
console.log(typeof function () {});
console.log(1.15 + 2.3);
console.log('80' + 71.2);
console.log(0 && '' && []);
console.log(0 || (1 && 2) || 3);
console.log({} == {});
console.log(typeof Symbol('JS'));
console.log(isNaN(''));
console.log(Boolean('0'));
console.log(null === undefined);
console.log(null == undefined);
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof Math);
console.log(Boolean(''));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(false));
console.log(Boolean(NaN));
console.log(typeof typeof (function () {})());
console.log(typeof (22 - '1'));
console.log(typeof Infinity);
console.log(typeof NaN);
console.log(typeof alert);
let result = typeof alert;
console.log(result);
