import '../../App.css'
import HeroSection from '../HeroSection'
import React,{Component} from 'react';
import CardSection from '../CardSection';
import About from '../About';
import ContactForm from '../ContactForm';

export default class Home extends Component{
    render(){
        return(
            <>
            <HeroSection id="hero-section"/>
            <About id="about-section"/>
            <CardSection id="project-section"/>
            <ContactForm id ="contact-section"/>  
            </>
        );
    }

}


