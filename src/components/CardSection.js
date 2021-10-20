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
                    src='images/finance-tracker-pic.jpg'
                    text="Finance Tracker"
                    about="FINANCE TRACKER TO RECORD YOUR INCOME/EXPENSES"
                    label="ReactJS"
                    path='/projects'/>                  
                    </ul>
                    
                </div>
            </div>

        </div>
    )
}

export default CardSection
