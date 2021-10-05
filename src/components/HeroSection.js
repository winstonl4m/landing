import React from 'react'
import '../App.css'
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container' id="hero">
            <video src='/videos/video-1.mp4' autoPlay loop muted/>
            <h1>Hey, I'm Winston.</h1>
            <p> UBC Statistics Graduate</p>
            
        </div>
    )
}

export default HeroSection
