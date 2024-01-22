import './BoxOffice.css'
import { useState, useEffect } from 'react';

const apiOptions = {
    method: 'GET', 
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOTQxYjExNjU0YWNmYzgxMGU5YjJmNGQ4NDIwMGI4MyIsInN1YiI6IjY1NDBkOGI2NjNlNmZiMDBhZTUwZmIwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Irw-tikSu-2o1FYLfDZFDlq-L3jn7pjzh6ExNSBr6pk' 
    }
};

function BoxOffice() {
    const[boxOfficeMovies, setBoxOfficeMovies] = useState([]);
    const[movieRevenue, setMovieRevenue] = useState([]);

    useEffect(() => {
        async function fetchPopularMovies() {
            const getPopularMovies = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', apiOptions)
            .catch(err => console.log(err))
            const popularMoviesJson = await getPopularMovies.json();
            const allPopularMovies = popularMoviesJson;
            setBoxOfficeMovies(allPopularMovies.results);
        }
        fetchPopularMovies();
    }, [])

    useEffect(() => {
        if(boxOfficeMovies.length != 0) {
            async function fetchRevenue(id) { 
                const getRevenue = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=c941b11654acfc810e9b2f4d84200b83`)
                .catch(err => console.log(err))
                const revenueJson = await getRevenue.json();
                const allRevenue = revenueJson.results;
                setMovieRevenue((curr) => [
                    ...curr, allRevenue
                ])
            }
            async function makeRevenue() {
                const revenueData = await Promise.all(boxOfficeMovies.map(m => fetchRevenue(m.id)));
                setMovieRevenue(revenueData);
            }

            makeRevenue();
        }
    }, [boxOfficeMovies])
}
export default BoxOffice;