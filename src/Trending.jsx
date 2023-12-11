import './Trending.css'
import { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import screenSize from './hooks/ScreenSize';


const apiOptions = {
    method: 'GET', 
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOTQxYjExNjU0YWNmYzgxMGU5YjJmNGQ4NDIwMGI4MyIsInN1YiI6IjY1NDBkOGI2NjNlNmZiMDBhZTUwZmIwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Irw-tikSu-2o1FYLfDZFDlq-L3jn7pjzh6ExNSBr6pk'
    }
};

function Trending() {
    const [trending, setTrending] = useState([]);
    const windowSize = screenSize();

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
        if(windowSize.width > 768) {
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
        } else if(windowSize.width > 425) {
            return <>
                <div className='trendingMoviesContainer'>
                    <div className='trendingMoviesTitle'>Trending movies today</div>
                    <div className="trendingMoviesContentWrapper">
                        <div className='trendingMoviesContentWrapperButtonContainer'>
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className='trendingMoviesContentWrapperButtonIcon'
                            >
                                <path
                                    d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </div>
                        <MovieCard movie={trending[0]} />
                        <MovieCard movie={trending[1]} />
                        <MovieCard movie={trending[2]} />
                    </div>
                </div>
            </>
        } else {
            return <>
                <div className='trendingMoviesContainer'>
                    <div className='trendingMoviesTitle'>Trending movies today</div>
                    <div className="trendingMoviesContentWrapper">
                        <div className='trendingMoviesContentWrapperButtonContainer'>
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className='trendingMoviesContentWrapperButtonIcon'
                            >
                                <path
                                    d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </div>
                        <MovieCard movie={trending[0]} />
                        <MovieCard movie={trending[1]} />
                    </div>
                </div>
            </>
        }
    }
}

export default Trending;