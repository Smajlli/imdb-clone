import { useState, useEffect } from 'react';
import MovieSlider from './MovieSlider';
import { fetchTrending } from './hooks/fetchData';

function Trending() {
    const [trending, setTrending] = useState([]);

    useEffect(() => {
        fetchTrending().then((res) => { setTrending(res.results) });
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
            <MovieSlider moviesArray={trending} moviesArray1={trendingArray1} moviesArray2={trendingArray2} moviesArray3={trendingArray3} heading={"Trending this week"} />
        )
    }       
}

export default Trending;

