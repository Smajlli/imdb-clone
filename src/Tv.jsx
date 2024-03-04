import { useState, useEffect } from 'react';
import MovieSlider from './MovieSlider';

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