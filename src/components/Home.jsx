import React from "react";
// import Brennan from "../assets/brennan.png";
import brennanC from "../assets/brennan-circled.png";
// import controller from "../assets/controller.png";
// import guitar from "../assets/guitar.png";
import Link from '@mui/material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import HTMLshot from "../assets/HTML-Screenshot.PNG";
import CSSshot from "../assets/CSS-Screenshot.PNG";
import Dice from "../assets/Dice-Screenshot.PNG";
import NewsletterShot from "../assets/Newsletter-Signup-Screenshot.PNG";
import SimonShot from "../assets/Simon-Says-Screenshot.PNG";
import TinDogShot from "../assets/TinDog-Screenshot.PNG";
import ToDoShot from "../assets/ToDo-List-Screenshot.PNG";



//https://www.rammaheshwari.com/

function Home() {
  return (
    <div>

      {/**************INTRO SECTION**************/}
      <section class="introSection">
        <div class="iconBar">
          <Link href="https://github.com/bschall20">
            <GitHubIcon fontSize="large" />
          </Link>
          <Link href="https://www.linkedin.com/in/brennan-schall-36bb14139/">
            <LinkedInIcon fontSize="large" />
          </Link>
        </div>

        <div class="introDiv">
          <h1>HEY, I'M BRENNAN SCHALL</h1>
          <p class="introDivP">I'm a self-taught Frontend focused Web Developer located in Toledo, Ohio that is passionate about creating art through code and
            learning new coding practices!</p>
        </div>
      </section>


      {/**************ABOUT SECTION**************/}
      <section class="aboutSection">
        <div>
          <h2>ABOUT ME</h2>
          <hr />
          <p class="sectionP">Here you will find more information about me from my skills,
            what I do, and my life outside of coding!</p>
        </div>

        <div class="aboutSub">
          <div class="aboutBoxes">
            <h3>Get to know me!</h3>
            <p class="subP">I'm a self-taught Frontend Web Developer with a passion for developing interactive art through code.
              My <a href="https://www.bgsu.edu/technology-architecture-and-applied-engineering/schools-and-departments/engineering-technologies/electronics-and-computer-engineering-technology.html">
                Electronics and Computer Engineering Technology degree</a> introduced me to coding
              in Visual Basic and C++ and I have decided to further pursue programming through Web Development!</p>

            <p class="subP">Outside of coding, I enjoy gaming on my PC, playing my guitar, working out,
              trying to learn stocks, and hanging out with friends to watch football and hockey or play Name That Tune. </p>

            <p class="subP">If you think I'm a great fit for your developer team,
              feel free to reach out! I am interested in learning new coding practices in
              a professional environment and growing my skills through receiving constructive criticism and feedback.</p>
          </div>

          <div class="aboutBoxes">
            <h3 style={{ paddingBottom: "10px" }}>My Skills</h3>
            <p class="skill">HTML</p>
            <p class="skill">CSS</p>
            <p class="skill">JavaScript</p>
            <p class="skill">React</p>
            <p class="skill">GIT</p>
            <p class="skill">Github</p>
            <p class="skill">Responsive Design</p>
            <p class="skill">SQL Basics</p>
            <p class="skill">Terminal</p>
            <p class="skill">JQuery</p>
            <p class="skill">MongoDB</p>
            <p class="skill">Mongoose</p>
            <p class="skill">Express JS</p>
            <p class="skill">Node JS</p>
          </div>
        </div>

      </section>


      {/**************PROJECTS SECTION**************/}
      <section class="projectSection">
        <h2>PROJECTS</h2>
        <hr />
        <p class="sectionP">Here you will find some of the projects I've worked on
          in my free time ranging from just HTML to backend content!</p>

        <div class="projectSub">

          <div class="projectBox">
            <img src={Dice} alt="Dice Game Screenshot" class="projectImg" />
            <p class="projectP">asdfasf asd fasdf asdfknlasdbl fkasnhf lkjasfh aks 
            asd;lfjk haslkjdfh as;f  asldkjf laksjdhflksajd hf
            asd fasf l;kasf;lk as;dlfjk als;kjfdlkas</p>
          </div>

          <div class="projectBox">
            <img src={SimonShot} alt="Simon Says Screenshot" class="projectImg" />
            <p class="projectP">yeah yeah</p>
          </div>

          <div class="projectBox">
            <img src={NewsletterShot} alt="Newsletter Signup Screenshot" class="projectImg" />
            <p class="projectP">yeah yeah</p>
          </div>

          <div class="projectBox">
            <img src={ToDoShot} alt="ToDo List Website Screenshot" class="projectImg" />
            <p class="projectP">yeah yeah</p>
          </div>
          
          <div class="projectBox">
          <img src={TinDogShot} alt="TinDog Website Screenshot" class="projectImg" />
            <p class="projectP">Ever wanted a place for your dog to swipe on other dogs to go
            on pup dates? </p>
          </div>

        </div>







        {/* <div class="skillRow">
          <img class="controllerImg" src={controller} alt="Controller" />
          <h3>Video Games</h3>
          <p>I started playing video games from a very young age; starting around 4 or 5. I began on my Gameboy
            Color and slowly progressed to a Playstation 2,
            up through Playstation 3/Xbox 360 and Xbox 1 to my very own PC that I built for myself in college at
            19. Up until then, I never owned or really used a computer but
            graduated with my Bachelors of Science degree with a 3.52 GPA!
          </p>
        </div>

        <div class="skillRow">
          <img class="guitarImg" src={guitar} alt="Guitar" />
          <h3>Guitar</h3>
          <p>I started teaching myself guitar in 2020 before I graduated and before the pandemic hit and I fell in
            love! I recently purchased a Sunburst Cherry PRS SE Custom 24-08
            that I have been using to learn songs ranging from my favorite punk rock bands (blink-182, Neck
            Deep, The Story So Far) to my favorite 80s bands <em>(and similar,
              such as</em> Def Leppard, Motley Crue, Scorpions, Greta Van Fleet, and more). Hopefully some day
            I'll be able to play by ear! </p>
        </div> */}
      </section>


      {/**************CONTACT SECTION**************/}
      <section class="contact">
        <h2>GET IN TOUCH</h2>
        <h3>If you're interested in my work.</h3>
        <hr />
        <p class="infoP">
          Looking to hire me, talk about best coding practices, or provide feedback on my website? Reach out to me below!
          I'd love to form or join a community to improve ourselves!</p>
        {/* <a href="#"><b>REVIEWS</b></a> page!</p> */}
        <a class="btn" href="mailto:schallb@bgsu.edu">CONTACT ME</a>
      </section>

    </div>
  );
}

export default Home;
