// while
let  counter = 1;
while (counter <= 10) {
  console.log(counter);
  counter++;
}

// do while
counter = 12;
do {
  console.log(counter);
  counter++;
} while (counter <= 10);

console.log('for loop');
// for

for (let counter = 1; counter <= 100; counter++) {
  if (counter % 2 === 1) {
    console.log(counter);
  }
}

// continue - пропуск итерации

console.log('continue');
for (let counter = 1; counter <= 100; counter++) {
  if (counter % 2 === 0) {
    continue;
  }
  console.log(counter);
}

// break - прервать цикл
console.log('break');
for (let counter = 1; counter <= 100; counter++) {
  if (counter === 70) {
    break;
    
  }
  console.log(counter);
}


