import './MovieSlider.css'
import screenSize from './hooks/ScreenSize';
import MovieCard from './MovieCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function MovieSlider({moviesArray, moviesArray1, moviesArray2, moviesArray3, title="", heading="", subheading=""}) {
    const windowSize = screenSize();
    return <>
        <div className='movieSliderContainer'>
            <div className="movieSliderContentContainer">
                <div className='movieSliderTitle'>{title}</div>
                <div className="movieSliderSubtitleContainer">
                    <div className="movieSliderHeading">
                        {heading}
                    </div>
                    <div className='movieSliderSubheading'>{subheading}</div>
                </div>
                <div className="movieSliderContentWrapper">
                    <div className="movieSliderMovieCardWrapper">
                        {windowSize.width >= 1024 ? <Swiper
                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                            spaceBetween={50}
                            slidesPerView={1}
                            style={{ width: 1024, height: 490 }}
                            navigation
                            loop
                        >
                            <SwiperSlide>
                                <div className='movieSliderMovieCardsContainer'>
                                    <div className='movieSliderMovieCardsContainerContent'>
                                        {moviesArray1.map((m) => {
                                            return <MovieCard movie={m} />
                                        })}
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='movieSliderMovieCardsContainer'>
                                    <div className='movieSliderMovieCardsContainerContent'>
                                        {moviesArray2.map((m) => {
                                            return <MovieCard movie={m} />
                                        })}
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='movieSliderMovieCardsContainer'>
                                    <div className='movieSliderMovieCardsContainerContent'>
                                        {moviesArray3.map((m) => {
                                            return <MovieCard movie={m} />
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
                            {moviesArray.slice(0, 9).map((m) => {
                                return <SwiperSlide> <MovieCard movie={m}/> </SwiperSlide>
                            })}
                        </Swiper> : windowSize.width === 425 ? <Swiper
                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                            spaceBetween={0}
                            slidesPerView={2}
                            style={{ width: 420, height: 490 }}
                            loop
                        >
                            {moviesArray.slice(0, 9).map((m) => {
                                return <SwiperSlide> <MovieCard movie={m} /> </SwiperSlide>
                            })}
                        </Swiper> : null}
                    </div>
                </div>

            </div>
        </div>
    </>
}

export default MovieSlider;