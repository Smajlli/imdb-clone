import './SlideshowMovie.css'

function SlideshowMovie({movie}) {
    return <>
        <div className='slideshowMovieContainer'>
            <div className="slideshowMovieImgContainer">
                <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="slideshowMovieImg" className="slideshowMovieImg" />
            </div>
            <div className='slideshowMovieContent'>
                <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className='slideshowMoviePlayButton'
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23Z"
                        fill="currentColor"
                    />
                    <path d="M16 12L10 16.3301V7.66987L16 12Z" fill="currentColor" />
                </svg>
                <div className='slideshowMovieTitle'>{movie.title}</div>
                <div className='slideshowMovieReleaseDate'>Release date: {movie.release_date}</div>
            </div>
        </div>
    </>
}

export default SlideshowMovie;