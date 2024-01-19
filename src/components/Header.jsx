import React, { useState } from "react";
import ToggleIcon from './ToggleIcon';





function showNavbar() {
    const navs = document.querySelectorAll('.navbarItems')
    navs.forEach(nav => nav.classList.toggle('navbarToggleShow'));

    const navbarIcon = document.querySelector('.navbarLinkToggle');
    navbarIcon.classList.toggle('.navbarLinkToggle')
}



function Header() {
    const [active, setActive] = useState(false);
    const handleChangeActive = () => {
        setActive((previousIcon) => {
            return !previousIcon;
        });
    };

    return (
        <header>
            <div className="navbar">
                <div className="navbarLink navbarBrand">
                    <a href="#home">Brennan Schall</a>
                </div>
                <div className="navbarLinkToggle" onClick={showNavbar}>
                    <ToggleIcon active={active} handleChangeActive={handleChangeActive} />
                </div>

                <nav className="navbarItems navbarItemsRight">
                    <div className="navbarLink toggleItem">
                        <a href="#home">Home</a>
                    </div>
                    <div className="navbarLink toggleItem">
                        <a href="#about">About</a>
                    </div>
                    <div className="navbarLink toggleItem">
                        <a href="#projects">Projects</a>
                    </div>
                    <div className="navbarLink toggleItem">
                        <a href="#contact">Contact</a>
                    </div>
                    {/* <div class="navbarLink toggleItem">
                        Reviews
                    </div> */}
                </nav>
            </div>
        </header>
    );
}





export default Header;