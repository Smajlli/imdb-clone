import { useState, useEffect } from 'react';
import MovieSlider from './MovieSlider';
import {fetchTopPicks} from './hooks/fetchData';

function WhatToWatch() {
    const [topPicks, setTopPicks] = useState([]);

    console.log(topPicks);

    useEffect(() => {
        fetchTopPicks().then((res) => { setTopPicks(res.results) });
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
                <MovieSlider moviesArray={topPicks} moviesArray1={topPicksArray1} moviesArray2={topPicksArray2} moviesArray3={topPicksArray3} title={"What to watch"} heading={"Top picks"} subheading={"Tv shows and movies just for you"}/>
            </>
        } 
}

export default WhatToWatch;