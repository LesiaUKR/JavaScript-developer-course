
// backwards iteration & loop in loop

console.log('BACKWARDS ITERATION');

const user123 = ['YouRa', 'Allakhverdov', 1974, 'developer', ['Irina', 'Michael']];

//виводимо масив в зворотньому порядку
for (let i = user123.length - 1; i >= 0; i--) {
   console.log(i, user123[i]);
}

console.log('LOOP IN LOOP');

//вкладений цикл
for (let exercise = 1; exercise <= 3; exercise++) {
   console.log(`Exercise ${exercise}`);

   //виводимо для кожного вправи 5 повторень - rep(repetition)
   for (let rep = 1; rep <= 5; rep++) {
      console.log(`Ex ${exercise} Rep ${rep}`);
   }
   console.log('Out of inner loop');
}

console.log('Out of outer loop');

