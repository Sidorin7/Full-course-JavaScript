const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

let personMovieDb = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

const theLastMovie = +prompt("Один из последних просмотренных фильмов?", ""),
  ratingOfTheFilm = +prompt("На сколько его оцениваете", "");
const theLastMovie2 = +prompt("Один из последних просмотренных фильмов?", ""),
  ratingOfTheFilm2 = +prompt("На сколько его оцениваете", "");
personMovieDb.movies[theLastMovie] = ratingOfTheFilm;
personMovieDb.movies[theLastMovie2] = ratingOfTheFilm2;

console.log(personMovieDb);
