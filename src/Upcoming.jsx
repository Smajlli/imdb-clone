import './Upcoming.css'
import { useState, useEffect } from 'react';
import screenSize from './hooks/ScreenSize';

const apiOptions = {
    method: 'GET', 
    headers: {
        accept: 'application/json', 
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOTQxYjExNjU0YWNmYzgxMGU5YjJmNGQ4NDIwMGI4MyIsInN1YiI6IjY1NDBkOGI2NjNlNmZiMDBhZTUwZmIwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Irw-tikSu-2o1FYLfDZFDlq-L3jn7pjzh6ExNSBr6pk'
    }
};

function Upcoming() { 
    const [upcoming, setUpcoming] = useState([]);
    const windowSize = screenSize();

    useEffect(() => {
        async function fetchUpcomingMovies() {
            const getUpcomingMovies = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', apiOptions)
            .catch(err => console.log(err))
            const upcomingMoviesJson = await getUpcomingMovies.json();
            const allUpcomingMovies = upcomingMoviesJson;
            setUpcoming(allUpcomingMovies.results);
        }
        fetchUpcomingMovies();
    }, [])

    if(!upcoming || upcoming.length === 0) {
        return null 
    } else {
        if(windowSize.width > 1025) {
            return <>
                <div className='upcomingContainer'>
                    <div className='upcomingHeading'>Coming soon to theaters</div>
                    <div className='upcomingSubheading'>Trailers for upcoming releases</div>
                    <div className='upcomingContentContainer'>
                        <div className='upcomingContentElement'>
                            <div className='upcomingImgContainer'>
                                <svg
                                    width="28"
                                    height="28"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className='upcomingPlayIcon'
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23Z"
                                        fill="currentColor"
                                    />
                                    <path d="M16 12L10 16.3301V7.66987L16 12Z" fill="currentColor" />
                                </svg>
                                <div className='upcomingImgGradient'></div>
                                <img src={`https://image.tmdb.org/t/p/original${upcoming[0].poster_path}`} alt='upcomingMovieImg' />
                            </div>
                            <div className='upcomingContentTitle'>{upcoming[0].title}</div>
                            <div className='upcomingContentSubtitle'>Watch trailer</div>
                        </div>
                        <div className='upcomingContentElement'>
                            <div className='upcomingImgContainer'>
                                <svg
                                    width="28"
                                    height="28"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className='upcomingPlayIcon'
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23Z"
                                        fill="currentColor"
                                    />
                                    <path d="M16 12L10 16.3301V7.66987L16 12Z" fill="currentColor" />
                                </svg>
                                <div className='upcomingImgGradient'></div>
                                <img src={`https://image.tmdb.org/t/p/original${upcoming[1].poster_path}`} alt='upcomingMovieImg' />
                            </div>
                            <div className='upcomingContentTitle'>{upcoming[1].title}</div>
                            <div className='upcomingContentSubtitle'>Watch trailer</div>
                        </div>
                        <div className='upcomingContentElement'>
                            <div className='upcomingImgContainer'>
                                <svg
                                    width="28"
                                    height="28"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className='upcomingPlayIcon'
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23Z"
                                        fill="currentColor"
                                    />
                                    <path d="M16 12L10 16.3301V7.66987L16 12Z" fill="currentColor" />
                                </svg>
                                <div className='upcomingImgGradient'></div>
                                <img src={`https://image.tmdb.org/t/p/original${upcoming[2].poster_path}`} alt='upcomingMovieImg' />
                            </div>
                            <div className='upcomingContentTitle'>{upcoming[2].title}</div>
                            <div className='upcomingContentSubtitle'>Watch trailer</div>
                        </div>
                    </div>
                </div>
            </>
        } else if(windowSize.width > 768) {
            return <>
                <div className='upcomingContainer'>
                    <div className='upcomingHeading'>Coming soon to theaters</div>
                    <div className='upcomingSubheading'>Trailers for upcoming releases</div>
                    <div className='upcomingContentContainer'>
                        <div className='upcomingContentElement'>
                            <div className='upcomingImgContainer'>
                                <svg
                                    width="28"
                                    height="28"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className='upcomingPlayIcon'
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23Z"
                                        fill="currentColor"
                                    />
                                    <path d="M16 12L10 16.3301V7.66987L16 12Z" fill="currentColor" />
                                </svg>
                                <div className='upcomingImgGradient'></div>
                                <img src={`https://image.tmdb.org/t/p/original${upcoming[0].poster_path}`} alt='upcomingMovieImg' />
                            </div>
                            <div className='upcomingContentTitle'>{upcoming[0].title}</div>
                            <div className='upcomingContentSubtitle'>Watch trailer</div>
                        </div>
                        <div className='upcomingContentElement'>
                            <div className='upcomingImgContainer'>
                                <svg
                                    width="28"
                                    height="28"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className='upcomingPlayIcon'
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23Z"
                                        fill="currentColor"
                                    />
                                    <path d="M16 12L10 16.3301V7.66987L16 12Z" fill="currentColor" />
                                </svg>
                                <div className='upcomingImgGradient'></div>
                                <img src={`https://image.tmdb.org/t/p/original${upcoming[1].poster_path}`} alt='upcomingMovieImg' />
                            </div>
                            <div className='upcomingContentTitle'>{upcoming[1].title}</div>
                            <div className='upcomingContentSubtitle'>Watch trailer</div>
                        </div>
                    </div>
                </div>
            </>
        } else {
            return <>
                <div className='upcomingContainer'>
                    <div className='upcomingHeading'>Coming soon to theaters</div>
                    <div className='upcomingSubheading'>Trailers for upcoming releases</div>
                    <div className='upcomingContentContainer'>
                        <div className='upcomingContentElement'>
                            <div className='upcomingImgContainer'>
                                <div className='upcomingImgContainerButton'>
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className='upcomingImgContainerButtonIcon'
                                    >
                                        <path
                                            d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </div>
                                <svg
                                    width="28"
                                    height="28"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className='upcomingPlayIcon'
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23Z"
                                        fill="currentColor"
                                    />
                                    <path d="M16 12L10 16.3301V7.66987L16 12Z" fill="currentColor" />
                                </svg>
                                <div className='upcomingImgGradient'></div>
                                <img src={`https://image.tmdb.org/t/p/original${upcoming[0].poster_path}`} alt='upcomingMovieImg' />
                            </div>
                            <div className='upcomingContentTitle'>{upcoming[0].title}</div>
                            <div className='upcomingContentSubtitle'>Watch trailer</div>
                        </div>
                    </div>
                </div>
            </>
        }
    }

}

export default Upcoming;