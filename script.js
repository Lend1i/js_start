'use strict';

let numberOfFilms;
// function start() {
//     numberOfFilms = +prompt("How many films have you watched", "");

//     while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt("How many films have you watched", "");
//     }
// }

// start();

const personalMovieDB =  {
    count: numberOfFilms,
    movies: {},
    actors: {},
    geners: [],
    privat: false
};


  
// function rememberMyFilms () {
//     for(let i =  0; i < 2; i++) {
//         const a = prompt("What last film are you watched?", ""),
//               b = +prompt("How you rate it?", "");
    
//         if(a != '' && b != '' && a != null && b != null && a.length < 50){
//             personalMovieDB.movies[a] = b;  
    
//             console.log('done');
//         } else {
//             console.log('error');
            
//             i--;
//         }
//     } 
// }
// rememberMyFilms();



// function detectedPersonalLevel() {
//     if(personalMovieDB.count < 10) {
//         console.log('You havent seen a many of movies');
//     } else if(personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
//         console.log('You are classic viewer');
//     } else if(personalMovieDB.count > 30) {
//         console.log('You are love movies');
//     } else {
//         console.log('error');
//     }
// }
// detectedPersonalLevel();



function showMyDB(hidden) {
    if(!hidden) {
        console.log(personalMovieDB.privat);
    }
}


function writeYourGeners() {
    for(let i = 1; i <= 3; i++){
        // favoriteMovie = prompt('Write your favorire gener of films', '');
        // if(favoriteGenres != '' && favoriteGenres != null && favoriteGenres.length < 10){  
            personalMovieDB.geners[i - 1] = prompt(`Your favorire gener of films number ${i}`, '');  
        // } 
    }
}

writeYourGeners();


console.log(personalMovieDB);


// (personalMovieDB.count < 10) ? console.log('You havent seen a many of movies') :
// (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) ? console.log('You are classic viewer') :
// (personalMovieDB.count >= 30000) ?  console.log('You are lier????') : 
// (personalMovieDB.count > 30) ?  console.log('Are you love movies') : 
// console.log('error');