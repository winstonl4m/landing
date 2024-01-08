import React from 'react'
import './About.css'

function About() {
    return (
        <div className="about" id="about">
            <h1>About Me</h1>
            <div className="about__container">
                <div className="about__wrapper" >
                    
                    
                    <div className="pic">
                        <img float="left" src="/images/me-2.jpg" width= "500" />
                    </div>

                    <div className= "about__paragraph">
                        <p>Hey, I'm Winston!</p>
                        <br></br>
                        <p>I graduated from the University of British Columbia, with a Bachelors of Science in
                        Statistics. Most of my education comprised of
                        statistical anaylsis, with the use of R. My degree also required having a strong academic 
                        background in mathematics in addition to computer programming. This prompted my interest 
                        in software development, 
                        where I learned concepts about data structures, algorithms, object oriented programming, and
                        procedural programming.</p>
                        <br></br>
                        <br></br>
                        <p>As of now, I am a Software Developer at HCLTech. My current focus is on mobile development using React Native and exploring the future of AI. I am also well-versed in the front-end, where I've utilized React, Typescript, and Angular.</p>
                        <br></br>
                        <p>I'm excited to learn more about the tech industry and test my potential to change the world!</p> 
                    </div>
                     
                </div>
            </div>
        </div>
    )
}

export default About
