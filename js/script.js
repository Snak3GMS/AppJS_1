/* jshint -W097 */ 
"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i=0; i < numberOfFilms; i++) {
    let a = '',
        b = '';

    while (a == null || a.length == 0 || a.length > 50) {
        a = prompt('Один из последних просмотренных фильмов?', '');
    }

    while (b == null || b.length == 0 || b.length > 50) {
        b = prompt('На сколько вы его оцените?', '');
    }

    personalMovieDB.movies[a] = b;
}

console.log(personalMovieDB);
if (personalMovieDB.count < 10 && personalMovieDB.count != 0) {
    alert('Просмотренно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    alert('Вы классический зритель');
} else if (personalMovieDB.count >= 30 ) {
    alert('Вы киноман');
} else { 
    alert('Вы не смотрите фильмы');
}
