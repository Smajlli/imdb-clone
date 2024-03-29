import { useState, useEffect } from 'react';
import MovieSlider from './MovieSlider';
import { fetchTv } from './hooks/fetchData';

function Tv() {
    const [tv, setTv] = useState([]);

    useEffect(() => {
        fetchTv().then((res) => { setTv(res.results)} );
    }, [])

    if(!tv || tv.length === 0) {
        return null 
    } else {
        const tvArray1 = [];
        const tvArray2 = [];
        const tvArray3 = [];

        for(let i = 0; i < 6; i++) {
            tvArray1.push(tv[i]);
        }
        for (let i = 6; i < 12; i++) {
            tvArray2.push(tv[i]);
        }
        for (let i = 12; i < 18; i++) {
            tvArray3.push(tv[i]);
        }
            return <>
                <MovieSlider moviesArray={tv} moviesArray1={tvArray1} moviesArray2={tvArray2} moviesArray3={tvArray3} title={"Explore what's streaming"} heading={"Tv Shows"} />
            </>
    }
}

export default Tv;