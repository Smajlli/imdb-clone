import './FeaturedToday.css'
import { useState, useEffect } from 'react';
import screenSize from './hooks/ScreenSize';

const apiOptions = {
    method: 'GET',
    headers: {
        accept: 'application/JSON',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOTQxYjExNjU0YWNmYzgxMGU5YjJmNGQ4NDIwMGI4MyIsInN1YiI6IjY1NDBkOGI2NjNlNmZiMDBhZTUwZmIwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Irw-tikSu-2o1FYLfDZFDlq-L3jn7pjzh6ExNSBr6pk'
    }                  
};


function FeaturedToday({stars}) {
    const[upcomingMovies, setUpcomingMovies] = useState([]);
    const windowSize = screenSize()

    useEffect(() => {
        async function fetchUpcomingMovies() {
            const getMovies = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', apiOptions)
                .catch(err => console.log(err))
            const moviesJson = await getMovies.json();
            const upcomingMovies = moviesJson;
            setUpcomingMovies(upcomingMovies.results);
        }
        fetchUpcomingMovies();
    }, []);


    if(!upcomingMovies || upcomingMovies.length === 0 && !stars || stars.length === 0) {
        return null 
    } else {
       if(windowSize.width > 1024 || windowSize.width === 1024) {
           return <>
               <div className='featuredTodayContainer'>
                   <div className='featuredTodayHeading'>Featured today</div>
                   <div className='featuredTodayContentContainer'>
                       <div className="featuredTodayContentWrapper">
                           <div className="featuredTodayContentLeft">
                               <div className='featuredTodayContentImgGradient'></div>
                               <div className='featuredTodayImgContainer'>
                                   <img src={`https://image.tmdb.org/t/p/original${upcomingMovies[0].poster_path}`} alt="upcomingMovieImg" className='featuredTodayImgLeft' />
                                   <img src={`https://image.tmdb.org/t/p/original${upcomingMovies[1].poster_path}`} alt="upcomingMovieImg" className='featuredTodayImgMiddle' />
                                   <img src={`https://image.tmdb.org/t/p/original${upcomingMovies[2].poster_path}`} alt="upcomingMovieImg" className='featuredTodayImgRight' />
                                   <div className='featuredTodayContentList'>
                                       <svg
                                           width="45"
                                           height="45"
                                           viewBox="0 0 24 24"
                                           fill="none"
                                           xmlns="http://www.w3.org/2000/svg"
                                           className='featuredTodayContentListIcon'
                                       >
                                           <path d="M9 7H7V9H9V7Z" fill="currentColor" />
                                           <path d="M7 13V11H9V13H7Z" fill="currentColor" />
                                           <path d="M7 15V17H9V15H7Z" fill="currentColor" />
                                           <path d="M11 15V17H17V15H11Z" fill="currentColor" />
                                           <path d="M17 13V11H11V13H17Z" fill="currentColor" />
                                           <path d="M17 7V9H11V7H17Z" fill="currentColor" />
                                       </svg>
                                       <div className='featuredTodayContentListText'>List</div>
                                   </div>
                               </div>
                               <div className='featuredTodayContentTextContainer'>
                                   <div className='featuredTodayContentTitle'>Upcoming movies</div>
                                   <div className='featuredTodayContentSubtitle'>See all upcoming movies</div>
                               </div>
                           </div>
                           <div className="featuredTodayContentRight">
                               <div className='featuredTodayContentImgGradient'></div>
                               <div className='featuredTodayImgContainer'>
                                   <img src={`https://image.tmdb.org/t/p/original${stars[0].profile_path}`} alt="actorImage" className='featuredTodayImgLeft' />
                                   <img src={`https://image.tmdb.org/t/p/original${stars[1].profile_path}`} alt="actorImage" className='featuredTodayImgMiddle' />
                                   <img src={`https://image.tmdb.org/t/p/original${stars[2].profile_path}`} alt="actorImage" className='featuredTodayImgRight' />
                                   <div className='featuredTodayContentList'>
                                       <svg
                                           width="45"
                                           height="45"
                                           viewBox="0 0 24 24"
                                           fill="none"
                                           xmlns="http://www.w3.org/2000/svg"
                                           className='featuredTodayContentListIcon'
                                       >
                                           <path d="M9 7H7V9H9V7Z" fill="currentColor" />
                                           <path d="M7 13V11H9V13H7Z" fill="currentColor" />
                                           <path d="M7 15V17H9V15H7Z" fill="currentColor" />
                                           <path d="M11 15V17H17V15H11Z" fill="currentColor" />
                                           <path d="M17 13V11H11V13H17Z" fill="currentColor" />
                                           <path d="M17 7V9H11V7H17Z" fill="currentColor" />
                                       </svg>
                                       <div className='featuredTodayContentListText'>List</div>
                                   </div>
                               </div>
                               <div className='featuredTodayContentTextContainer'>
                                   <div className='featuredTodayContentTitle'>The Top Stars of 2023</div>
                                   <div className='featuredTodayContentSubtitle'>See top stars</div>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
           </>
       } else {
        return <>
            <div className='featuredTodayContainer'>
                <div className='featuredTodayHeading'>Featured today</div>
                <div className='featuredTodayContentContainer'>
                    <div className="featuredTodayContentWrapper">
                        <div className="featuredTodayContentRight">
                            <div className='featuredTodayContentButtonContainer'>
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className='featuredTodayContentArrowIcon'
                                >
                                    <path
                                        d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </div>
                            <div className='featuredTodayContentImgGradient'></div>
                            <div className='featuredTodayImgContainer'>
                                <img src={`https://image.tmdb.org/t/p/original${stars[0].profile_path}`} alt="actorImage" className='featuredTodayImgLeft' />
                                <img src={`https://image.tmdb.org/t/p/original${stars[1].profile_path}`} alt="actorImage" className='featuredTodayImgMiddle' />
                                <img src={`https://image.tmdb.org/t/p/original${stars[2].profile_path}`} alt="actorImage" className='featuredTodayImgRight' />
                                <div className='featuredTodayContentList'>
                                    <svg
                                        width="45"
                                        height="45"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className='featuredTodayContentListIcon'
                                    >
                                        <path d="M9 7H7V9H9V7Z" fill="currentColor" />
                                        <path d="M7 13V11H9V13H7Z" fill="currentColor" />
                                        <path d="M7 15V17H9V15H7Z" fill="currentColor" />
                                        <path d="M11 15V17H17V15H11Z" fill="currentColor" />
                                        <path d="M17 13V11H11V13H17Z" fill="currentColor" />
                                        <path d="M17 7V9H11V7H17Z" fill="currentColor" />
                                    </svg>
                                    <div className='featuredTodayContentListText'>List</div>
                                </div>
                            </div>
                            <div className='featuredTodayContentTextContainer'>
                                <div className='featuredTodayContentTitle'>The Top Stars of 2023</div>
                                <div className='featuredTodayContentSubtitle'>See top stars</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
       }
    }
}

export default FeaturedToday;