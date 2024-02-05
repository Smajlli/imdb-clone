import './Shows.css'
import { useEffect, useState } from 'react';
import screenSize from './hooks/ScreenSize';

const apiOptions = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOTQxYjExNjU0YWNmYzgxMGU5YjJmNGQ4NDIwMGI4MyIsInN1YiI6IjY1NDBkOGI2NjNlNmZiMDBhZTUwZmIwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Irw-tikSu-2o1FYLfDZFDlq-L3jn7pjzh6ExNSBr6pk'
    }
};

function Shows() {
    const [shows, setShows] = useState([]);
    const [topShows, setTopShows] = useState([]);

    const windowSize = screenSize();

    useEffect(() => {
        async function fetchShows() {
            const getShows = await fetch('https://api.themoviedb.org/3/tv/popular?language=en-US&page=1', apiOptions)
            .catch(err => console.log(err));
            const showsJson = await getShows.json();
            const allShows = showsJson;
            setShows(allShows.results);
        }
        fetchShows();

        async function fetchTopShows() {
            const getTopShows = await fetch('https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1', apiOptions)
            .catch(err => console.log(err));
            const topShowsJson = await getTopShows.json();
            const allTopShows = topShowsJson;
            setTopShows(allTopShows.results);
        }
        fetchTopShows();
    }, [])

    if(!shows || shows.length === 0 || !topShows || topShows.length === 0 ) {
        return null 
    } else {
        if (windowSize.width > 1024 || windowSize.width === 1024) {
            return <>
                <div className='showsContainer'>
                    <div className='showsHeading'>TV Shows</div>
                    <div className='showsContentContainer'>
                        <div className="showsContentWrapper">
                            <div className="showsContentLeft">
                                <div className='showsContentImgGradient'></div>
                                <div className='showsImgContainer'>
                                    <img src={`https://image.tmdb.org/t/p/original${shows[0].poster_path}`} alt="showImg" className='showsImgLeft' />
                                    <img src={`https://image.tmdb.org/t/p/original${shows[1].poster_path}`} alt="showImg" className='showsImgMiddle' />
                                    <img src={`https://image.tmdb.org/t/p/original${shows[2].poster_path}`} alt="showImg" className='showsImgRight' />
                                    <div className='showsContentList'>
                                        <svg
                                            width="45"
                                            height="45"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className='showsContentListIcon'
                                        >
                                            <path d="M9 7H7V9H9V7Z" fill="currentColor" />
                                            <path d="M7 13V11H9V13H7Z" fill="currentColor" />
                                            <path d="M7 15V17H9V15H7Z" fill="currentColor" />
                                            <path d="M11 15V17H17V15H11Z" fill="currentColor" />
                                            <path d="M17 13V11H11V13H17Z" fill="currentColor" />
                                            <path d="M17 7V9H11V7H17Z" fill="currentColor" />
                                        </svg>
                                        <div className='showsContentListText'>List</div>
                                    </div>
                                </div>
                                <div className='showsContentTextContainer'>
                                    <div className='showsContentTitle'>Popular TV Shows</div>
                                    <div className='showsContentSubtitle'>See all TV Shows</div>
                                </div>
                            </div>
                            <div className="showsContentRight">
                                <div className='showsContentImgGradient'></div>
                                <div className='showsImgContainer'>
                                    <img src={`https://image.tmdb.org/t/p/original${topShows[3].poster_path}`} alt="topRatedShowImage" className='showsImgLeft' />
                                    <img src={`https://image.tmdb.org/t/p/original${topShows[4].poster_path}`} alt="topRatedShowImage" className='showsImgMiddle' />
                                    <img src={`https://image.tmdb.org/t/p/original${topShows[5].poster_path}`} alt="topRatedShowImage" className='showsImgRight' />
                                    <div className='showsContentList'>
                                        <svg
                                            width="45"
                                            height="45"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className='showsContentListIcon'
                                        >
                                            <path d="M9 7H7V9H9V7Z" fill="currentColor" />
                                            <path d="M7 13V11H9V13H7Z" fill="currentColor" />
                                            <path d="M7 15V17H9V15H7Z" fill="currentColor" />
                                            <path d="M11 15V17H17V15H11Z" fill="currentColor" />
                                            <path d="M17 13V11H11V13H17Z" fill="currentColor" />
                                            <path d="M17 7V9H11V7H17Z" fill="currentColor" />
                                        </svg>
                                        <div className='showsContentListText'>List</div>
                                    </div>
                                </div>
                                <div className='showsContentTextContainer'>
                                    <div className='showsContentTitle'>The Top Rated Shows</div>
                                    <div className='showsContentSubtitle'>See top shows</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        } else {
            return <>
                <div className='showsContainer'>
                    <div className='showsHeading'>TV Shows</div>
                    <div className='showsContentContainer'>
                        <div className="showsContentWrapper">
                            <div className="showsContentRight">
                                <div className='showsContentButtonContainer'>
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className='showsContentArrowIcon'
                                    >
                                        <path
                                            d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </div>
                                <div className='showsContentImgGradient'></div>
                                <div className='showsImgContainer'>
                                    <img src={`https://image.tmdb.org/t/p/original${topShows[0].poster_path}`} alt="actorImage" className='featuredTodayImgLeft' />
                                    <img src={`https://image.tmdb.org/t/p/original${topShows[1].poster_path}`} alt="actorImage" className='featuredTodayImgMiddle' />
                                    <img src={`https://image.tmdb.org/t/p/original${topShows[2].poster_path}`} alt="actorImage" className='featuredTodayImgRight' />
                                    <div className='showsContentList'>
                                        <svg
                                            width="45"
                                            height="45"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className='showsContentListIcon'
                                        >
                                            <path d="M9 7H7V9H9V7Z" fill="currentColor" />
                                            <path d="M7 13V11H9V13H7Z" fill="currentColor" />
                                            <path d="M7 15V17H9V15H7Z" fill="currentColor" />
                                            <path d="M11 15V17H17V15H11Z" fill="currentColor" />
                                            <path d="M17 13V11H11V13H17Z" fill="currentColor" />
                                            <path d="M17 7V9H11V7H17Z" fill="currentColor" />
                                        </svg>
                                        <div className='showsContentListText'>List</div>
                                    </div>
                                </div>
                                <div className='showsContentTextContainer'>
                                    <div className='showsContentTitle'>The Top Rated Shows</div>
                                    <div className='showsContentSubtitle'>See top shows</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        }
    }
}

export default Shows;