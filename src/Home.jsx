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
import { fetchMovies, fetchActors } from "./hooks/fetchData";

function Home() {
    const [movies, setMovies] = useState([]);
    const [actors, setActors] = useState([]);

    useEffect(() => {
        fetchMovies().then((res) => {setMovies(res.results)});
        fetchActors().then((res) => {setActors(res.results)});
    }, [])

    return(
        <>
            <div className="homeContent">
                <Navbar />
                <Slideshow movies={movies} />
                <FeaturedToday stars={actors} />
                <WhatToWatch />
                <Trending />
                <Tv/>
                <MoreToWatch />
                <Upcoming/>
                <Actors stars={actors}/>
                <BoxOffice/>
                <Shows/>
                <Footer/>
            </div>
        </>
    )
}

export default Home;