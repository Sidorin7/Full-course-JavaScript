'use strict';

// localStorage.setItem('number', 5); // Добавили ключ: имя, значание

// // localStorage.removeItem('number') // Удаляем ключ

// localStorage.clear(); // очистили 

// console.log(localStorage.getItem('number')); // получили значение ключа 

const checkbox = document.querySelector('#checkbox'),
    form = document.querySelector('form'),
    change = document.querySelector('#color');

if (localStorage.getItem('isChecked')) {
    checkbox.checked = true;
}

if (localStorage.getItem('bg') === 'changed'){
    form.style.backgroundColor = 'red';
}

checkbox.addEventListener('change', () => {
    localStorage.setItem('isChecked', true)
});

change.addEventListener('click', () => {
    if (localStorage.getItem('bg') === 'changed'){
        localStorage.removeItem('bg');
        form.style.backgroundColor = '#fff';
    } else{
        localStorage.setItem('bg', 'changed');
        form.style.backgroundColor = 'red';
    }
});

const persone = {
    name: 'Alex',
    age: 25
};

// const serializedPersone = JSON.stringify(persone)
localStorage.setItem('alex', persone)

console.log((localStorage.getItem('alex')));