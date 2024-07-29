
let age = prompt("Enter your age");

function ageVerification(age) {
   age = Number(age);
   
   const message = age >= 18 ? "You can by the alcohol": "You can not by the alcohol, you are too young";
   
   alert(message);
   console.log(message);
}

ageVerification(age)