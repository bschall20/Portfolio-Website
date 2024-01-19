import React from "react";
import Link from '@mui/material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
  const year = new Date().getFullYear();


  return (
    <footer>

      <div className="footerContainer">

        <div className="footerIntro">
          <h2>BRENNAN SCHALL</h2>
          <p>A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product</p>
        </div>

        <div className="footerSocial">
          <h2>SOCIAL</h2>
          <Link href="https://github.com/bschall20" target="_blank">
            <GitHubIcon className="footerLink" />
          </Link>
          <Link href="https://www.linkedin.com/in/brennan-schall-36bb14139/" target="_blank">
            <LinkedInIcon className="footerLink" />
          </Link>
        </div>

      </div>

      <div className="footerCopyright">
        <hr style={{display: "block"}}/>
        {/* <p class="copyrightName">© Copyright {year}. Made by Brennan Schall</p> */}
        <p className="copyrightName">© Copyright {year}. Made by <a href="#home" style={{color:"inherit"}}>Brennan Schall</a></p>
      </div>
    </footer>
  ); 
}

export default Footer;
