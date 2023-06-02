"use strict";

const arr = [10, 12, 3, 5, 6, 8];
arr.sort();
console.log(arr);

function compareNum(a, b) {
  return a - b;
}
// ----------- Так не делаем !!! -----------
// arr[99] = 0;
// console.log(arr.length);
// console.log(arr);
// ----------- Так не делаем !!!(close) -----------
arr.forEach(function (item, i, arr) {
  // 1 - аргумент(любой по смыслу) 2 - номер по порядку(сохраняет) 3 - ссылка на массив, который перебираем
  console.log(`${i}: ${item} внутри массива ${arr}`);
});
// arr.pop();
// arr.push(10);
// console.log(arr);

// ----------- Одно и тоже -----------
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

for (let value of arr) {
  console.log(value);
}
// ----------- Одно и тоже(close) -----------

// const str = prompt("", "");
// const products = str.split(", ");
// products.sort(); // сортировка по алфавиту
// console.log(products.join("; ")); // склеили массив через точку запятой
