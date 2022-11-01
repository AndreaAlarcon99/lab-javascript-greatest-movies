// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directorArr = moviesArray.map(movie => movie.director)
    return directorArr
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    if (moviesArray.length === 0) {
        return 0
    }

     const spielberg = moviesArray.filter(function (movie) {
        return movie.director === 'Steven Spielberg';
    });

   const spielbergDrama = spielberg.filter(function (picture) {
        return picture.genre.includes('Drama');
   });

    return spielbergDrama.length

}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) { 
    if (moviesArray.length === 0){
        return 0
    } else {
        const filtered = moviesArray.filter((movie) => movie.score);

        const sumaScore = filtered.reduce(function (accumulator, currentValue) {
            return accumulator + currentValue.score;
          }, 0);

        const average = sumaScore / moviesArray.length;

        return Math.round(average * 100) / 100;
    }
}
    

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

    const drama = moviesArray.filter((movie) => movie.genre.includes("Drama"))

    if (drama.length == 0) {
        return 0
    }
    
    const sumScore = drama.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue.score
    }, 0)

    const dramaAverage = sumScore / drama.length
    return Number(dramaAverage.toFixed(2))

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
