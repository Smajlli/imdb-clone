import './WhatToWatch.css'
import { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
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
                                <Swiper
                                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                                    spaceBetween={0}
                                    width={210}
                                    slidesPerView={1}
                                    style={{width: 1250}}
                                >
                                    {topPicks.map((m) => {
                                        return <SwiperSlide><MovieCard key={m.id} movie={m} /></SwiperSlide>
                                    })}
                                </Swiper>
                            </div>
                        </div>

                    </div>
                </div>
            </>
        } 
}

export default WhatToWatch;