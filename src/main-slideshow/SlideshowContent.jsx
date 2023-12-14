import './SlideshowContent.css'

function SlideshowContent({movie, handleCarouselNext, handleCarouselPrevious}) {
    if(!movie || movie.length === 0) {
        return null 
    } else {
        const nextMovie = () => {
            handleCarouselNext();
        }

        const previousMovie = () => {
            handleCarouselPrevious();
        }

        return <>
            <div className="slideshowContainer">
                <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="coverImg" className="slideshowCover" />
                <div className="slideshowCoverGradient"></div>
                <div className="slideshowButtonsContainer">
                    <div className="slideshowPreviousButton" onClick={previousMovie}>
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="previousButtonIcon"
                        >
                            <path
                                d="M20.3284 11.0001V13.0001L7.50011 13.0001L10.7426 16.2426L9.32842 17.6568L3.67157 12L9.32842 6.34314L10.7426 7.75735L7.49988 11.0001L20.3284 11.0001Z"
                                fill="currentColor"
                            />
                        </svg>
                    </div>
                    <div className="slideshowNextButton" onClick={nextMovie}>
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="nextButtonIcon"
                        >
                            <path
                                d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z"
                                fill="currentColor"
                            />
                        </svg>
                    </div>
                </div>
                <div className="slideshowContent">
                    <img img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="movieImg" className="slideshowMovieImage" />
                    <svg
                        width="70"
                        height="70"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="slideshowPlayButton"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23Z"
                            fill="currentColor"
                        />
                        <path d="M16 12L10 16.3301V7.66987L16 12Z" fill="currentColor" />
                    </svg>
                    <div className="slideshowTextContainer">
                        <p className="slideshowMovieTitle">"{movie.title}"</p>
                        <p className="slideshowMovieTrailer">Watch the trailer</p>
                    </div>
                </div>
            </div>
        </>
    }
}

export default SlideshowContent;