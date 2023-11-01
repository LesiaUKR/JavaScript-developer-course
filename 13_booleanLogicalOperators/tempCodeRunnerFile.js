const hasMoney = true;
const isAdult = true;
const isCompletelyDrunk = false;

console.log(!hasMoney);

if (hasMoney && isAdult && !isCompletelyDrunk) {
  console.log('You can buy the drink.');
} else {
  console.log('You can not buy the drink.');
}
