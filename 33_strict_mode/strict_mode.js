'use strict'; //повинен бути першим рядком в коді

// 'use strict' - включає строгий режим, який дозволяє використовувати сучасний стандарт ES6
// В строгому режимі не можна використовувати зарезервовані слова, які використовуються в майбутніх версіях JS
// В строгому режимі не можна використовувати змінні без їх оголошення
// 

let hasCertificate = false;
const passExam = true;

if (passExam) hasCertificate = true;
if (hasCertificate) console.log('Wow!');

// const interface = 'Video';
const package = 'MyPackage';