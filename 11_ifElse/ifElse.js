/*** If ***/

// Інструкція if(...) обчислює умову в дужках і, якщо результат умови true, виконує блок коду.


// const age = 15;
// const isAdult = age >= 18;

// if (isAdult) {
//    console.log('You can watch this video');
// }

/*** else ***/

// Вираз if може містити необов’язковий блок else (“інакше”). Він виконується, коли умова є хибною.

// if (isAdult) {
//    console.log('You can watch this video');
// } else {
//    const yearsLeft = 18 - age;
//    console.log(`You are too young.
//    You can watch this video ${yearsLeft} years later`);
   
// }

// const 
irthYear = 2000;
// const yearNow = 2020;
// const age = yearNow - birthYear;

// if (age >= 16) {
//    answer = 'Yes';
// } else {
//       answer = 'No';
// }

// console.log(`Am I adult? - ${answer}`);

/*** Декілька умов: else if ***/ 


const color = 'green';

if (color === 'green') {
   console.log('Go!'); 
}else if(color === 'yellow'){
   console.log('Get ready!'); 
}else if(color === 'red'){
   console.log('Stop!'); 
}