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
                        <p>I am a UBC graduate, with a major in
                        Statistics. Most of my education comprised of
                        statistical anaylsis, with the use of R. My degree also required having a strong academic 
                        background in mathematics in addition to computer programming. This prompted my interest 
                        in software development, 
                        where I learned concepts about data structures, algorithms, object oriented programming, and
                        procedural programming. Through my 
                        courses, I've gained a proficient understanding of languages such as
                        Java, C/C++, Haskell, and Prolog. Most recently, I have learned Python, SQL, and JavaScript(React/Node) during the Covid-19 pandemic. </p>
                        <br></br>
                        <br></br>
                        <br></br>
                        <p>As of now, my main focus is expanding my full-stack development capabilities. I have
                        created a few projects utilizing web development with common
                        algorithms, but programming in Java is what I'm most well versed in.
                        I'm excited to learn more about the tech industry and test my potential to change the world!</p> 
                    </div>
                     
                </div>
            </div>
        </div>
    )
}

export default About
