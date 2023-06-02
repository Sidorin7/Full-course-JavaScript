"use strict";

const obj = new Object();
const options = {
  name: "test",
  width: 1024,
  height: 1024,
  colors: {
    border: "black",
    bg: "red",
  },
  makeTest: function () {
    console.log("Test");
  },
};

options.makeTest();

const { border, bg } = options.colors;
console.log(border);
// console.log(options["colors"]["border"]);

delete options.name; // удаляем

console.log(options);

// let counter = 0;
// for (let key in options) {
//   // перебор ключей
//   if (typeof options[key] === "object") {
//     for (let i in options[key]) {
//       console.log(`cвойства ${i} имеет значение ${options[key][i]}`);
//     }
//   } else {
//     console.log(`cвойства ${key} имеет значение ${options[key]}`);
//     counter++;
//   }
// }
// console.log(counter);

// console.log(Object.keys(options)); // определяем все ключи в объекте
// console.log(Object.keys(options).length); // кол-во элементов в объекте

const bio = {
  surname: "Sidorn",
  hobby: {
    basic: "programming",
    sport: "box",
  },
  age: 14,
};

console.log(Object.keys(bio));
console.log(Object.keys(bio).length);
