import './BoxOfficeCard.css';

function BoxOfficeCard({title, revenue}) {
    return(
        <div className="boxOfficeCardContainer">
                <div className='boxOfficeCardTitle'>{title}</div>
                <div className="boxOfficeCardRevenue">{revenue.slice(0, 3)}</div>
        </div>
    )
}

export default BoxOfficeCard;