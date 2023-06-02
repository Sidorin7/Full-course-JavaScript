// for (let i = 5; i <= 10; i++) {
//   console.log(i);
// }

// for (let i = 20; i > 10; i--) {
//   if (i === 13) {
//     break;
//   }
//   console.log(i);
// }

// for (let i = 2; i <= 10; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

let i = 2;
let res = 0;
while (i <= 16) {
  i++;
  if (i % 2 === 0) {
    continue;
  } else {
    console.log(i);
  }
}

let arr = [];
for (let i = 0; i <= 10; i++) {
  arr.push(i);
}
console.log(arr);
