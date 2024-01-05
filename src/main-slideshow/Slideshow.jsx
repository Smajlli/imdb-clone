import "./Slideshow.css"
import SlideshowMovie from "./SlideshowMovie";
import SlideshowContent from "./SlideshowContent";
import { useState } from "react";

function Slideshow({movies}) {

    if (!movies || movies.length === 0) {
        return null
    } else {
        const [movie, setMovie] = useState(0);

        const handleCarouselNext = () => {
            if(movie === 3) {
                setMovie(0);
            } else {
                setMovie(c => c + 1);
            }
        };

        const handleCarouselPrevious = () => {
            if(movie === 0) {
                setMovie(0);
            } else {
                setMovie(c => c - 1);
            }
        };

        return <>
            <div className="trendingContainer">
                <SlideshowContent movie={movies[movie]} handleCarouselNext={handleCarouselNext} handleCarouselPrevious={handleCarouselPrevious}/>
                <div className="trendingContainerRight">
                    <div className="slideshowMoviesTitle">Up Next</div>
                    <div className="slideshowMoviesContainer">
                        {movie === 0 ? <>
                            <SlideshowMovie movie={movies[1]} />
                            <SlideshowMovie movie={movies[2]} />
                            <SlideshowMovie movie={movies[3]} />
                        </> : movie === 1 ? <>
                            <SlideshowMovie movie={movies[2]} />
                            <SlideshowMovie movie={movies[3]} />
                            <SlideshowMovie movie={movies[0]} />
                        </> : movie === 2 ? <>
                            <SlideshowMovie movie={movies[3]} />
                            <SlideshowMovie movie={movies[0]} />
                            <SlideshowMovie movie={movies[1]} />
                        </> : movie === 3 ? <>
                            <SlideshowMovie movie={movies[0]} />
                            <SlideshowMovie movie={movies[1]} />
                            <SlideshowMovie movie={movies[2]} />
                        </> : null }
                        <div className="slideshowMoviesFooter">Browse trailers  </div>
                    </div>
                </div>
            </div>
        </>
    }
    
} 

export default Slideshow;

