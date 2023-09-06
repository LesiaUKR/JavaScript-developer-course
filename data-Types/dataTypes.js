// JS has dynamic typing and Typescript has static typing
// let x = 'something';
// console.log(x);
// x = 3;
// console.log(x);

// Primitive data types

// String

const someText = 'Some text'
console.log(typeof someText);

// Number

const someNumber = 11;
console.log(typeof someNumber);

// Boolean

const someBoolean = false;
console.log(typeof someBoolean);

// Null
const someNull = null;
console.log(typeof someNull)

// Undefined
let someUndefined;
console.log(typeof someUndefined);

// Symbol
let someSymbol = Symbol();
console.log(typeof someSymbol)

// References data types

// Array
let someArray = [1,2,3,4];
console.log(typeof someArray);

// Object Literal
let someObjectLiteral = {
   firstProperty: '123',
   secondProperty: 'secondProperty'
};
console.log(typeof someObjectLiteral);

// Function
const someFunction = new Function;
console.log(typeof someFunction);

// Date
const someDate = new Date;
console.log(typeof someFunction);