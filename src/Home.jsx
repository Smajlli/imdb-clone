import "./Home.css"
import { useState, useEffect } from "react";
import Navbar from "./navbar/Navbar";
import Slideshow from "./main-slideshow/Slideshow";
import FeaturedToday from "./FeaturedToday";
import WhatToWatch from "./WhatToWatch";
import Trending from "./Trending";
import Upcoming from "./Upcoming";
import Actors from "./Actors";

const apiOptions = {
    method: 'GET', 
    headers: {
        accept: 'application/JSON', 
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOTQxYjExNjU0YWNmYzgxMGU5YjJmNGQ4NDIwMGI4MyIsInN1YiI6IjY1NDBkOGI2NjNlNmZiMDBhZTUwZmIwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Irw-tikSu-2o1FYLfDZFDlq-L3jn7pjzh6ExNSBr6pk'
    }
};

function Home() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchMovies() {
            const getMovies = await fetch('https://api.themoviedb.org/3/movie/popular?laguange=en-US&page=1', apiOptions)
            .catch(err => console.log(err)) 
            const moviesJson = await getMovies.json();
            const popularMovies = moviesJson;
            setMovies(popularMovies.results);
        }
        fetchMovies();
    }, [])

    return(
        <>
        <Navbar/>
        <Slideshow movies={movies} />
        <FeaturedToday />
        <WhatToWatch/>
        <Trending/>
        <Upcoming/>
        </>
    )
}

export default Home;