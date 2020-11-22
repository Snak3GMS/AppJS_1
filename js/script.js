/* jshint -W097 */ 
"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == null || numberOfFilms == '' || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function watchedFilms() {
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
}

watchedFilms();

function viewerScore() {
    if (personalMovieDB.count < 10 && personalMovieDB.count != 0) {
        alert('Просмотренно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        alert('Вы классический зритель');
    } else if (personalMovieDB.count >= 30 ) {
        alert('Вы киноман');
    } else { 
        alert('Вы не смотрите фильмы');
    }
}

viewerScore();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

function writeYourGeenres() {
    for (let i=0; i < 3; i++) {
    personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1}?`);
    }
}

writeYourGeenres();

showMyDB(personalMovieDB.privat);


