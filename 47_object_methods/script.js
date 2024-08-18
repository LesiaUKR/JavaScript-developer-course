youraObject = {
   name: 'YouRa',
   lastname: 'Allakhverdov',
   birthYear: 1974,
   job: 'programming instructor',
   familyMembers: ['Irina', 'Michael', 'YouRa'],
   hasDriverLicense: false,
   // функція, яка знаходиться в об'єкті, називається методом об'єкта
   // це функція - expression
   // calcAge: function (birthYear) {
   //    return 2021 - birthYear;
   // },
   // правильно використовувати this, оскільки ми використовуємо цей метод в об'єкті
   // тут вік обчислюється на основі року народження, який вже є в об'єкті
   // при виклику методу calcAge() він виводить вік, але не зберігає його в об'єкті
   // calcAge: function () {
   //    // console.log(this); // this вказує на об'єкт, в якому він використовується, тобто в консолі ми побачимо весь об'єкт
   //    return 2021 - this.birthYear;
   // },

   // тут вік обчислюється та зберігається в об'єкті в новій властивості age
   // це коректний підхід, оскільки ми можемо використовувати вік в інших методах об'єкта
   // а також при важливих обчисленнях можна зберігати результати властивостях об'єкта
   calcAge: function () {
      // console.log(this);
      this.age = 2021 - this.birthYear;
      return 2021 - this.birthYear;
   },

   getSummary: function () {
      return `${this.name} is a ${this.calcAge()}-year old ${this.job} and he has ${this.hasDriverLicense ? 'a' : 'no'} driver license`
   }
};


// це невірно передавати рік народження в метод, оскільки він вже є в об'єкті
// це стосується правила DRY - Don't Repeat Yourself
// console.log(youraObject['calcAge'](1974));

// ми можемо використовувати this.birthYear, то вже не потрібно передавати рік народження
// console.log(youraObject.calcAge());

// console.log(youraObject.calcAge());
// console.log(youraObject.calcAge());
// console.log(youraObject.calcAge());
console.log(youraObject.calcAge());
// у разі створення властивості age в методі calcAge() видасть значення undefined якщо перед цим не викликати метод calcAge()
console.log(youraObject.age); 



/******** Challenge ********/

// 'YouRa is a 47-year old programming instructor and he has a/no driver license'

console.log(youraObject.getSummary());
