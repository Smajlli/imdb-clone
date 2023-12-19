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
                    </div>}
                {sidebarMenu ? <SidebarMenu handleSidebar={handleSidebarMenu} /> : null}
            </>
        )
    
}

export default Navbar;