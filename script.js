const numberOfFilms = +prompt("How many films have you watched", "");

const personalMovieDB =  {
    count: numberOfFilms,
    movies: {},
    actors: {},
    geners: [],
    privat: false
};

const a = prompt("What last film are you watched?", ""),
      b = +prompt("How you rate it?", ""),
      c = prompt("What last film are you watched?", ""),
      d = +prompt("How you rate it?", "");

personalMovieDB.movies[a] = b;

personalMovieDB.movies[c] = d;



console.log(personalMovieDB);