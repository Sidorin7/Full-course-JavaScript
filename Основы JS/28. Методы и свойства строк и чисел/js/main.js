"use strict";

const str = "teSt";
const arr = [1, 33, 53, 3, 4];
console.log(arr.length); // кол-во элементов

// console.log(str[2]);
// console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str);

const fruit = "Some fruit";
console.log(fruit.indexOf("q"));

const logg = "Hello world";

console.log(logg.slice(6, 11));
const fullName = "Ivan Sidorin";
console.log(fullName.slice(5));

// console.log(logg.slice(-5, -1));

// console.log(logg.substring(6, 11));

console.log(logg.substr(6, 5));

const num = 12.2;
console.log(Math.round(num));

const test = "12.2px";
console.log(parseInt(test));
console.log(parseFloat(test));
