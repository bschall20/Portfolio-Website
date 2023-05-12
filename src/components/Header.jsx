import React, { useState } from "react";
import ToggleIcon from './ToggleIcon';





function showNavbar() {
    const navs = document.querySelectorAll('.navbarItems')
    navs.forEach(nav => nav.classList.toggle('navbarToggleShow'));

    const navbarIcon = document.querySelector('.navbarLinkToggle');
    navbarIcon.classList.toggle('')
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
            <div class="navbar">
                <div class="navbarLink navbarBrand">
                <a href="#home">Brennan Schall</a>
                </div>
                <div class="navbarLinkToggle" onClick={showNavbar}>
                    <ToggleIcon active={active} handleChangeActive={handleChangeActive} />
                </div>

                <nav class="navbarItems navbarItemsRight">
                    <div class="navbarLink toggleItem">
                        <a href="#home">Home</a>
                    </div>
                    <div class="navbarLink toggleItem">
                        <a href="#about">About</a>
                    </div>
                    <div class="navbarLink toggleItem">
                        <a href="#projects">Projects</a>
                    </div>
                    <div class="navbarLink toggleItem">
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