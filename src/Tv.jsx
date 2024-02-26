import './Tv.css'
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
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOTQxYjExNjU0YWNmYzgxMGU5YjJmNGQ4NDIwMGI4MyIsInN1YiI6IjY1NDBkOGI2NjNlNmZiMDBhZTUwZmIwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Irw-tikSu-2o1FYLfDZFDlq-L3jn7pjzh6ExNSBr6pk'
    }
};

function Tv() {
    const [tv, setTv] = useState([]);
    const windowSize = screenSize();

    useEffect(() => {
        async function fetchTv() {
            const getTv = await fetch('https://api.themoviedb.org/3/trending/tv/day?language=en-US', apiOptions)
            .catch(err => console.log(err));
            const tvJson = await getTv.json();
            const allTv = tvJson;
            setTv(allTv.results);
        }
        fetchTv();
    }, [])

    if(!tv && tv.length === 0) {
        return null 
    } else {
        const tvArray1 = [];
        const tvArray2 = [];
        const tvArray3 = [];

        for(let i = 0; i < 6; i++) {
            tvArray1.push(tv[i]);
        }
        for (let i = 6; i < 12; i++) {
            tvArray2.push(tv[i]);
        }
        for (let i = 12; i < 18; i++) {
            tvArray3.push(tv[i]);
        }
            return <>
                <div className='nameContainer'>
                    <div className='tvContainer'>
                        <div className="tvContentContainer">
                            <div className='tvTitle'>Explore what's streaming</div>
                            <div className="tvContentWrapper">
                                <div className="tvMovieCardWrapper">
                                    {windowSize.width >= 1024 ? <Swiper
                                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                                        spaceBetween={0}
                                        slidesPerView={1}
                                        style={{ width: 1250, height: 490 }}
                                        navigation
                                        loop
                                    >
                                        <SwiperSlide>
                                            <div className='tvMovieCardsContainer'>
                                                <div className='tvMovieCardsContainerContent'>
                                                    {tvArray1.map((show) => {
                                                        return <MovieCard key={show.id} movie={show} />
                                                    })}
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className='tvMovieCardsContainer'>
                                                <div className='tvMovieCardsContainerContent'>
                                                    {tvArray2.map((show) => {
                                                        return <MovieCard key={show.id} movie={show} />
                                                    })}
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className='tvMovieCardsContainer'>
                                                <div className='tvMovieCardsContainerContent'>
                                                    {tvArray3.map((show) => {
                                                        return <MovieCard key={show.id} movie={show} />
                                                    })}
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    </Swiper> : windowSize.width === 768 ? <Swiper
                                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                                        spaceBetween={0}
                                        slidesPerView={4}
                                        style={{ width: 768, height: 490 }}
                                        loop
                                    >
                                        <SwiperSlide> <MovieCard movie={tv[0]} /> </SwiperSlide>
                                        <SwiperSlide> <MovieCard movie={tv[1]} /> </SwiperSlide>
                                        <SwiperSlide> <MovieCard movie={tv[2]} /> </SwiperSlide>
                                        <SwiperSlide> <MovieCard movie={tv[3]} /> </SwiperSlide>
                                        <SwiperSlide> <MovieCard movie={tv[4]} /> </SwiperSlide>
                                        <SwiperSlide> <MovieCard movie={tv[5]} /> </SwiperSlide>
                                        <SwiperSlide> <MovieCard movie={tv[6]} /> </SwiperSlide>
                                        <SwiperSlide> <MovieCard movie={tv[7]} /> </SwiperSlide>
                                        <SwiperSlide> <MovieCard movie={tv[8]} /> </SwiperSlide>
                                        <SwiperSlide> <MovieCard movie={tv[9]} /> </SwiperSlide>
                                        </Swiper> : windowSize.length === 425 ? <Swiper
                                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                                            spaceBetween={0}
                                            slidesPerView={2}
                                            style={{ width: 425, height: 490 }}
                                            loop
                                        >
                                            <SwiperSlide> <MovieCard movie={tv[0]} /> </SwiperSlide>
                                            <SwiperSlide> <MovieCard movie={tv[1]} /> </SwiperSlide>
                                            <SwiperSlide> <MovieCard movie={tv[2]} /> </SwiperSlide>
                                            <SwiperSlide> <MovieCard movie={tv[3]} /> </SwiperSlide>
                                            <SwiperSlide> <MovieCard movie={tv[4]} /> </SwiperSlide>
                                            <SwiperSlide> <MovieCard movie={tv[5]} /> </SwiperSlide>
                                            <SwiperSlide> <MovieCard movie={tv[6]} /> </SwiperSlide>
                                            <SwiperSlide> <MovieCard movie={tv[7]} /> </SwiperSlide>
                                            <SwiperSlide> <MovieCard movie={tv[8]} /> </SwiperSlide>
                                            <SwiperSlide> <MovieCard movie={tv[9]} /> </SwiperSlide>
                                        </Swiper> : null}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </>
    }
}

export default Tv;