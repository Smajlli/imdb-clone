import './Navbar.css'
import { useState } from 'react';
import OptionBar from './OptionBar';
import SearchFilter from './SearchFilter';
import classNames from "classnames";
import screenSize from "../hooks/ScreenSize";
import SidebarMenu from '../sidebar-menu/SidebarMenu';

function Navbar() {
    const [navbarMenu, setNavbarMenu] = useState(false);
    const [sidebarMenu, setSidebarMenu] = useState(false);

    const navbarMenuClasses = classNames('Navbar-menu', { 'activeNavbarMenu': navbarMenu === true });

    const handleNavbarMenu = () => {
        setNavbarMenu(!navbarMenu);
    }

    const handleSidebarMenu = () => {
        setSidebarMenu(!sidebarMenu);
    }

    const windowSize = screenSize();

        return(

            <>
                <div className={navbarMenuClasses}>
                    <div className="Handling-container">
                        <div className="Logo">IMDb</div>
                        <svg
                            className="Close-menu"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            onClick={handleNavbarMenu}
                        >
                            <path
                                d="M16.3394 9.32245C16.7434 8.94589 16.7657 8.31312 16.3891 7.90911C16.0126 7.50509 15.3798 7.48283 14.9758 7.85938L12.0497 10.5866L9.32245 7.66048C8.94589 7.25647 8.31312 7.23421 7.90911 7.61076C7.50509 7.98731 7.48283 8.62008 7.85938 9.0241L10.5866 11.9502L7.66048 14.6775C7.25647 15.054 7.23421 15.6868 7.61076 16.0908C7.98731 16.4948 8.62008 16.5171 9.0241 16.1405L11.9502 13.4133L14.6775 16.3394C15.054 16.7434 15.6868 16.7657 16.0908 16.3891C16.4948 16.0126 16.5171 15.3798 16.1405 14.9758L13.4133 12.0497L16.3394 9.32245Z"
                                fill="currentColor"
                            />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z"
                                fill="currentColor"
                            />
                        </svg>
                    </div>
                    <div className="Menu-container">
                        <div className="First-category-container">
                            <div className="Category-list">
                                <div className="Heading">
                                    <div className="Heading-container">
                                        <svg
                                            width="28"
                                            height="28"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="Heading-icon"
                                        >
                                            <path
                                                d="M6 7C5.44772 7 5 7.44772 5 8C5 8.55228 5.44772 9 6 9C6.55228 9 7 8.55228 7 8C7 7.44772 6.55228 7 6 7Z"
                                                fill="currentColor"
                                            />
                                            <path
                                                d="M17 8C17 7.44772 17.4477 7 18 7C18.5523 7 19 7.44772 19 8C19 8.55228 18.5523 9 18 9C17.4477 9 17 8.55228 17 8Z"
                                                fill="currentColor"
                                            />
                                            <path
                                                d="M6 11C5.44772 11 5 11.4477 5 12C5 12.5523 5.44772 13 6 13C6.55228 13 7 12.5523 7 12C7 11.4477 6.55228 11 6 11Z"
                                                fill="currentColor"
                                            />
                                            <path
                                                d="M17 12C17 11.4477 17.4477 11 18 11C18.5523 11 19 11.4477 19 12C19 12.5523 18.5523 13 18 13C17.4477 13 17 12.5523 17 12Z"
                                                fill="currentColor"
                                            />
                                            <path
                                                d="M6 15C5.44772 15 5 15.4477 5 16C5 16.5523 5.44772 17 6 17C6.55228 17 7 16.5523 7 16C7 15.4477 6.55228 15 6 15Z"
                                                fill="currentColor"
                                            />
                                            <path
                                                d="M17 16C17 15.4477 17.4477 15 18 15C18.5523 15 19 15.4477 19 16C19 16.5523 18.5523 17 18 17C17.4477 17 17 16.5523 17 16Z"
                                                fill="currentColor"
                                            />
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M4 3C2.34315 3 1 4.34315 1 6V18C1 19.6569 2.34315 21 4 21H20C21.6569 21 23 19.6569 23 18V6C23 4.34315 21.6569 3 20 3H4ZM20 5H4C3.44772 5 3 5.44772 3 6V18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18V6C21 5.44772 20.5523 5 20 5Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                        <div className="Heading-text">Movies</div>
                                    </div>
                                    <ul className="List-container">
                                        <li>Release Calendar</li>
                                        <li>Top 250 Movies</li>
                                        <li>Most Popular Movies</li>
                                        <li>Bowse Movies by Genre</li>
                                        <li>Top Box Office</li>
                                        <li>Showtimes & Tickets</li>
                                        <li>Movie News</li>
                                        <li>India Movie Spotlight</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="Category-list">
                                <div className="Heading">
                                    <div className="Heading-container">
                                        <svg
                                            width="28"
                                            height="28"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="Heading-icon"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M11 17H4C2.34315 17 1 15.6569 1 14V6C1 4.34315 2.34315 3 4 3H20C21.6569 3 23 4.34315 23 6V14C23 15.6569 21.6569 17 20 17H13V19H16C16.5523 19 17 19.4477 17 20C17 20.5523 16.5523 21 16 21H8C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19H11V17ZM4 5H20C20.5523 5 21 5.44772 21 6V14C21 14.5523 20.5523 15 20 15H4C3.44772 15 3 14.5523 3 14V6C3 5.44772 3.44772 5 4 5Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                        <div className="Heading-text">TV Shows</div>
                                    </div>
                                    <ul className="List-container">
                                        <li>What's on TV & Streaming</li>
                                        <li>Top 250 TV Shows</li>
                                        <li>Most Popular TV Shows</li>
                                        <li>Bowse TV Shows by Genre</li>
                                        <li>TV News</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="Category-list">
                                <div className="Heading">
                                    <div className="Heading-container">
                                        <svg
                                            width="28"
                                            height="28"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="Heading-icon"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M13 15.9C15.2822 15.4367 17 13.419 17 11V4H7V11C7 13.419 8.71776 15.4367 11 15.9V18H9V20H15V18H13V15.9ZM9 6H15V11C15 12.6569 13.6569 14 12 14C10.3431 14 9 12.6569 9 11V6Z"
                                                fill="currentColor"
                                            />
                                            <path d="M18 6H20V11H18V6Z" fill="currentColor" />
                                            <path d="M6 6H4V11H6V6Z" fill="currentColor" />
                                        </svg>
                                        <div className="Heading-text">Awards & Events</div>
                                    </div>
                                    <ul className="List-container">
                                        <li>Oscars</li>
                                        <li>Emmys</li>
                                        <li>Halloween Picks</li>
                                        <li>Scary Good Horror</li>
                                        <li>Hispanic Heritage Month</li>
                                        <li>MIAMI</li>
                                        <li>STARmeter Awards</li>
                                        <li>Awards Central</li>
                                        <li>Festival Central</li>
                                        <li>All Events</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="Seccond-category-container">
                            <div className="Category-list">
                                <div className="Heading">
                                    <div className="Heading-container">
                                        <svg
                                            width="28"
                                            height="28"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="Heading-icon"
                                        >
                                            <path
                                                d="M9 14C9.55228 14 10 13.5523 10 13C10 12.4477 9.55228 12 9 12C8.44771 12 8 12.4477 8 13C8 13.5523 8.44771 14 9 14Z"
                                                fill="currentColor"
                                            />
                                            <path
                                                d="M16 13C16 13.5523 15.5523 14 15 14C14.4477 14 14 13.5523 14 13C14 12.4477 14.4477 12 15 12C15.5523 12 16 12.4477 16 13Z"
                                                fill="currentColor"
                                            />
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 11.1637 19.8717 10.3574 19.6337 9.59973C18.7991 9.82556 17.9212 9.94604 17.0152 9.94604C13.2921 9.94604 10.0442 7.91139 8.32277 4.89334C5.75469 6.22486 4 8.90751 4 12C4 16.4183 7.58172 20 12 20Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                        <div className="Heading-text">Celebs</div>
                                    </div>
                                    <ul className="List-container">
                                        <li>Born Today</li>
                                        <li>Most Popular Celebs</li>
                                        <li>Celebrity News</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="Category-list">
                                <div className="Heading">
                                    <div className="Heading-container">
                                        <svg
                                            width="28"
                                            height="28"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="Heading-icon"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3ZM5 1C2.79086 1 1 2.79086 1 5V19C1 21.2091 2.79086 23 5 23H19C21.2091 23 23 21.2091 23 19V5C23 2.79086 21.2091 1 19 1H5Z"
                                                fill="currentColor"
                                            />
                                            <path d="M16 12L10 16.3301V7.66987L16 12Z" fill="currentColor" />
                                        </svg>
                                        <div className="Heading-text">Watch</div>
                                    </div>
                                    <ul className="List-container">
                                        <li>What to Watch</li>
                                        <li>Latest Trailers</li>
                                        <li>IMDb Originals</li>
                                        <li>IMDb Picks</li>
                                        <li>IMDb Podcasts</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="Category-list">
                                <div className="Heading">
                                    <div className="Heading-container">
                                        <svg
                                            width="28"
                                            height="28"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="Heading-icon"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM14.8055 18.4151C17.1228 17.4003 18.7847 15.1667 18.9806 12.525C18.1577 12.9738 17.12 13.3418 15.9371 13.598C15.7882 15.4676 15.3827 17.1371 14.8055 18.4151ZM9.1945 5.58487C7.24725 6.43766 5.76275 8.15106 5.22208 10.244C5.4537 10.4638 5.84813 10.7341 6.44832 11.0008C6.89715 11.2003 7.42053 11.3798 8.00537 11.5297C8.05853 9.20582 8.50349 7.11489 9.1945 5.58487ZM10.1006 13.9108C10.2573 15.3675 10.5852 16.6202 10.9992 17.5517C11.2932 18.2133 11.5916 18.6248 11.8218 18.8439C11.9037 18.9219 11.9629 18.9634 12 18.9848C12.0371 18.9634 12.0963 18.9219 12.1782 18.8439C12.4084 18.6248 12.7068 18.2133 13.0008 17.5517C13.4148 16.6202 13.7427 15.3675 13.8994 13.9108C13.2871 13.9692 12.6516 14 12 14C11.3484 14 10.7129 13.9692 10.1006 13.9108ZM8.06286 13.598C8.21176 15.4676 8.61729 17.1371 9.1945 18.4151C6.8772 17.4003 5.21525 15.1666 5.01939 12.525C5.84231 12.9738 6.88001 13.3418 8.06286 13.598ZM13.9997 11.8896C13.369 11.9609 12.6993 12 12 12C11.3008 12 10.631 11.9609 10.0003 11.8896C10.0135 9.66408 10.4229 7.74504 10.9992 6.44832C11.2932 5.78673 11.5916 5.37516 11.8218 5.15605C11.9037 5.07812 11.9629 5.03659 12 5.01516C12.0371 5.03659 12.0963 5.07812 12.1782 5.15605C12.4084 5.37516 12.7068 5.78673 13.0008 6.44832C13.5771 7.74504 13.9865 9.66408 13.9997 11.8896ZM15.9946 11.5297C15.9415 9.20582 15.4965 7.11489 14.8055 5.58487C16.7528 6.43766 18.2373 8.15107 18.7779 10.244C18.5463 10.4638 18.1519 10.7341 17.5517 11.0008C17.1029 11.2003 16.5795 11.3798 15.9946 11.5297Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                        <div className="Heading-text">Community</div>
                                    </div>
                                    <ul className="List-container">
                                        <li>Help Center</li>
                                        <li>Contributor Zone</li>
                                        <li>Polls</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='navbarWrapper'>
                    <div className='Navbar'>
                        <div className='Menu'>
                            <span className='Logo'>IMDb</span>
                            <div className='Menu-wrapper'>
                                {windowSize.width > 768 ? <div className='Hamburger-wrapper' onClick={handleNavbarMenu}>
                                    <span className='Hamburger'></span>
                                    <span className='Hamburger'></span>
                                    <span className='Hamburger'></span>
                                </div> : <SidebarMenu handleSidebar={handleSidebarMenu}/>}
                                <div className='Menu-text' onClick={handleNavbarMenu}>Menu</div>
                            </div>
                            <SearchFilter/>
                            <div className='premiumPlan'> IMDb <span>Pro</span> </div>
                            <div className="watchlistContainer">
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className='watchlistIcon'
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M19 20H17.1717L12.7072 15.5354C12.3166 15.1449 11.6835 15.1449 11.2929 15.5354L6.82843 20L5 20V7C5 5.34315 6.34315 4 8 4H16C17.6569 4 19 5.34314 19 7V20ZM17 7C17 6.44772 16.5523 6 16 6H8C7.44772 6 7 6.44772 7 7V17L9.87873 14.1212C11.0503 12.9497 12.9498 12.9497 14.1214 14.1212L17 16.9999V7Z"
                                        fill="currentColor"
                                    />
                                </svg>
                                Watchlist
                            </div>
                        </div>
                        <OptionBar/>
                    </div>
                    </div>
                {/* {sidebarMenu ? <SidebarMenu handleSidebar={handleSidebarMenu} /> : null} */}
            </>
        )
    
}

export default Navbar;

{/* <div className='Hamburger-wrapper' onClick={handleSidebarMenu}>
    <span className='Hamburger'></span>
    <span className='Hamburger'></span>
    <span className='Hamburger'></span>
</div> */}