import './MoreToWatch.css'

function MoreToWatch() {
    return(
        <div className='moreToWatchContainer'>
            <div className='moreToWatchTitle'>More to watch</div>
            <div className='moreToWatchText'>IMDb helps you select the perfect next show or movie to watch.</div>
            <div className='moreToWatchButtonsContainer'>
                <div className='moreToWatchFirstButton'>Watch Guide</div>
                <div className='moreToWatchSeccondButton'>Most Popular</div>
            </div>
        </div>
    )
}

export default MoreToWatch;