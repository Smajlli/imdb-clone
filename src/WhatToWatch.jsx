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
        const topPicksArray1 = [];
        const topPicksArray2 = [];
        const topPicksArray3 = [];

        for(let i = 0; i < 6; i++) {
            topPicksArray1.push(topPicks[i]);
        }
        for (let i = 6; i < 12; i++) {
            topPicksArray2.push(topPicks[i]);
        }
        for (let i = 12; i < 18; i++) {
            topPicksArray3.push(topPicks[i]);
        }
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
                            <div className="whatToWatchMovieCardWrapper">
                            {windowSize.width >= 1024 ? <Swiper
                                modules={[Navigation, Pagination, Scrollbar, A11y]}
                                spaceBetween={50}
                                slidesPerView={1}
                                style={{ width: 1024, height: 490 }}
                                navigation
                                loop
                            >
                                <SwiperSlide>
                                    <div className='whatToWatchMovieCardsContainer'>
                                        <div className='whatToWatchMovieCardsContainerContent'>
                                            {topPicksArray1.map((m) => {
                                                return <MovieCard movie={m} />
                                            })}
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='whatToWatchMovieCardsContainer'>
                                        <div className='whatToWatchMovieCardsContainerContent'>
                                            {topPicksArray2.map((m) => {
                                                return <MovieCard movie={m} />
                                            })}
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='whatToWatchMovieCardsContainer'>
                                        <div className='whatToWatchMovieCardsContainerContent'>
                                            {topPicksArray3.map((m) => {
                                                return <MovieCard movie={m} />
                                            })}
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper> : windowSize.width === 768 ? <Swiper
                                modules={[Navigation, Pagination, Scrollbar, A11y]}
                                spaceBetween={0}
                                slidesPerView={4}
                                style={{ width: 750, height: 490 }}
                                loop
                            >
                                <SwiperSlide> <MovieCard movie={topPicks[0]} /> </SwiperSlide>
                                <SwiperSlide> <MovieCard movie={topPicks[1]} /> </SwiperSlide>
                                <SwiperSlide> <MovieCard movie={topPicks[2]} /> </SwiperSlide>
                                <SwiperSlide> <MovieCard movie={topPicks[3]} /> </SwiperSlide>
                                <SwiperSlide> <MovieCard movie={topPicks[4]} /> </SwiperSlide>
                                <SwiperSlide> <MovieCard movie={topPicks[5]} /> </SwiperSlide>
                                <SwiperSlide> <MovieCard movie={topPicks[6]} /> </SwiperSlide>
                                <SwiperSlide> <MovieCard movie={topPicks[7]} /> </SwiperSlide>
                                <SwiperSlide> <MovieCard movie={topPicks[8]} /> </SwiperSlide>
                                <SwiperSlide> <MovieCard movie={topPicks[9]} /> </SwiperSlide>
                                </Swiper> : windowSize.width === 425 ? <Swiper
                                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                                    spaceBetween={0}
                                    slidesPerView={2}
                                    style={{ width: 420, height: 490 }}
                                    loop
                                >
                                    <SwiperSlide> <MovieCard movie={topPicks[0]} /> </SwiperSlide>
                                    <SwiperSlide> <MovieCard movie={topPicks[1]} /> </SwiperSlide>
                                    <SwiperSlide> <MovieCard movie={topPicks[2]} /> </SwiperSlide>
                                    <SwiperSlide> <MovieCard movie={topPicks[3]} /> </SwiperSlide>
                                    <SwiperSlide> <MovieCard movie={topPicks[4]} /> </SwiperSlide>
                                    <SwiperSlide> <MovieCard movie={topPicks[5]} /> </SwiperSlide>
                                    <SwiperSlide> <MovieCard movie={topPicks[6]} /> </SwiperSlide>
                                    <SwiperSlide> <MovieCard movie={topPicks[7]} /> </SwiperSlide>
                                    <SwiperSlide> <MovieCard movie={topPicks[8]} /> </SwiperSlide>
                                    <SwiperSlide> <MovieCard movie={topPicks[9]} /> </SwiperSlide>
                                </Swiper> : null}
                            </div>
                        </div>

                    </div>
                </div>
            </>
        } 
}

export default WhatToWatch;