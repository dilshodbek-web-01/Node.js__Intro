// --------------------------- INPURE FUNCTION --------------------------- //
// 1.
// const a = 10;

// const myFunc = () => {
//     return a
// }
// console.log(myFunc());

// 2.
// const myFunc2 = () => {
//     console.log(12);
// }
// myFunc2();

// ----------------------------- PURE FUNCTION ------------------------ //
// 1.
// const myFunc = (a) => {
//     return a
// }
// console.log(myFunc(1));

// ------------------------- THIS -------------------------- //
// 1. THIS
// const car = {
//   name: "spark",
//   year: 2023,
//   sayName: function (model) {
//     console.log(`Name: ${this.name}`);
//     console.log(`Model: ${model}`);
//   },
// };

// const car2 = {
//   name: "Malibu",
//   year: 2023,
// };

// car.sayName.bind(car2, "Chevrolet")();

// 2. THIS
// const car = {
//   name: "spark",
//   year: 2023,
//   sayName: function (model) {
//     return function () {
//       console.log(`Name: ${this.name}`);
//       console.log(`Model: ${model}`);
//     };
//   },
// };

// car.sayName("Chevrolet")();

// 3. THIS
// String.prototype.someText = function () {
//   let arr = this.trim().split(" ");
//   return arr[arr.length - 1].length;
// };

// const string = "  Men bugun bozorga bormadim  ";

// const newString = " bugun hamma darsda faolmasmi ? "

// console.log(string.someText());

// --------------------------------- OOP ------------------------------- //
// 1. Incapsulation - # Private qilish.
// 2. Abstraction - Mavhumlik = Private qilingan narsani ko`rsatish.
// 3. Inheritance - Meros olish.
// 4. Polymorphiosm - 

// 1, 2
// class Person {
//   name;
//   age;
//   #password; // 1. Incapsulation - # Private qilish.
//   constructor(name, age, password) {
//     this.name = name;
//     this.age = age;
//     this.#password = password;
//   }

//   #sayName() { // 1. Incapsulation - # Private qilish.
//     return `Mening ismim ${this.name}, yoshim ${this.age}, passwordim ${
//       this.#password
//     }`;
//   }

//   sayHi() { // 2. Abstraction - Mavhumlik = Private qilingan narsani ko`rsatish.
//     return this.#sayName();
//   }
// }

// const person1 = new Person("Dilshodbek", 24, "123456");
// console.log(person1.sayHi());

// 3. 4.
// class Animal {
//   name;
//   wild;
//   color;
//   constructor(name, wild, color) {
//     this.name = name;
//     this.wild = wild;
//     this.color = color;
//   }
// }

// class Ayiq extends Animal { // 3. Inheritance - Meros olish
//   meal;
//   #some;
//   constructor(meal, some, name, wild, color) {
//     super(name, wild, color);
//     this.meal = meal;
//     this.#some = some;
//   }
//   say() { // 4. Polymorphiosm -
//     return this.#some;
//   }
// }

// class Quyon extends Animal { // 3. Inheritance - Meros olish
//   meal;
//   #some;
//   constructor(meal, some, name, wild, color) {
//     super(name, wild, color);
//     this.meal = meal;
//     this.#some = some;
//   }
//   say() { // 4. Polymorphiosm -
//     return this.#some;
//   }
// }

// const ayiq = new Ayiq("Fish", "any", "Ayiq", "Yovvoyi", "brown");
// console.log(ayiq);
// const quyon = new Quyon("sabzi", "any", "Quyon", "uy hayvoni", "white and black");
// console.log(quyon);

// overRight - berilgan qiyamatni ustiga yozib yuboradi.
// overLoad - yangi qo`shilgan ma`lumotni yonidan qo`shadi.

// -------------------------- Extra exercises with OOP --------------------------- //
// 1.
// class Animal {
//   name;
//   yovvoyi;
//   constructor(name, yovvoyi) {
//     this.name = name;
//     this.yovvoyi = yovvoyi;
//   }

//   sayAbout() {
//     return `Bu hayvon ${this.name}, turi esa ${this.yovvoyi}`;
//   }
// }

// const animals1 = new Animal("Ayiq", "Yovvoyi");
// const animals2 = new Animal("quyon", "Yovvoyi emas");

// console.log(animals1.sayAbout());
// console.log(animals2.sayAbout());

// 2.
// const Person = function (age, name) {
//     this.name = name;
//     this.age = age;
// }

// const person1 = new Person(24, "Dilshodbek");

// console.log(person1);

// -------------------------------- Getter & Setter ------------------------------ //
// class Car {
//   #motor;
//   constructor(window, door, tyre, motor) {
//     this.window = window;
//     this.door = door;
//     this.tyre = tyre;
//     this.#motor = motor;
//   }

//   get motors() { // Getter
//     return this.#motor;
//   }

//   set motors(moto) { // Setter
//     this.#motor = moto;
//   }
// }

// const car = new Car("6 ta", "4 ta", "4 ta", "100 ot kuchi");
// car.motors = "150 ot kuchi";
// console.log(car.motors);
