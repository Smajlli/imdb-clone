import "./OptionBar.css"
import classNames from "classnames";
import { useState } from "react";

function OptionBar() {
    const [optionBar, setOptionBar] = useState(false);
    const optionBarClasses = classNames('OptionBar', {'activeOptionBar' : optionBar === true});
    
    const handleOptionBar = () => {
        setOptionBar(!optionBar);
    }

    return(
        <div className='Right-navbar'>
            <div className='Sign-in'>Sign in</div>
            <div className='Down-arrow' onClick={handleOptionBar}>
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className='Arrow-icon'
                >
                    <path
                        d="M6.34317 7.75732L4.92896 9.17154L12 16.2426L19.0711 9.17157L17.6569 7.75735L12 13.4142L6.34317 7.75732Z"
                        fill="currentColor"
                    />
                </svg>
                <div className={optionBarClasses}>
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
            </div>
            <div className='useApp'>Use app</div>
        </div>
    )
}

export default OptionBar;



