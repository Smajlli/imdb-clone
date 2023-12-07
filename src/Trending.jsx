import './Trending.css'
import { useState, useEffect } from 'react';
import MovieCard from './MovieCard';


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
        return <>
            <div className='trendingMoviesContainer'>
                <div className='trendingMoviesTitle'>Trending movies today</div>
                <div className="trendingMoviesContentWrapper">
                    <MovieCard movie={trending[0]} />
                    <MovieCard movie={trending[1]} />
                    <MovieCard movie={trending[2]} />
                    <MovieCard movie={trending[3]} />
                    <MovieCard movie={trending[4]} />
                    <MovieCard movie={trending[5]} />
                </div>
            </div>
        </>
    }
}

export default Trending;