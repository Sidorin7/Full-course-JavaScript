"use strict";

// to stinng

// 1)
console.log(typeof String(null));
console.log(typeof String(4));

// 2)
console.log(typeof (5 + ''));

const num = 5;
console.log('https://vk.com/catalog/' + num);

const fontSize = 26 + 'px';


// to Number

// 1)
console.log(typeof Number('4'));

// 2)
console.log(typeof(+'5')); // унарный плюс

// 3)
console.log(typeof(parseInt('15px', 10)));


let answ = +prompt('hello','');

// to boolean

// 0, '', null, undefined, NaN - ЭТО FALSE

// 1)
let switcher = null;

if (switcher) {  //false
  console.log('working...');
}


switcher = 1;
if (switcher) {  // true
  console.log('working...');
}

// 2)

console.log(typeof Boolean('4'));

// 3)
 console.log(typeof(!!'4444'));
