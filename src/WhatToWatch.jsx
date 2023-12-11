import './WhatToWatch.css'
import { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import screenSize from './hooks/ScreenSize';

const apiOptions = {
    method: 'GET',
    headers: {
        accept: 'application/JSON',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOTQxYjExNjU0YWNmYzgxMGU5YjJmNGQ4NDIwMGI4MyIsInN1YiI6IjY1NDBkOGI2NjNlNmZiMDBhZTUwZmIwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Irw-tikSu-2o1FYLfDZFDlq-L3jn7pjzh6ExNSBr6pk'
    }
};

function WhatToWatch() {
    const [topPicks, setTopPicks] = useState([]);
    const windowSize = screenSize();

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
        if(windowSize.width > 768) {
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
        } else if(windowSize.width > 425) {
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
                            <div className='whatToWatchContentWrapperButtonContainer'>
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className='whatToWatchContentWrapperButtonIcon'
                                >
                                    <path
                                        d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </div>
                            <div className="whatToWatchMovieCardContainer">
                                <MovieCard movie={topPicks[0]} />
                                <MovieCard movie={topPicks[1]} />
                                <MovieCard movie={topPicks[2]} />
                            </div>
                        </div>

                    </div>
                </div>
            </>
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
                            <div className='whatToWatchContentWrapperButtonContainer'>
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className='whatToWatchContentWrapperButtonIcon'
                                >
                                    <path
                                        d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </div>
                            <div className="whatToWatchMovieCardContainer">
                                <MovieCard movie={topPicks[0]} />
                                <MovieCard movie={topPicks[1]} />
                            </div>
                        </div>

                    </div>
                </div>
            </>
        }
    }
}

export default WhatToWatch;