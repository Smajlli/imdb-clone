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


const apiOptions = {
    method: 'GET', 
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOTQxYjExNjU0YWNmYzgxMGU5YjJmNGQ4NDIwMGI4MyIsInN1YiI6IjY1NDBkOGI2NjNlNmZiMDBhZTUwZmIwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Irw-tikSu-2o1FYLfDZFDlq-L3jn7pjzh6ExNSBr6pk'
    }
};

function Trending() {
    const [trending, setTrending] = useState([]);

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
        return (
            <div className='trendingMoviesContainer'>
                <div className="trendingMoviesTitle">Trending this week</div>
                <div className='trendingMoviesContentWrapper'>
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={0}
                        width={420}
                        slidesPerView={2}
                    >
                        {trending.map((m) => {
                            return <SwiperSlide><MovieCard movie={m} /></SwiperSlide>
                        })}
                    </Swiper>
                </div>
            </div>
        )
    }       
}

export default Trending;

