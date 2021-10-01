import React from 'react'
import './About.css'

function About() {
    return (
        <div className="about" id="about">
            <h1>About Me</h1>
            <div className="about__container">
                <div className="about__wrapper" >
                    
                    <br></br>
                    <div className="pic">
                        <img float="left" src="/images/me-1.jpg" width= "400" />
                    </div>
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
                    <p>As of now, my main focus is expanding my full-stack development capabilities. I have
                    created a few projects utilizing web development with common
                    algorithms, but programming in Java is what I'm most well versed in.
                    I'm excited to learn more about the tech industry and test my potential to change the world!</p>  
                </div>
            </div>
        </div>
    )
}

export default About