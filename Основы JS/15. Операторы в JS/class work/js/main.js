"use strict";

console.log("arr" + " - object");
console.log(4 + +"5"); // Унарный + (второй)

let incr = 10,
  decr = 10;

// incr++; // Инкримент
// decr--; // Декримент

// ++incr;
// --decr;
// Постфиксная форма сначало возращает старое значение, после этого она увеличивает
console.log(incr++);

console.log(--decr);

console.log(5 % 2);

console.log(2 + 2 * 2 !== "6");

// && - оператор И
// || - оператор ИЛИ

const isChecked = false,
  isClose = false;

console.log(isChecked && isClose);
console.log(isChecked || isClose);

console.log(isChecked || !isClose);
