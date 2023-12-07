import './WhatToWatch.css'
import { useState, useEffect } from 'react';
import MovieCard from './MovieCard';

const apiOptions = {
    method: 'GET',
    headers: {
        accept: 'application/JSON',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOTQxYjExNjU0YWNmYzgxMGU5YjJmNGQ4NDIwMGI4MyIsInN1YiI6IjY1NDBkOGI2NjNlNmZiMDBhZTUwZmIwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Irw-tikSu-2o1FYLfDZFDlq-L3jn7pjzh6ExNSBr6pk'
    }
};

function WhatToWatch() {
    const [topPicks, setTopPicks] = useState([]);

    useEffect(() => {
        async function fetchTopPicks() {
            const getTopPicks = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', apiOptions)
            .catch(err => console.log(err))
            const topPicksJson = await getTopPicks.json();
            const allTopPicks = topPicksJson;
            setTopPicks(allTopPicks.results);
        }
        fetchTopPicks();
    }, [])

    if(!topPicks || topPicks.length === 0) {
        return null
    } else {
        return <>
            <div className='whatToWatchContainer'>
                <div className="whatToWatchContentContainer">
                    <div className='whatToWatchTitle'>What to watch</div>
                    <div className="whatToWatchSubtitleContainer">
                        <div className="whatToWatchTopPicksText">
                            Top picks
                        </div>
                        <div className='whatToWatchText'>TV shows and movies just for you</div>
                    </div>
                    <div className="whatToWatchContentWrapper">
                        <div className="whatToWatchMovieCardContainer">
                            <MovieCard movie={topPicks[0]} />
                            <MovieCard movie={topPicks[1]} />
                            <MovieCard movie={topPicks[2]} />
                            <MovieCard movie={topPicks[3]} />
                            <MovieCard movie={topPicks[4]} />
                            <MovieCard movie={topPicks[5]} />
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    }
}

export default WhatToWatch;