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
