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

const apiOptions = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOTQxYjExNjU0YWNmYzgxMGU5YjJmNGQ4NDIwMGI4MyIsInN1YiI6IjY1NDBkOGI2NjNlNmZiMDBhZTUwZmIwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Irw-tikSu-2o1FYLfDZFDlq-L3jn7pjzh6ExNSBr6pk'
    }
};

function Tv() {
    const [tv, setTv] = useState([]);

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
        return(
            <div className='whatToWatchContainer'>
                <div className="whatToWatchContentContainer">
                    <div className='whatToWatchTitle'>Explore what's streaming</div>
                    <div className="whatToWatchContentWrapper">
                        <div className="whatToWatchMovieCardContainer">
                            <Swiper
                                modules={[Navigation, Pagination, Scrollbar, A11y]}
                                spaceBetween={0}
                                width={210}
                                slidesPerView={1}
                                style={{ width: 1250, height: 490 }}
                                navigation
                            >
                                {tv.map((show) => {
                                    return <SwiperSlide><MovieCard key={show.id} movie={show} title={show.name} /></SwiperSlide>
                                })}
                            </Swiper>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Tv;