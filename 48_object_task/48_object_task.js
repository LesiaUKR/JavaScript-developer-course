const jack = {
  name: 'Jack',
  lastname: 'White',
  weight: 91,
  height: 193,
  calcBMI: function () {
    this.bmi = (this.weight / (this.height / 100) ** 2).toFixed(2);
    return this.bmi;
  },
};

const mike = {
  name: 'Mike',
  lastname: 'Black',
  weight: 91,
  height: 193,
  calcBMI: function () {
    this.bmi = (this.weight / (this.height / 100) ** 2).toFixed(2);
    return this.bmi;
  },
};

console.log('Jack BMI', jack.calcBMI());
console.log('Mike BMI', mike.calcBMI());


if(jack.bmi > mike.bmi){
   console.log(`${jack.name} ${jack.lastname} BMI ${jack.bmi} is higher than Mike Black BMI ${mike.bmi}`);
}else if(jack.bmi < mike.bmi){
   console.log(`${mike.name} ${mike.lastname} BMI ${mike.bmi} is higher than Jack White BMI ${jack.bmi}`);
} else {
   console.log(`${jack.name} ${jack.lastname} and ${mike.name} ${mike.lastname} have the same BMI`);
}

/******* через тернарний оператор ********/
// const message =
//   jack.bmi > mike.bmi
//     ? `${jack.name} ${jack.lastname}  BMI ${jack.bmi} is higher than Mike Black BMI ${mike.bmi}`
//     : `${mike.name} ${mike.lastname}  BMI ${mike.bmi} is higher than Jack White BMI ${jack.bmi}`;
// console.log(message);
