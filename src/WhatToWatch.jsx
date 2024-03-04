import './WhatToWatch.css'
import { useState, useEffect } from 'react';
import MovieSlider from './MovieSlider';

const apiOptions = {
    method: 'GET',
    headers: {
        accept: 'application/JSON',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOTQxYjExNjU0YWNmYzgxMGU5YjJmNGQ4NDIwMGI4MyIsInN1YiI6IjY1NDBkOGI2NjNlNmZiMDBhZTUwZmIwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Irw-tikSu-2o1FYLfDZFDlq-L3jn7pjzh6ExNSBr6pk'
    }
};

function WhatToWatch() {
    const [topPicks, setTopPicks] = useState([]);

    useEffect(() => {
        async function fetchTopPicks() {
            const getTopPicks = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', apiOptions)
            .catch(err => console.log(err))
            const topPicksJson = await getTopPicks.json();
            const allTopPicks = topPicksJson;
            setTopPicks(allTopPicks.results);
        }
        fetchTopPicks();
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