const apiOptions = {
    method: 'GET',
    headers: {
        accept: 'application/JSON',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOTQxYjExNjU0YWNmYzgxMGU5YjJmNGQ4NDIwMGI4MyIsInN1YiI6IjY1NDBkOGI2NjNlNmZiMDBhZTUwZmIwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Irw-tikSu-2o1FYLfDZFDlq-L3jn7pjzh6ExNSBr6pk'
    }
};

async function fetchTopPicks() {
    const getTopPicks = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', apiOptions)
        .catch(err => console.log(err));
    const topPicksJson = await getTopPicks.json();
    const allTopPicks = topPicksJson;
    return allTopPicks;
}

async function fetchTrending() {
    const getTrending = await fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', apiOptions)
        .catch(err => console.log(err));
    const trendingJson = await getTrending.json();
    const allTrending = trendingJson;
    return allTrending;
}

async function fetchTv() {
    const getTv = await fetch('https://api.themoviedb.org/3/trending/tv/day?language=en-US', apiOptions)
        .catch((err) => console.log(err));
    const tvJson = await getTv.json();
    const allTv = tvJson;
    return allTv;
}

async function fetchMovies() {
    const getMovies = await fetch('https://api.themoviedb.org/3/movie/popular?laguange=en-US&page=1', apiOptions)
        .catch((err) => console.log(err))
    const moviesJson = await getMovies.json();
    const allMovies = moviesJson;
    return allMovies;
}

async function fetchActors() {
    const getActors = await fetch('https://api.themoviedb.org/3/trending/person/day?language=en-US&page=1', apiOptions)
        .catch((err) => console.log(err))
    const actorsJson = await getActors.json();
    const allActors = actorsJson;
    return allActors;
}

async function fetchShows() {
    const getShows = await fetch('https://api.themoviedb.org/3/tv/popular?language=en-US&page=1', apiOptions)
        .catch((err) => console.log(err))
    const showsJson = await getShows.json();
    const allShows = showsJson;
    return allShows;
}

async function fetchTopShows() {
    const getTopShows = await fetch('https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1', apiOptions)
        .catch((err) => console.log(err))
    const topShowsJson = await getTopShows.json();
    const allTopShows = topShowsJson;
    return allTopShows;
}

async function fetchUpcomingMovies() {
    const getUpcomingMovies = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', apiOptions)
        .catch((err) => console.log(err))
    const upcomingMoviesJson = await getUpcomingMovies.json();
    const allUpcomingMovies = upcomingMoviesJson;
    return allUpcomingMovies;
}

async function fetchTheaters() {
    const getTheaters = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', apiOptions)
        .catch((err) => console.log(err))
    const theatersJson = await getTheaters.json();
    const allTheaters = theatersJson;
    return allTheaters;
}

async function fetchPopularMovies() {
    const getPopularMovies = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', apiOptions)
        .catch((err) => console.log(err))
    const popularMoviesJson = await getPopularMovies.json();
    const allPopularMovies = popularMoviesJson;
    return allPopularMovies;
}

async function fetchRevenue(id) {
    const getRevenue = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=c941b11654acfc810e9b2f4d84200b83`)
        .catch((err) => console.log(err))
    const revenueJson = await getRevenue.json();
    const allRevenue = revenueJson;
    return allRevenue;
}

export {fetchTopPicks, fetchTrending, fetchTv, fetchMovies, fetchActors, fetchShows, fetchTopShows, fetchUpcomingMovies, fetchTheaters, fetchPopularMovies, fetchRevenue};