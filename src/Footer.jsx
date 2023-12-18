import './Footer.css'

function Footer() {
    return(
        <div className='footerContainer'>
            <div className='footerButton'>Sign in for more access</div>
            <div className='footerIconsContainer'>
                <div className="footerIcon">
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        height="25" 
                        width="25" 
                        viewBox="0 0 448 512"
                    >
                        <path 
                            fill="#ffffff" 
                            d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z" 
                        />
                    </svg>
                </div>
                <div className='footerIcon'>
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        height="25" 
                        width="25" 
                        viewBox="0 0 448 512"
                    >
                        <path 
                            fill="#ffffff" 
                            d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" 
                        />
                    </svg>
                </div>
                <div className='footerIcon'>
                    <svg
                        width="25"
                        height="25"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M8 3C9.10457 3 10 3.89543 10 5V8H16C17.1046 8 18 8.89543 18 10C18 11.1046 17.1046 12 16 12H10V14C10 15.6569 11.3431 17 13 17H16C17.1046 17 18 17.8954 18 19C18 20.1046 17.1046 21 16 21H13C9.13401 21 6 17.866 6 14V5C6 3.89543 6.89543 3 8 3Z"
                            fill="currentColor"
                        />
                    </svg>
                </div>
                <div className="footerIcon">
                    <svg
                        width="25"
                        height="25"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M5 7H19C19.5523 7 20 7.44771 20 8V16C20 16.5523 19.5523 17 19 17H5C4.44772 17 4 16.5523 4 16V8C4 7.44772 4.44772 7 5 7ZM2 8C2 6.34315 3.34315 5 5 5H19C20.6569 5 22 6.34315 22 8V16C22 17.6569 20.6569 19 19 19H5C3.34315 19 2 17.6569 2 16V8ZM10 9L14 12L10 15V9Z"
                            fill="currentColor"
                        />
                    </svg>
                </div>
                <div className="footerIcon">
                    <svg
                        width="25"
                        height="25"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M9.19795 21.5H13.198V13.4901H16.8021L17.198 9.50977H13.198V7.5C13.198 6.94772 13.6457 6.5 14.198 6.5H17.198V2.5H14.198C11.4365 2.5 9.19795 4.73858 9.19795 7.5V9.50977H7.19795L6.80206 13.4901H9.19795V21.5Z"
                            fill="currentColor"
                        />
                    </svg>
                </div>
            </div>
            <div className="footerLinksContainer">
                <div className='footerUpperLinks'>
                    <a href="#" className='footerLink'>Get The IMDb App</a>
                    <a href="#" className='footerLink'>Help</a>
                    <a href="#" className='footerLink'>Site Index</a>
                    <a href="#" className='footerLink'>IMDb Pro</a>
                    <a href="#" className='footerLink'>Box Office Mojo</a>
                    <a href="#" className='footerLink'>IMDb Developer</a>
                </div>
                <div className='footerLowerLinks'>
                    <a href="#" className='footerLink'>Press Room</a>
                    <a href="#" className='footerLink'>Advertising</a>
                    <a href="#" className='footerLink'>Jobs</a>
                    <a href="#" className='footerLink'>Conditions of Use</a>
                    <a href="#" className='footerLink'>Privacy Policy</a>
                    <a href="#" className='footerLink'>Your Ads Privacy Choices</a>
                </div>
            </div>
        </div>
    )
}

export default Footer;