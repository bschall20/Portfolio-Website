import React from "react";
import Link from '@mui/material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ProjectEntry from "./ProjectEntry";
import projects from "../projects";

function createProject(projectProps) {
  return (
    <ProjectEntry
      key={projectProps.id}
      image={projectProps.image}
      link={projectProps.link}
      title={projectProps.title}
      description={projectProps.description}
      roadblocks={projectProps.roadblocks}
      learned={projectProps.learned}
    />
  );
}

//https://www.rammaheshwari.com/

function Home() {
  return (
    <div>

      {/**************INTRO SECTION**************/}
      {/* <a id="home"/> */}
      <section className="introSection" id="home">
        <div className="iconBar">
          <Link href="https://github.com/bschall20" target="_blank" rel="noreferrer">
            <GitHubIcon fontSize="large"/>
          </Link>
          <Link href="https://www.linkedin.com/in/brennan-schall-36bb14139/" target="_blank" rel="noreferrer">
            <LinkedInIcon fontSize="large"/>
          </Link>
        </div>

        <div className="introDiv">
          <h1>HEY, I'M BRENNAN SCHALL</h1>
          <p className="introDivP" id="about">I'm a self-taught Frontend focused Web Developer located in Toledo, Ohio that is passionate about creating art through code and
            learning new coding practices!</p>
        </div>
      </section>


      {/**************ABOUT SECTION**************/}
      {/* <a id="about"/> */}
      <section className="aboutSection">
        <div>
          <h2>ABOUT ME</h2>
          <hr />
          <p className="sectionP">Here you will find more information about me from my skills,
            what I do, and my life outside of coding!</p>
        </div>

        <div className="aboutSub">
          <div className="aboutBoxes">
            <h3>Get to know me!</h3>
            <p className="subP">I'm a self-taught Frontend Web Developer with a passion for developing interactive art through code.
              My <a href="https://www.bgsu.edu/technology-architecture-and-applied-engineering/schools-and-departments/engineering-technologies/electronics-and-computer-engineering-technology.html">
                Electronics and Computer Engineering Technology degree</a> introduced me to coding
              in Visual Basic and C++ and I have decided to further pursue programming through Web Development!</p>

            <p className="subP">Outside of coding, I enjoy gaming on my PC, playing my guitar, working out,
              trying to learn stocks, and hanging out with friends to watch football and hockey or play Name That Tune. </p>

            <p className="subP">If you think I'm a great fit for your developer team,
              feel free to reach out! I am interested in learning new coding practices in
              a professional environment and growing my skills through receiving constructive criticism and feedback.</p>
          </div>

          <div className="aboutBoxes">
            <h3 style={{ paddingBottom: "10px" }}>My Skills</h3>
            <p className="skill">HTML</p>
            <p className="skill">CSS</p>
            <p className="skill">JavaScript</p>
            <p className="skill">React</p>
            <p className="skill">GIT</p>
            <p className="skill">Github</p>
            <p className="skill">Responsive Design</p>
            <p className="skill">SQL</p>
            <p className="skill">Terminal</p>
            <p className="skill">JQuery</p>
            <p className="skill">MongoDB</p>
            <p className="skill">Mongoose</p>
            <p className="skill">Express JS</p>
            <p className="skill">Node JS</p>
            <p className="skill" id="projects">REST API's</p>
          </div>
        </div>
        {/* <a id="projects"/> */}
      </section>


      {/**************PROJECTS SECTION**************/}
      <section className="projectSection">
        <h2>PROJECTS</h2>
        <hr />
        <p className="sectionP">Here you will find some of the projects I've worked on
          in my free time ranging from just HTML to backend content!</p>

        <div className="projectSub">

          {/* <div class="projectBox">
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
          </div> */}
          
            <span>{projects.map(createProject)}</span>
          
        </div>
        {/* <a id="contact"/> */}
      </section>


      {/**************CONTACT SECTION**************/}
      <section className="contact" id="contact">
        <h2>GET IN TOUCH</h2>
        <h3>If you're interested in my work.</h3>
        <hr />
        <p className="infoP">
          Looking to hire me, talk about best coding practices, or provide feedback on my website? Reach out to me below!
          I'd love to form or join a community to improve ourselves!</p>
        <a className="btn" href="mailto:schallb@bgsu.edu">CONTACT ME</a>
      </section>

    </div>
  );
}

export default Home;
