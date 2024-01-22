import './FeaturedToday.css'
import { useState, useEffect } from 'react';
import screenSize from './hooks/ScreenSize';
import FeaturedTodayCard from './FeaturedTodayCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const apiOptions = {
    method: 'GET',
    headers: {
        accept: 'application/JSON',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOTQxYjExNjU0YWNmYzgxMGU5YjJmNGQ4NDIwMGI4MyIsInN1YiI6IjY1NDBkOGI2NjNlNmZiMDBhZTUwZmIwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Irw-tikSu-2o1FYLfDZFDlq-L3jn7pjzh6ExNSBr6pk'
    }                  
};


function FeaturedToday({stars}) {
    const[upcomingMovies, setUpcomingMovies] = useState([]);
    const[shows, setShows] = useState([]);
    const[theaters, setTheaters] = useState([]);

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

        async function fetchShows() {
            const getShows = await fetch('https://api.themoviedb.org/3/trending/tv/day?language=en-US', apiOptions)
            .catch(err => console.log(err))
            const showsJson = await getShows.json();
            const allShows = showsJson;
            setShows(allShows.results);
        }
        fetchShows();

        async function fetchTheaters() {
            const getTheaters = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', apiOptions)
            .catch(err => console.log(err))
            const theatersJson = await getTheaters.json();
            const allTheaters = theatersJson;
            setTheaters(allTheaters.results)
        }
        fetchTheaters();

    }, []);


    if(!upcomingMovies || upcomingMovies.length === 0 || !stars || stars.length === 0 || !shows || shows.length === 0 || !theaters || theaters.length === 0) {
        return null 
    } else {
       if(windowSize.width > 1024 || windowSize.width === 1024) {
           return <>
               <div className='featuredTodayContainer'>
                   <div className='featuredTodayHeading'>Featured today</div>
                   <div className='featuredTodayContentContainer'>
                       <div className="featuredTodayContentWrapper">
                           <Swiper
                               modules={[Navigation, Pagination, Scrollbar, A11y]}
                               spaceBetween={50}
                               width={450}
                               slidesPerView={1}
                               style={{ width: 1250, height: 490 }}
                               navigation
                           >
                               <SwiperSlide><FeaturedTodayCard content={upcomingMovies} title={"Upcoming movies"} subTitle={"See all upcoming movies"} /></SwiperSlide>
                               <SwiperSlide><FeaturedTodayCard content={stars} title={"Popular Actors"} subTitle={"See all trending actors"} /></SwiperSlide>
                               <SwiperSlide><FeaturedTodayCard content={shows} title={"Trending TV Shows"} subTitle={"See poprular TV Shows for today"} /></SwiperSlide>
                               <SwiperSlide><FeaturedTodayCard content={theaters} title={"Now Playing"} subTitle={"See what's currently in theaters"} /></SwiperSlide>
                           </Swiper>  
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
                        <Swiper
                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                            spaceBetween={50}
                            width={500}
                            slidesPerView={1}
                            style={{ width: 1250, height: 490 }}
                            navigation
                        >
                            <SwiperSlide><FeaturedTodayCard content={upcomingMovies} title={"Upcoming movies"} subTitle={"See all upcoming movies"} /></SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
       }
    }
}

export default FeaturedToday;