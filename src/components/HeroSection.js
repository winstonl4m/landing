import React from 'react'
import '../App.css'
import { Button } from './Button'
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src='/videos/video-1.mp4' autoPlay loop muted/>
            <h1>Hey, I'm Winston.</h1>
            <p> UBC Statistics Graduate</p>
            <div className="hero-btns">

                {/* <Button 
                className='btns' 
                buttonStyle='btn--outline' 
                buttonStyle='btn--large'
                >
                    GET STARTED
                </Button>

                <Button 
                className='btns' 
                buttonStyle='btn--primary' 
                buttonStyle='btn--large'
                >
                    WATCH TRAILER<i className='far fa-play-circle'></i>
                </Button> */}
            </div>
        </div>
    )
}

export default HeroSection
