import './Shows.css'
import { useEffect, useState } from 'react';
import screenSize from './hooks/ScreenSize';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { fetchShows, fetchTopShows } from './hooks/fetchData';

function Shows() {
    const [shows, setShows] = useState([]);
    const [topShows, setTopShows] = useState([]);

    const windowSize = screenSize();

    useEffect(() => {
        fetchShows().then((res) => {setShows(res.results)});
        fetchTopShows().then((res) => {setTopShows(res.results)});
    }, [])

    if(!shows || shows.length === 0 || !topShows || topShows.length === 0 ) {
        return null 
    } else {
        if (windowSize.width > 1024 || windowSize.width === 1024) {
            return <>
                <div className='showsContainer'>
                    <div className='showsHeading'>TV Shows</div>
                    <div className='showsContentContainer'>
                        <div className="showsContentWrapper">
                            <div className="showsContentLeft">
                                <div className='showsContentImgGradient'></div>
                                <div className='showsImgContainer'>
                                    <img src={`https://image.tmdb.org/t/p/original${shows[0].poster_path}`} alt="showImg" className='showsImgLeft' />
                                    <img src={`https://image.tmdb.org/t/p/original${shows[1].poster_path}`} alt="showImg" className='showsImgMiddle' />
                                    <img src={`https://image.tmdb.org/t/p/original${shows[2].poster_path}`} alt="showImg" className='showsImgRight' />
                                    <div className='showsContentList'>
                                        <svg
                                            width="45"
                                            height="45"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className='showsContentListIcon'
                                        >
                                            <path d="M9 7H7V9H9V7Z" fill="currentColor" />
                                            <path d="M7 13V11H9V13H7Z" fill="currentColor" />
                                            <path d="M7 15V17H9V15H7Z" fill="currentColor" />
                                            <path d="M11 15V17H17V15H11Z" fill="currentColor" />
                                            <path d="M17 13V11H11V13H17Z" fill="currentColor" />
                                            <path d="M17 7V9H11V7H17Z" fill="currentColor" />
                                        </svg>
                                        <div className='showsContentListText'>List</div>
                                    </div>
                                </div>
                                <div className='showsContentTextContainer'>
                                    <div className='showsContentTitle'>Popular TV Shows</div>
                                    <div className='showsContentSubtitle'>See all TV Shows</div>
                                </div>
                            </div>
                            <div className="showsContentRight">
                                <div className='showsContentImgGradient'></div>
                                <div className='showsImgContainer'>
                                    <img src={`https://image.tmdb.org/t/p/original${topShows[3].poster_path}`} alt="topRatedShowImage" className='showsImgLeft' />
                                    <img src={`https://image.tmdb.org/t/p/original${topShows[4].poster_path}`} alt="topRatedShowImage" className='showsImgMiddle' />
                                    <img src={`https://image.tmdb.org/t/p/original${topShows[5].poster_path}`} alt="topRatedShowImage" className='showsImgRight' />
                                    <div className='showsContentList'>
                                        <svg
                                            width="45"
                                            height="45"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className='showsContentListIcon'
                                        >
                                            <path d="M9 7H7V9H9V7Z" fill="currentColor" />
                                            <path d="M7 13V11H9V13H7Z" fill="currentColor" />
                                            <path d="M7 15V17H9V15H7Z" fill="currentColor" />
                                            <path d="M11 15V17H17V15H11Z" fill="currentColor" />
                                            <path d="M17 13V11H11V13H17Z" fill="currentColor" />
                                            <path d="M17 7V9H11V7H17Z" fill="currentColor" />
                                        </svg>
                                        <div className='showsContentListText'>List</div>
                                    </div>
                                </div>
                                <div className='showsContentTextContainer'>
                                    <div className='showsContentTitle'>The Top Rated Shows</div>
                                    <div className='showsContentSubtitle'>See top shows</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        } else if(windowSize.width === 768){
            return <>
                <div className="showsContainer">
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={50}
                        slidesPerView={1}
                        style={{ width: 500, height: 350 }}
                        navigation
                        loop
                    >
                        <SwiperSlide>
                            <div className="showsContentLeft">
                                <div className='showsContentImgGradient'></div>
                                <div className='showsImgContainer'>
                                    <img src={`https://image.tmdb.org/t/p/original${shows[0].poster_path}`} alt="showImg" className='showsImgLeft' />
                                    <img src={`https://image.tmdb.org/t/p/original${shows[1].poster_path}`} alt="showImg" className='showsImgMiddle' />
                                    <img src={`https://image.tmdb.org/t/p/original${shows[2].poster_path}`} alt="showImg" className='showsImgRight' />
                                    <div className='showsContentList'>
                                        <svg
                                            width="45"
                                            height="45"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className='showsContentListIcon'
                                        >
                                            <path d="M9 7H7V9H9V7Z" fill="currentColor" />
                                            <path d="M7 13V11H9V13H7Z" fill="currentColor" />
                                            <path d="M7 15V17H9V15H7Z" fill="currentColor" />
                                            <path d="M11 15V17H17V15H11Z" fill="currentColor" />
                                            <path d="M17 13V11H11V13H17Z" fill="currentColor" />
                                            <path d="M17 7V9H11V7H17Z" fill="currentColor" />
                                        </svg>
                                        <div className='showsContentListText'>List</div>
                                    </div>
                                </div>
                                <div className='showsContentTextContainer'>
                                    <div className='showsContentTitle'>Popular TV Shows</div>
                                    <div className='showsContentSubtitle'>See all TV Shows</div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="showsContentRight">
                                <div className='showsContentImgGradient'></div>
                                <div className='showsImgContainer'>
                                    <img src={`https://image.tmdb.org/t/p/original${topShows[3].poster_path}`} alt="topRatedShowImage" className='showsImgLeft' />
                                    <img src={`https://image.tmdb.org/t/p/original${topShows[4].poster_path}`} alt="topRatedShowImage" className='showsImgMiddle' />
                                    <img src={`https://image.tmdb.org/t/p/original${topShows[5].poster_path}`} alt="topRatedShowImage" className='showsImgRight' />
                                    <div className='showsContentList'>
                                        <svg
                                            width="45"
                                            height="45"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className='showsContentListIcon'
                                        >
                                            <path d="M9 7H7V9H9V7Z" fill="currentColor" />
                                            <path d="M7 13V11H9V13H7Z" fill="currentColor" />
                                            <path d="M7 15V17H9V15H7Z" fill="currentColor" />
                                            <path d="M11 15V17H17V15H11Z" fill="currentColor" />
                                            <path d="M17 13V11H11V13H17Z" fill="currentColor" />
                                            <path d="M17 7V9H11V7H17Z" fill="currentColor" />
                                        </svg>
                                        <div className='showsContentListText'>List</div>
                                    </div>
                                </div>
                                <div className='showsContentTextContainer'>
                                    <div className='showsContentTitle'>The Top Rated Shows</div>
                                    <div className='showsContentSubtitle'>See top shows</div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </>
        } else if(windowSize.width === 425) {
            return <>
                <div className="showsContainer">
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={50}
                        slidesPerView={1}
                        style={{ width: 420, height: 350 }}
                        navigation
                        loop
                    >
                        <SwiperSlide>
                            <div className="showsContentLeft">
                                <div className='showsContentImgGradient'></div>
                                <div className='showsImgContainer'>
                                    <img src={`https://image.tmdb.org/t/p/original${shows[0].poster_path}`} alt="showImg" className='showsImgLeft' />
                                    <img src={`https://image.tmdb.org/t/p/original${shows[1].poster_path}`} alt="showImg" className='showsImgMiddle' />
                                    <img src={`https://image.tmdb.org/t/p/original${shows[2].poster_path}`} alt="showImg" className='showsImgRight' />
                                    <div className='showsContentList'>
                                        <svg
                                            width="45"
                                            height="45"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className='showsContentListIcon'
                                        >
                                            <path d="M9 7H7V9H9V7Z" fill="currentColor" />
                                            <path d="M7 13V11H9V13H7Z" fill="currentColor" />
                                            <path d="M7 15V17H9V15H7Z" fill="currentColor" />
                                            <path d="M11 15V17H17V15H11Z" fill="currentColor" />
                                            <path d="M17 13V11H11V13H17Z" fill="currentColor" />
                                            <path d="M17 7V9H11V7H17Z" fill="currentColor" />
                                        </svg>
                                        <div className='showsContentListText'>List</div>
                                    </div>
                                </div>
                                <div className='showsContentTextContainer'>
                                    <div className='showsContentTitle'>Popular TV Shows</div>
                                    <div className='showsContentSubtitle'>See all TV Shows</div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="showsContentRight">
                                <div className='showsContentImgGradient'></div>
                                <div className='showsImgContainer'>
                                    <img src={`https://image.tmdb.org/t/p/original${topShows[3].poster_path}`} alt="topRatedShowImage" className='showsImgLeft' />
                                    <img src={`https://image.tmdb.org/t/p/original${topShows[4].poster_path}`} alt="topRatedShowImage" className='showsImgMiddle' />
                                    <img src={`https://image.tmdb.org/t/p/original${topShows[5].poster_path}`} alt="topRatedShowImage" className='showsImgRight' />
                                    <div className='showsContentList'>
                                        <svg
                                            width="45"
                                            height="45"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className='showsContentListIcon'
                                        >
                                            <path d="M9 7H7V9H9V7Z" fill="currentColor" />
                                            <path d="M7 13V11H9V13H7Z" fill="currentColor" />
                                            <path d="M7 15V17H9V15H7Z" fill="currentColor" />
                                            <path d="M11 15V17H17V15H11Z" fill="currentColor" />
                                            <path d="M17 13V11H11V13H17Z" fill="currentColor" />
                                            <path d="M17 7V9H11V7H17Z" fill="currentColor" />
                                        </svg>
                                        <div className='showsContentListText'>List</div>
                                    </div>
                                </div>
                                <div className='showsContentTextContainer'>
                                    <div className='showsContentTitle'>The Top Rated Shows</div>
                                    <div className='showsContentSubtitle'>See top shows</div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </>
        }
    }
}

export default Shows;