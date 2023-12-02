import './Navbar.css'
import { useState, useEffect } from 'react';
import OptionBar from './OptionBar';
import SearchFilter from './SearchFilter';
import NavbarMenu from './NavbarMenu';
import screenSize from '../hooks/ScreenSize';
import SidebarMenu from '../sidebar-menu/SidebarMenu';

function Navbar() {
    const [optionBar, setOptionBar] = useState(false);
    const [searchFilter, setSearchFilter] = useState(false);
    const [navbarMenu, setNavbarMenu] = useState(false);
    const [sidebarMenu, setSidebarMenu] = useState(false);

    const handleOptionBar = () => {
        setOptionBar(!optionBar);
    };

    const handleSearchFilter = () => {
        setSearchFilter(!searchFilter);
    };

    const handleNavbarMenu = () => {
        setNavbarMenu(!navbarMenu);
    };

    const handleSidebarMenu = () => {
        setSidebarMenu(!sidebarMenu);
    };

    const windowSize = screenSize();

        return(

            <>
                {navbarMenu ? <NavbarMenu handleMenu={handleNavbarMenu} /> : <div className='navbarWrapper'>
                    <div className='Navbar'>
                        <div className='Menu'>
                            <span className='Logo'>IMDb</span>
                            <div className='Menu-wrapper'>
                                {windowSize.width > 768 ? <div className='Hamburger-wrapper' onClick={handleNavbarMenu}>
                                    <span className='Hamburger'></span>
                                    <span className='Hamburger'></span>
                                    <span className='Hamburger'></span>
                                </div> : <div className='Hamburger-wrapper' onClick={handleSidebarMenu}>
                                    <span className='Hamburger'></span>
                                    <span className='Hamburger'></span>
                                    <span className='Hamburger'></span>
                                </div>}
                                <div className='Menu-text' onClick={handleNavbarMenu}>Menu</div>
                            </div>
                            <div className="Search-box" onBlur={handleSearchFilter}>
                                <div className='Left-side-search' onClick={handleSearchFilter}><label htmlFor="search">All</label></div>
                                <div className='Right-side-search'><input type="text" className='Search' id='search' placeholder='Search IMDb' /></div>
                                <a href="/" className='searchIconContainer'>
                                    <svg
                                        width="22"
                                        height="22"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className='searchIcon'
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M18.319 14.4326C20.7628 11.2941 20.542 6.75347 17.6569 3.86829C14.5327 0.744098 9.46734 0.744098 6.34315 3.86829C3.21895 6.99249 3.21895 12.0578 6.34315 15.182C9.22833 18.0672 13.769 18.2879 16.9075 15.8442C16.921 15.8595 16.9351 15.8745 16.9497 15.8891L21.1924 20.1317C21.5829 20.5223 22.2161 20.5223 22.6066 20.1317C22.9971 19.7412 22.9971 19.1081 22.6066 18.7175L18.364 14.4749C18.3493 14.4603 18.3343 14.4462 18.319 14.4326ZM16.2426 5.28251C18.5858 7.62565 18.5858 11.4246 16.2426 13.7678C13.8995 16.1109 10.1005 16.1109 7.75736 13.7678C5.41421 11.4246 5.41421 7.62565 7.75736 5.28251C10.1005 2.93936 13.8995 2.93936 16.2426 5.28251Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </a>
                            </div>
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
                                {optionBar ? <OptionBar /> : null}
                            </div>
                            <div className='useApp'>Use app</div>
                        </div>
                    </div>
                    </div>}
                {searchFilter ? <SearchFilter /> : null}
                {sidebarMenu ? <SidebarMenu handleSidebar={handleSidebarMenu} /> : null}
            </>
        )
    
}

export default Navbar;