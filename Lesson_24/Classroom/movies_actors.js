const API_key = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZjc0MWQ5MTA4OTFmY2E4ZDFjM2IzNjk1MTE2YWRjNCIsIm5iZiI6MTczNjUwNzU3Ni43OTMsInN1YiI6IjY3ODEwMGI4MTI2Njc5Njg4NTRlYzZhZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ak8XRqKjGEaCIMAXg90eC8yjfx58vRU31CjRXoz4HKA';

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + API_key
    }
};

function renderPopularMovies(movies) {

    let markup = '';
    movies.forEach(movie => {
        markup += `<div class='card'>
        <h2>${movie.original_title}</h2>
        <img src = 'https://image.tmdb.org/t/p/original${movie.poster_path}'/>
        </div>`;
    });

    const movie_grid = document.querySelector('.movie_grid');
    movie_grid.innerHTML = markup;
}


function getPopularMovies() {
    axios('https://api.themoviedb.org/3/movie/popular', options)
        .then(res => {
            if (res.status === 200) {
                renderPopularMovies(res.data.results);
            };
        });
}

function renderPopularactors_grid(actors) {


    let markup = '';

    actors.forEach(actor => {
        markup = markup + `<div class='card'>
        
            <h2>${actor.name}</h2>
            <img src = 'https://image.tmdb.org/t/p/original/${actor.profile_path}'/>
        </div>`
    })

    const actors_grid = document.querySelector('.actors_grid');
    actors_grid.innerHTML = markup;


}

function getPopularActors() {
    axios('https://api.themoviedb.org/3/person/popular?language=en-US&page=1', options)
        .then(res => {
            if (res.status === 200) {
                renderPopularactors_grid(res.data.results);
            };
        });
}


getPopularMovies();
getPopularActors();