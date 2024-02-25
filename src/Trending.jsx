import './Trending.css'
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

function Trending() {
    const [trending, setTrending] = useState([]);

    const windowSize = screenSize();

    useEffect(() => {
        async function fetchTrendingMovies() {
            const getTrendingMovies = await fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', apiOptions)
            .catch(err => console.log(err))
            const trendingMoviesJson = await getTrendingMovies.json();
            const allTrendingMovies = trendingMoviesJson;
            setTrending(allTrendingMovies.results);
        }
        fetchTrendingMovies();
    }, [])

    if(!trending || trending.length === 0) {
        return null
    } else {
        const trendingArray1 = [];
        const trendingArray2 = [];
        const trendingArray3 = [];

        for(let i = 0; i < 6; i++) {
            trendingArray1.push(trending[i]);
        }
        for (let i = 6; i < 12; i++) {
            trendingArray2.push(trending[i]);
        }
        for (let i = 12; i < 18; i++) {
            trendingArray3.push(trending[i]);
        }

        return (
            <div className='trendingMoviesContainer'>
                <div className="trendingMoviesTitle">Trending this week</div>
                <div className='trendingMoviesContentWrapper'>
                    {windowSize.width >= 1024 ? <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={0}
                        slidesPerView={1}
                        style={{ width: 1024, height: 490 }}
                        navigation
                        loop
                    >
                        <SwiperSlide>
                            <div className='trendingMoviesCardsContainer'>
                                <div className='trendingMoviesCardsContainerContent'>
                                    {trendingArray1.map((m) => {
                                        return <MovieCard key={m.id} movie={m} />
                                    })}
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='trendingMoviesCardsContainer'>
                                <div className='trendingMoviesCardsContainerContent'>
                                    {trendingArray2.map((m) => {
                                        return <MovieCard key={m.id} movie={m} />
                                    })}
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='trendingMoviesCardsContainer'>
                                <div className='trendingMoviesCardsContainerContent'>
                                    {trendingArray3.map((m) => {
                                        return <MovieCard key={m.id} movie={m} />
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
                        <SwiperSlide> <MovieCard movie={trending[0]} /> </SwiperSlide>
                        <SwiperSlide> <MovieCard movie={trending[1]} /> </SwiperSlide>
                        <SwiperSlide> <MovieCard movie={trending[2]} /> </SwiperSlide>
                        <SwiperSlide> <MovieCard movie={trending[3]} /> </SwiperSlide>
                        <SwiperSlide> <MovieCard movie={trending[4]} /> </SwiperSlide>
                        <SwiperSlide> <MovieCard movie={trending[5]} /> </SwiperSlide>
                        <SwiperSlide> <MovieCard movie={trending[6]} /> </SwiperSlide>
                        <SwiperSlide> <MovieCard movie={trending[7]} /> </SwiperSlide>
                        <SwiperSlide> <MovieCard movie={trending[8]} /> </SwiperSlide>
                        <SwiperSlide> <MovieCard movie={trending[9]} /> </SwiperSlide>
                        </Swiper> : windowSize.width === 425 ? <Swiper
                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                            spaceBetween={0}
                            slidesPerView={2}
                            style={{ width: 420, height: 490 }}
                            loop
                        >
                            <SwiperSlide> <MovieCard movie={trending[0]} /> </SwiperSlide>
                            <SwiperSlide> <MovieCard movie={trending[1]} /> </SwiperSlide>
                            <SwiperSlide> <MovieCard movie={trending[2]} /> </SwiperSlide>
                            <SwiperSlide> <MovieCard movie={trending[3]} /> </SwiperSlide>
                            <SwiperSlide> <MovieCard movie={trending[4]} /> </SwiperSlide>
                            <SwiperSlide> <MovieCard movie={trending[5]} /> </SwiperSlide>
                            <SwiperSlide> <MovieCard movie={trending[6]} /> </SwiperSlide>
                            <SwiperSlide> <MovieCard movie={trending[7]} /> </SwiperSlide>
                            <SwiperSlide> <MovieCard movie={trending[8]} /> </SwiperSlide>
                            <SwiperSlide> <MovieCard movie={trending[9]} /> </SwiperSlide>
                        </Swiper> : null}
                </div>
            </div>
        )
    }       
}

export default Trending;

