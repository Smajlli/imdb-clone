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

export {fetchTopPicks, fetchTrending, fetchTv};