import React from "react";
// import Brennan from "../assets/brennan.png";
// import brennanC from "../assets/brennan-circled.png";
import controller from "../assets/controller.png";
import guitar from "../assets/guitar.png";
import Link from '@mui/material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


//https://www.rammaheshwari.com/

function Home() {
  return (
    <div>

      <section class="intro">
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
          <p class="introDivP">A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product</p>
        </div>
      </section>



      <section class="about">
        <div>
          <h2>About Me</h2>
          <hr />
          <p style={{width: "66%", margin: "0 auto 50px"}}>Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</p>
        </div>

        <div class="aboutSub">
          <div class="aboutBoxes">
            <h3>Get to know me!</h3>
            <p class="aboutMeP">I'm a Frontend Web Developer building the front end of Websites and Web Applications that leads to the 
            success of the overall product. Check out some of my work in the Projects section.</p>

            <p class="aboutMeP">I also like sharing content related to the stuff that I have learned over the years in Web Development 
            so it can help other people of the Dev Community. Feel free to Connect or Follow me on my Linkedin where I post useful content 
            related to Web Development and Programming</p>

            <p class="aboutMeP">I'm open to Job opportunities where I can contribute, learn, and grow. If you have a good opportunity 
            that matches my skills and experience, then don't hesitate to contact me.</p>
          </div>

          <div class="aboutBoxes">
          <h3>My Skills</h3>
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


        {/* <img src={brennanC} alt="Brennan" class="selfie" style={{ paddingTop: "20px" }} />
        <h2>Hello.</h2>
        <p class="infoP">I am a 2020 Bowling Green State University graduate with a degree in Electronics and Computer Engineering Technology. I am currently a Nuclear Design
          Engineer but studying web design to be a Web Developer soon!</p> */}
      </section>



      <section class="skills">
        <h2>My Skills.</h2>
        <hr />
        <div class="skillRow">
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
        </div>
      </section>



      <section class="contact">
        <h2>Get In Touch</h2>
        <h3>If you're interested in my work.</h3>
        <hr />
        <p class="infoP">
          {/* Love relaxing and playing guitar or video games as much as I do? Let's talk about how awesome they are! <br />
          We can code and discuss them! */}
          Looking to hire me or talk about best coding practices? Reach out to me below! I'd love to form or join a community to improve ourselves!
          If you'd like to leave a review on my site about how to improve it, check out the reviews page </p>
          {/* <a href="#"><b>REVIEWS</b></a> page!</p> */}
        <a class="btn" href="mailto:schallb@bgsu.edu">CONTACT ME</a>
      </section>

    </div>
  );
}

export default Home;
