'use strict';

// function* generatoe() {
//     yield 'S';
//     yield 'c';
//     yield 'r';
//     yield 'i';
//     yield 'p';
//     yield 't';
// }

// const str = generatoe();

// console.log(str.next().value); // S
// // console.log(str.next());
// // console.log(str.next());
// // console.log(str.next());
// // console.log(str.next());
// // console.log(str.next());
// // console.log(str.next());

function* count(n) {
    for (let i = 0; i < n; i++) {
        yield i;
    }
}


for (let k  of count(7)) {
    console.log(k);
}
// const counter = count(7);

// console.log(counter.next().value); 
// console.log(counter.next().value); 
// console.log(counter.next().value); 
