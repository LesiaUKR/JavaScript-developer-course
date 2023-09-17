/********* Always falsy *********/ 
// // 0
// console.log(Boolean(0));
// // ""
// console.log(Boolean(""));
// // NaN
// console.log(Boolean(NaN));
// // null
// console.log(Boolean(null));
// // undefined
// console.log(Boolean(undefined));
// // false
// console.log(Boolean(false));

/********* All other will be truthy *********/
// відбувається приведення типів
// console.log(Boolean(32));
// console.log(Boolean("hello"));
// console.log(Boolean([]));
// console.log(Boolean({}));
// console.log(Boolean(3.5));

// відбувається приведення типів в if else statement

const age = 3;
if (age) {
   console.log('The person was born');
} else {
   (console.log('The person was not born yet'))
}

if (weight) {
   console.log('Weight is defined');
} else {
   console.log("Weight is not defined");
}