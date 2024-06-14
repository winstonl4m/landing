import React from 'react'
import Cards from './Cards'
import './CardSection.css';

function CardSection() {
    return (
        <div className = 'cards' id="projects">
            <h1>Personal Projects</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                    <Cards 
                    link_url ="https://winstonl4mfinancetracker.netlify.app/"
                    src='images/finance-tracker-pic.jpg'
                    text="Finance Tracker"
                    about="FINANCE TRACKER TO RECORD YOUR INCOME/EXPENSES"
                    label="ReactJS"
                    />                  
                    
                    
                    <Cards
                    link_url = "https://master--winstaphotogallery.netlify.app/"
                    src='images/winsta-pic.jpg'
                    text="Winstagram"
                    about="PHOTO GALLERY FOR UPLOADING IMAGES"
                    label="ReactJS/Firebase"
                    />                  
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default CardSection
