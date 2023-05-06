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
                    Brennan Schall
                </div>
                <div class="navbarLinkToggle" onClick={showNavbar}>
                    <ToggleIcon active={active} handleChangeActive={handleChangeActive} />
                </div>

                <nav class="navbarItems navbarItemsRight">
                    <div class="navbarLink toggleItem">
                        Home
                    </div>
                    <div class="navbarLink toggleItem">
                        About
                    </div>
                    <div class="navbarLink toggleItem">
                        Projects
                    </div>
                    <div class="navbarLink toggleItem">
                        Contact
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