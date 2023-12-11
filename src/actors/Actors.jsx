import './Actors.css'
import { useState, useEffect } from 'react';
import ActorProfile from './ActorProfile';
import screenSize from '../hooks/ScreenSize';


function Actors({stars}) {
    const windowSize = screenSize();

    if(!stars || stars.length === 0) {
        return null 
    } else {
        if(windowSize.width > 1023) {
            return <>
                <div className='actorsContainer'>
                    <div className='actorsContainerHeading'>Actors</div>
                    <div className='actorsContainerSubheading'>Explore different actors</div>
                    <div className='actorsProfilesContainer'>
                        <ActorProfile actor={stars[0]} />
                        <ActorProfile actor={stars[1]} />
                        <ActorProfile actor={stars[2]} />
                        <ActorProfile actor={stars[3]} />
                        <ActorProfile actor={stars[4]} />
                    </div>
                </div>
            </>
        } else if(windowSize.width > 425) {
            return <>
                <div className='actorsContainer'>
                    <div className='actorsContainerHeading'>Actors</div>
                    <div className='actorsContainerSubheading'>Explore different actors</div>
                    <div className='actorsProfilesContainer'>
                        <div className='actorsProfilesContainerButton'>
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className='actorsProfilesButtonIcon'
                            >
                                <path
                                    d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </div>
                        <ActorProfile actor={stars[0]} />
                        <ActorProfile actor={stars[1]} />
                        <ActorProfile actor={stars[2]} />
                        <ActorProfile actor={stars[3]} />
                    </div>
                </div>
            </>
        } else {
            return <>
                <div className='actorsContainer'>
                    <div className='actorsContainerHeading'>Actors</div>
                    <div className='actorsContainerSubheading'>Explore different actors</div>
                    <div className='actorsProfilesContainer'>
                        <div className='actorsProfilesContainerButton'>
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className='actorsProfilesButtonIcon'
                            >
                                <path
                                    d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </div>
                        <ActorProfile actor={stars[0]} />
                        <ActorProfile actor={stars[1]} />
                    </div>
                </div>
            </>
        }
    }
}

export default Actors;