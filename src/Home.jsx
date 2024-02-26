import "./Home.css"
import { useState, useEffect } from "react";
import Navbar from "./navbar/Navbar";
import Slideshow from "./main-slideshow/Slideshow";
import FeaturedToday from "./FeaturedToday";
import WhatToWatch from "./WhatToWatch";
import Trending from "./Trending";
import Upcoming from "./Upcoming";
import Actors from "./actors/Actors";
import Shows from "./Shows";
import Footer from "./Footer";
import Tv from "./Tv";
import BoxOffice from "./BoxOffice";
import MoreToWatch from "./MoreToWatch";



const apiOptions = {
    method: 'GET', 
    headers: {
        accept: 'application/JSON', 
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOTQxYjExNjU0YWNmYzgxMGU5YjJmNGQ4NDIwMGI4MyIsInN1YiI6IjY1NDBkOGI2NjNlNmZiMDBhZTUwZmIwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Irw-tikSu-2o1FYLfDZFDlq-L3jn7pjzh6ExNSBr6pk'
    }
};

function Home() {
    const [movies, setMovies] = useState([]);
    const [stars, setStars] = useState([]);

    useEffect(() => {
        async function fetchMovies() {
            const getMovies = await fetch('https://api.themoviedb.org/3/movie/popular?laguange=en-US&page=1', apiOptions)
            .catch(err => console.log(err)) 
            const moviesJson = await getMovies.json();
            const popularMovies = moviesJson;
            setMovies(popularMovies.results);
        }
        fetchMovies();

        async function fetchStars() {
            const getStars = await fetch('https://api.themoviedb.org/3/trending/person/day?language=en-US&page=1', apiOptions)
                .catch(err => console.log(err))
            const starsJson = await getStars.json();
            const movieStars = starsJson;
            setStars(movieStars.results);
        }
        fetchStars();
    }, [])

    return(
        <>
            <Navbar />
            <div className="homeContent">
                <Slideshow movies={movies} />
                <FeaturedToday stars={stars} />
                <WhatToWatch />
                <Trending />
                {/* <Tv/> */}
                <MoreToWatch />
                <Actors stars={stars}/>
                <BoxOffice/>
                <Shows/>
                <Footer/>
            </div>
        </>
    )
}

export default Home;