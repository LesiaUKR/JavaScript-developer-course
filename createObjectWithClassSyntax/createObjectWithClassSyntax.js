/******** class Syntax to Define a Constructor Function *********/

// ES6 надає новий синтаксис для створення об’єктів,
// використовуючи ключове слово class.

// В ES5 можна створити об’єкт, визначивши функцію constructor та
// використавши ключове слово new, щоб конкретизувати об’єкт.

// В ES6 оголошення class має метод constructor, який викликається з
// ключовим словом new.Якщо метод constructor не визначений явно,
// то він визначається неявно без аргументів.

/****  Explicit/Явний constructor ****/

class SpaceShuttle {
  constructor(targetPlanet) {
    this.targetPlanet = targetPlanet;
  }
  takeOff() {
    console.log('To ' + this.targetPlanet + '!');
  }
}

/****  Implicit/Неявний constructor ****/

class Rocket {
  launch() {
    console.log('To the moon!');
  }
}

const zeus = new SpaceShuttle('Jupiter');
// prints To Jupiter! in console
zeus.takeOff();

const atlas = new Rocket();
// prints To the moon! in console
atlas.launch();

// Варто зазначити, що ключове слово class оголошує нову функцію,
// до якої додається конструктор.Конструктор прокидається,
// коли для створення нового об’єкта викликають new.

// Примітка: згідно з конвенцією для назв класів потрібно використовувати
// ВерхнійВерблюдячийРегістр, як у SpaceShuttle вище.

// Метод constructor є спеціальним методом для створення та ініціалізації об’єкта,
// створеного за допомогою класу.

/****  Task 1 ****/

// Використайте ключове слово class та напишіть constructor,
// щоб створити клас Vegetable.

// Клас Vegetable дозволяє створити об’єкт - овоч із властивістю name,
// що передається до constructor.

class Vegetable {
  constructor(name) {
    this.name = name;
  }
}

const carrot = new Vegetable('carrot');
console.log(carrot.name);
console.log(carrot);
