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
import { fetchUpcomingMovies, fetchShows, fetchTheaters } from './hooks/fetchData';

function FeaturedToday({stars}) {
    const[upcomingMovies, setUpcomingMovies] = useState([]);
    const[shows, setShows] = useState([]);
    const[theaters, setTheaters] = useState([]);

    const windowSize = screenSize()

    useEffect(() => {
        fetchUpcomingMovies().then((res) => {setUpcomingMovies(res.results)});
        fetchShows().then((res) => {setShows(res.results)});
        fetchTheaters().then((res) => {setTheaters(res.results)});
    }, []);


    if(!upcomingMovies || upcomingMovies.length === 0 || !stars || stars.length === 0 || !shows || shows.length === 0 || !theaters || theaters.length === 0) {
        return null 
    } else {
           return <>
               <div className='featuredTodayContainer'>
                   <div className='featuredTodayHeading'>Featured today</div>
                   <div className='featuredTodayContentContainer'>
                       <div className="featuredTodayContentWrapper">
                           {windowSize.width > 768 ? <Swiper
                               modules={[Navigation, Pagination, Scrollbar, A11y]}
                               spaceBetween={50}
                               slidesPerView={1}
                               style={{ width: 1250, height: 350 }}
                               navigation
                               loop
                           >
                               <SwiperSlide>
                                   <div className='featuredTodayCardsContainer'>
                                       <FeaturedTodayCard content={upcomingMovies} title={"Upcoming movies"} subTitle={"See all upcoming movies"} />
                                       <FeaturedTodayCard content={stars} title={"Popular Actors"} subTitle={"See all trending actors"} />
                                   </div>
                               </SwiperSlide>
                               <SwiperSlide>
                                   <div className='featuredTodayCardsContainer'>
                                       <FeaturedTodayCard content={shows} title={"Trending TV Shows"} subTitle={"See poprular TV Shows for today"} />
                                       <FeaturedTodayCard content={theaters} title={"Now Playing"} subTitle={"See what's currently in theaters"} />
                                   </div>
                               </SwiperSlide>
                           </Swiper> : windowSize.width === 768 ? <Swiper
                               modules={[Navigation, Pagination, Scrollbar, A11y]}
                               spaceBetween={50}
                               slidesPerView={1}
                               style={{ width: 768, height: 350 }}
                               navigation
                               loop
                           >
                               <SwiperSlide>
                                   <div className='featuredTodayCardsContainer'>
                                       <FeaturedTodayCard content={upcomingMovies} title={"Upcoming movies"} subTitle={"See all upcoming movies"} />
                                   </div>
                               </SwiperSlide>
                                   <SwiperSlide>
                                       <div className='featuredTodayCardsContainer'>
                                           <FeaturedTodayCard content={stars} title={"Popular Actors"} subTitle={"See all trending actors"} />
                                       </div>
                                   </SwiperSlide>
                               <SwiperSlide>
                                   <div className='featuredTodayCardsContainer'>
                                       <FeaturedTodayCard content={shows} title={"Trending TV Shows"} subTitle={"See poprular TV Shows for today"} />
                                   </div>
                               </SwiperSlide>
                                   <SwiperSlide>
                                       <div className='featuredTodayCardsContainer'>
                                           <FeaturedTodayCard content={theaters} title={"Now Playing"} subTitle={"See what's currently in theaters"} />
                                       </div>
                                   </SwiperSlide>
                               </Swiper> : windowSize.width === 425 ? <Swiper
                                   modules={[Navigation, Pagination, Scrollbar, A11y]}
                                   spaceBetween={50}
                                   slidesPerView={1}
                                   style={{ width: 425, height: 350 }}
                                   navigation
                                   loop
                               >
                                   <SwiperSlide>
                                       <div className='featuredTodayCardsContainer'>
                                           <FeaturedTodayCard content={upcomingMovies} title={"Upcoming movies"} subTitle={"See all upcoming movies"} />
                                       </div>
                                   </SwiperSlide>
                                   <SwiperSlide>
                                       <div className='featuredTodayCardsContainer'>
                                           <FeaturedTodayCard content={stars} title={"Popular Actors"} subTitle={"See all trending actors"} />
                                       </div>
                                   </SwiperSlide>
                                   <SwiperSlide>
                                       <div className='featuredTodayCardsContainer'>
                                           <FeaturedTodayCard content={shows} title={"Trending TV Shows"} subTitle={"See poprular TV Shows for today"} />
                                       </div>
                                   </SwiperSlide>
                                   <SwiperSlide>
                                       <div className='featuredTodayCardsContainer'>
                                           <FeaturedTodayCard content={theaters} title={"Now Playing"} subTitle={"See what's currently in theaters"} />
                                       </div>
                                   </SwiperSlide>
                               </Swiper> : null}
                       </div>
                   </div>
               </div>
           </>
    }
}

export default FeaturedToday;