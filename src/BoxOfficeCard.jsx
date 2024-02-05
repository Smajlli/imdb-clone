import './BoxOfficeCard.css';

function BoxOfficeCard({title, revenue, number}) {
    const stringRevenue = revenue.toString()
    return(
        <div className="boxOfficeCardContainer">
                <div className="boxOfficeNumber">{number}</div>
                <div className='boxOfficeBookmark'>
                    <div className="boxOfficeBookmarkText">+</div>
                </div>
                <div className="boxOfficeInnerContent">
                    <div className='boxOfficeCardTitle'>{title}</div>
                    <div className="boxOfficeCardRevenue">${stringRevenue.slice(0, 3)} M</div>
                </div>
        </div>
    )
}

export default BoxOfficeCard;