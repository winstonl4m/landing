import '../../App.css'
import HeroSection from '../HeroSection'
import React from 'react';
import Cards from '../Cards';
import CardSection from '../CardSection';
import About from '../About';
import ContactForm from '../ContactForm';

function Home(){
    return(
        <>
        <HeroSection/>
        <About/>
        <CardSection/>
        <ContactForm/>
        
        </>
    );
}


export default Home;