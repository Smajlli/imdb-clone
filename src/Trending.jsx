import './Trending.css'
import { useState, useEffect } from 'react';
import MovieSlider from './MovieSlider';


const apiOptions = {
    method: 'GET', 
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOTQxYjExNjU0YWNmYzgxMGU5YjJmNGQ4NDIwMGI4MyIsInN1YiI6IjY1NDBkOGI2NjNlNmZiMDBhZTUwZmIwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Irw-tikSu-2o1FYLfDZFDlq-L3jn7pjzh6ExNSBr6pk'
    }
};

function Trending() {
    const [trending, setTrending] = useState([]);

    useEffect(() => {
        async function fetchTrendingMovies() {
            const getTrendingMovies = await fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', apiOptions)
            .catch(err => console.log(err))
            const trendingMoviesJson = await getTrendingMovies.json();
            const allTrendingMovies = trendingMoviesJson;
            setTrending(allTrendingMovies.results);
        }
        fetchTrendingMovies();
    }, [])

    if(!trending || trending.length === 0) {
        return null
    } else {
        const trendingArray1 = [];
        const trendingArray2 = [];
        const trendingArray3 = [];

        for(let i = 0; i < 6; i++) {
            trendingArray1.push(trending[i]);
        }
        for (let i = 6; i < 12; i++) {
            trendingArray2.push(trending[i]);
        }
        for (let i = 12; i < 18; i++) {
            trendingArray3.push(trending[i]);
        }

        return (
            <MovieSlider moviesArray={trending} moviesArray1={trendingArray1} moviesArray2={trendingArray2} moviesArray3={trendingArray3} heading={"Trending this week"} />
        )
    }       
}

export default Trending;

