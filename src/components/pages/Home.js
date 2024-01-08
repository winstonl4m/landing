import '../../App.css'
import HeroSection from '../HeroSection'
import React,{Component} from 'react';
import CardSection from '../Projects/CardSection';
import About from '../About/About';
import ContactForm from '../ContactForm/ContactForm';
import Skills from '../Skills/Skills';

export default class Home extends Component{
    render(){
        return(
            <>
            <HeroSection id="hero-section"/>
            <About id="about-section"/>
            <Skills id="skills-section"/>
            <CardSection id="project-section"/>
            <ContactForm id ="contact-section"/>  
            </>
        );
    }

}


