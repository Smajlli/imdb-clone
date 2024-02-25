import './UpcomingCard.css'

function UpcomingCard({upcomingImg, title}) {
    return(
        <div className='upcomingCardWrapper'>
            <div className='upcomingCardContainer'>
                <div className='upcomingCardImgContainer'>
                    <div className='upcomingCardImgGradient'></div>
                    <img src={`https://image.tmdb.org/t/p/original${upcomingImg}`} alt="upcomingCardImg" />
                </div>
                <div className='upcomingCardTitle'>{title}</div>
                <div className='upcomingCardSubtitle'>Watch the trailer</div>
            </div>
        </div>
    )
}

export default UpcomingCard;