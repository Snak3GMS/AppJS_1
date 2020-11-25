/* jshint -W097 */ 
"use strict";


const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

        while (personalMovieDB.count == null || !personalMovieDB.count || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
            }
    },
    watchedFilms: function() {
        for (let i=0; i < personalMovieDB.count; i++) {
            let a = '',
                b = '';
        
            while (a == null || !a || a.length > 50) {
                a = prompt('Один из последних просмотренных фильмов?', '');
            }
        
            while (b == null || !b || b.length > 50) {
                b = prompt('На сколько вы его оцените?', '');
            }
        
            personalMovieDB.movies[a] = b;
        }
    },
    viewerScore: function() {
        if (personalMovieDB.count < 10 && personalMovieDB.count != 0) {
            alert('Просмотренно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            alert('Вы классический зритель');
        } else if (personalMovieDB.count >= 30 ) {
            alert('Вы киноман');
        } else { 
            alert('Вы не смотрите фильмы');
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },    
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {personalMovieDB.privat = false;}
        else {personalMovieDB.privat = true;}
    },
    writeYourGenres: function() {
        for (let i=0; i < 1; i++) {
            let genres = prompt(`Введите ваши любимые жанры фильмов через запятую, в формате: \', \'`).toLowerCase();
            if (!genres || genres == null) {
                console.log('Вы ввели некоректные данные или не ввели их вовсе');
                i--;
            } else {
                personalMovieDB.genres = genres.split(', ');
                personalMovieDB.genres.sort((a, b) => a - b);
            }
        }
        personalMovieDB.genres.forEach(function (item, key) {
            console.log(`Любимый жанр ${key+1} - это ${item}`);
        });
    }
};
personalMovieDB.start();
personalMovieDB.writeYourGenres();
personalMovieDB.showMyDB();
personalMovieDB.watchedFilms();






