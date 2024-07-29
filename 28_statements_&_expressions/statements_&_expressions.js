// Expressions
// це шматок коду, який видає значення
// Expressions - це як слова, а Statements - це як речення
2 + 2
37
true && false //теж значення


// Statements
// те що закінчується крапкою з комою - це statement
const number = 10;

// це все if statement - робить щось, але не видає значення
if (number > 0) {
   const text = 'The number is positive'; // це statement
}

// ${number - 2} - це expression, ми не можемо вставити в літерал стрінгу statement
console.log(`${number - 2} is also positive number.`); 