"use strict";

if (1) {
  console.log("ok!");
} else {
  console.log("error");
}

// if (num < 49) {
//   console.log("error");
// } else if (num > 100) {
//   console.log("many");
// } else {
//   console.log("ok");
// }

// num === 50 ? console.log("ok") : console.log("error"); // Тернарный оператор

const num = "50";
switch (num) {
  case "49":
    console.log("неверно");
    break;
  case "100":
    console.log("неверно");
    break;
  case "50":
    console.log("в точку");
    break;

  default:
    console.log("не в этот раз");
    break;
}
