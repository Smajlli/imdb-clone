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
        const starsArray1 = [];
        const starsArray2 = [];
        const starsArray3 = [];

        for(let i = 0; i < 6; i++) {
            starsArray1.push(stars[i]);
        }
        for (let i = 6; i < 12; i++) {
            starsArray2.push(stars[i]);
        }
        for (let i = 12; i < 18; i++) {
            starsArray3.push(stars[i]);
        }
            return <>
                <div className='actorsContainer'>
                    <div className='actorsContainerHeading'>Actors</div>
                    <div className='actorsContainerSubheading'>Explore different actors</div>
                    <div className='actorsProfilesWrapper'>
                        {windowSize.width === 1024 ? <Swiper
                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                            spaceBetween={0}
                            slidesPerView={1}
                            style={{ width: 1024 }}
                            navigation
                            loop
                        >
                            <SwiperSlide>
                                <div className='actorsProfilesContainer'>
                                    <div className='actorsProfilesContainerContent'>
                                        {starsArray1.map((s) => {
                                            return <ActorProfile key={s.id} actor={s} />
                                        })}
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='actorsProfilesContainer'>
                                    <div className='actorsProfilesContainerContent'>
                                        {starsArray2.map((s) => {
                                            return <ActorProfile key={s.id} actor={s} />
                                        })}
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='actorsProfilesContainer'>
                                    <div className='actorsProfilesContainerContent'>
                                        {starsArray3.map((s) => {
                                            return <ActorProfile key={s.id} actor={s} />
                                        })}
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper> : windowSize.width === 768 ? <Swiper
                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                            spaceBetween={0}
                            slidesPerView={4}
                            style={{ width: 768, height: 250 }}
                            loop
                        >
                            <SwiperSlide> <ActorProfile actor={stars[0]}/> </SwiperSlide>
                            <SwiperSlide> <ActorProfile actor={stars[1]}/> </SwiperSlide>
                            <SwiperSlide> <ActorProfile actor={stars[2]}/> </SwiperSlide>
                            <SwiperSlide> <ActorProfile actor={stars[3]}/> </SwiperSlide>
                            <SwiperSlide> <ActorProfile actor={stars[4]}/> </SwiperSlide>
                            <SwiperSlide> <ActorProfile actor={stars[5]}/> </SwiperSlide>
                            <SwiperSlide> <ActorProfile actor={stars[6]}/> </SwiperSlide>
                            <SwiperSlide> <ActorProfile actor={stars[7]}/> </SwiperSlide>
                            <SwiperSlide> <ActorProfile actor={stars[8]}/> </SwiperSlide>
                            <SwiperSlide> <ActorProfile actor={stars[9]}/> </SwiperSlide>
                        </Swiper> : windowSize.width === 425 ? <Swiper
                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                            spaceBetween={0}
                            slidesPerView={2}
                            style={{ width: 420, height: 250 }}
                            loop
                        >
                            <SwiperSlide> <ActorProfile actor={stars[0]} /> </SwiperSlide>
                            <SwiperSlide> <ActorProfile actor={stars[1]} /> </SwiperSlide>
                            <SwiperSlide> <ActorProfile actor={stars[2]} /> </SwiperSlide>
                            <SwiperSlide> <ActorProfile actor={stars[3]} /> </SwiperSlide>
                            <SwiperSlide> <ActorProfile actor={stars[4]} /> </SwiperSlide>
                            <SwiperSlide> <ActorProfile actor={stars[5]} /> </SwiperSlide>
                            <SwiperSlide> <ActorProfile actor={stars[6]} /> </SwiperSlide>
                            <SwiperSlide> <ActorProfile actor={stars[7]} /> </SwiperSlide>
                            <SwiperSlide> <ActorProfile actor={stars[8]} /> </SwiperSlide>
                            <SwiperSlide> <ActorProfile actor={stars[9]} /> </SwiperSlide>
                            </Swiper> : <Swiper
                                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                                    spaceBetween={0}
                                    slidesPerView={1}
                                    style={{ width: 1250 }}
                                    navigation
                                    loop
                                >
                                    <SwiperSlide>
                                        <div className='actorsProfilesContainer'>
                                            <div className='actorsProfilesContainerContent'>
                                                {starsArray1.map((s) => {
                                                    return <ActorProfile key={s.id} actor={s} />
                                                })}
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='actorsProfilesContainer'>
                                            <div className='actorsProfilesContainerContent'>
                                                {starsArray2.map((s) => {
                                                    return <ActorProfile key={s.id} actor={s} />
                                                })}
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='actorsProfilesContainer'>
                                            <div className='actorsProfilesContainerContent'>
                                                {starsArray3.map((s) => {
                                                    return <ActorProfile key={s.id} actor={s} />
                                                })}
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>}
                    </div>
                </div>
            </>
        }
}

export default Actors;