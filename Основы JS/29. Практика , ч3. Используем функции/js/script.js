/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

"use strict";

let numberOfFilms;

function start() {
  numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
  }
}
start();
let personMovieDb = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const theLastMovie = prompt("Один из последних просмотренных фильмов?", ""),
      ratingOfTheFilm = prompt("На сколько его оцениваете", "");
    if (
      theLastMovie != null &&
      ratingOfTheFilm != null &&
      theLastMovie != "" &&
      ratingOfTheFilm != "" &&
      theLastMovie.length < 50
    ) {
      personMovieDb.movies[theLastMovie] = ratingOfTheFilm;
      console.log("done");
    } else {
      12;
      console.log("error");
      i--;
    }
  }
}
// rememberMyFilms();

function detectPersonlLevel() {
  if (personMovieDb.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
  } else if (personMovieDb.count >= 10 && personMovieDb.count < 30) {
    console.log("Вы классический зритель");
  } else if (personMovieDb.count >= 30) {
    console.log("Вы киноман");
  } else {
    console.log("Произошла ошибка");
  }
}
// detectPersonlLevel();

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personMovieDb);
  }
}
showMyDB(personMovieDb.privat);

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    const genre = (personMovieDb.genres[i - 1] = prompt(
      `Ваш любимый жанр под номером ${i}`
    ));
  }
}
writeYourGenres();
