/*** FUNCTION expression ***/
// не можемо звертатись до FUNCTION expression до місця її оголошення

// const valC = 15;
// const add = function (valA, valB) {
//    // const valA = 19; //параметри не можна перевизначати з const, тільки через let
//    co5nsole.log("valC", valC);
//    co5nsole.log("valA", valA);
//    const sum = valA + valB;
//    return sum;
// }

/*** FUNCTION declaration ***/
// іменоване оголошення функції
// можемо викликати як до так і після місця оголошення
// повертає результат виклику в місце виклику

function add(valA, valB) {
   const sum = valA + valB;
return sum;
}

/*** Псевдомасив аргументів ***/

