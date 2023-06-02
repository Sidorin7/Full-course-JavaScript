// const hamburger = 5;
// const fries = 0;

// if (hamburger && fries) {
//   // и
//   console.log("Я сыт!");
// }

// const hamburger = 3;
// const fries = 1;
// const cola = 1;

// console.log(hamburger === 3 && cola && fries); // все аргументы правдивы, программа останавливаться на последнем (fries) и выводит значение

// console.log(1 && 0);
// console.log(1 && 5);
// console.log(null && 5);
// console.log(0 && "dfryethgdfghfh");
// if (hamburger === 3 && cola === 1 && fries) {
//   // и
//   console.log("все сыты!");
// } else {
//   console.log("мы уходим");
// }

const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggerts = 2;

if ((hamburger === 3 && cola === 2) || (fries === 3 && nuggerts)) {
  // и
  console.log("все довольны!");
} else {
  console.log("мы уходим");
}

console.log(hamburger === 3 && cola === 2) || (fries === 3 && nuggerts);
// ---------------------------ПРАВИЛО---------------------------
// ИЛИ запинается на правде
// И запинается на лже

let johnReport,
  alexReport,
  samReport,
  mariaRepoert = "done";

console.log(johnReport || alexReport || samReport || mariaRepoert);

console.log(!0); // true
