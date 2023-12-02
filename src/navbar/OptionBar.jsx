import "./OptionBar.css"

function OptionBar() {
    return(
        <div className="OptionBar">
            <div className="LaguangeHeading">FULLY SUPPORTED</div>
            <ul className="LaguangeContainer">
                <li className="SupportedLaguange">English</li>
            </ul>
            <div className="LaguangeHeading">PARTIALLY SUPPORTED</div>
            <ul className="LaguangeContainer">
                <li className="Laguange">German</li>
                <li className="Laguange">Spanish</li>
                <li className="Laguange">French</li>
                <li className="Laguange">Portuguese</li>
            </ul>
        </div>
    )
}

export default OptionBar;