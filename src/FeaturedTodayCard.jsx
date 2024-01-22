import './FeaturedTodayCard.css'

function FeaturedTodayCard({content, title, subTitle}) {
    if(!content || content.length === 0) {
        return null
    } else {
        return <>
            <div className="featuredTodayCardContent">
                <div className='featuredTodayCardContentImgGradient'></div>
                <div className='featuredTodayCardImgContainer'>
                    <img src={`https://image.tmdb.org/t/p/original${content[0].poster_path ? content[0].poster_path : content[0].profile_path}`} alt="upcomingMovieImg" className='featuredTodayCardImgLeft' />
                    <img src={`https://image.tmdb.org/t/p/original${content[1].poster_path ? content[1].poster_path : content[1].profile_path}`} alt="upcomingMovieImg" className='featuredTodayCardImgMiddle' />
                    <img src={`https://image.tmdb.org/t/p/original${content[2].poster_path ? content[2].poster_path : content[2].profile_path}`} alt="upcomingMovieImg" className='featuredTodayCardImgRight' />
                    <div className='featuredTodayCardContentList'>
                        <svg
                            width="45"
                            height="45"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className='featuredTodayCardContentListIcon'
                        >
                            <path d="M9 7H7V9H9V7Z" fill="currentColor" />
                            <path d="M7 13V11H9V13H7Z" fill="currentColor" />
                            <path d="M7 15V17H9V15H7Z" fill="currentColor" />
                            <path d="M11 15V17H17V15H11Z" fill="currentColor" />
                            <path d="M17 13V11H11V13H17Z" fill="currentColor" />
                            <path d="M17 7V9H11V7H17Z" fill="currentColor" />
                        </svg>
                        <div className='featuredTodayCardContentListText'>List</div>
                    </div>
                </div>
                <div className='featuredTodayCardContentTextContainer'>
                    <div className='featuredTodayCardContentTitle'>{title}</div>
                    <div className='featuredTodayCardContentSubtitle'>{subTitle}</div>
                </div>
            </div>
        </>
    }
}

export default FeaturedTodayCard;