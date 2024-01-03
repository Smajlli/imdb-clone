import './Actors.css'
import ActorProfile from './ActorProfile';
import screenSize from '../hooks/ScreenSize';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


function Actors({stars}) {
    const windowSize = screenSize();

    if(!stars || stars.length === 0) {
        return null 
    } else {
            return <>
                <div className='actorsContainer'>
                    <div className='actorsContainerHeading'>Actors</div>
                    <div className='actorsContainerSubheading'>Explore different actors</div>
                    <div className='actorsProfilesContainer'>
                        <Swiper
                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                            spaceBetween={0}
                            width={420}
                            slidesPerView={2}
                            style={{ width: 1250 }}
                            navigation
                        >
                            {stars.map((s) => {
                                return <SwiperSlide> <ActorProfile key={s.id} actor={s}/> </SwiperSlide>
                            })}
                        </Swiper>
                    </div>
                </div>
            </>
        }
}

export default Actors;