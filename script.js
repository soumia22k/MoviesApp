document.addEventListener("DOMContentLoaded", function() {
    const movies = JSON.parse(localStorage.getItem("movies")) || [];

    function saveMovies() {
        localStorage.setItem("movies", JSON.stringify(movies));
    }

    function addMovie(title, director, year, genre, ) {
        movies.push({ title, director, year, genre, });
        saveMovies();
    }

    function getMovies() {
        return movies;
    }

    function deleteMovie(index) {
        movies.splice(index, 1);
        saveMovies();
    }

    window.MovieApp = { addMovie, getMovies, deleteMovie };
});
