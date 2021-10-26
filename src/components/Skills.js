import React from 'react'
import './Skills.css'

const skillsData = [
    {
        "type": "React",
        "level": "75%",
        "colour":"red"
    },
    {
        "type": "Node.js",
        "level": "70%",
        "colour":"green"
    },
    {
        "type": "Java",
        "level": "80%",
        "colour":"blue"
    },
    {
        "type": "Python",
        "level": "65%",
        "colour":"orange"
    },
    {
        "type": "C/C++",
        "level": "70%",
        "colour":"purple"
    },{
        "type": "SQL",
        "level": "60%",
        "colour":"#00CED1"
    }
]



const skills = skillsData.map((skills)=>{
    const backgroundColor = skills.colour;
    const className = "bar-expand " + skills.type.toLowerCase();
    const width = skills.level;
    return(
            <li key={skills.type} style={{listStyleType:"none"}}> 
            <span style = {{width, backgroundColor}} className={className}></span>
            <em>{skills.type}</em>
            </li>

    )
})






function Skills() {
    return (
            <div className="skills" >
                <h2>EDUCATION</h2>
                <div className="education_container">
                    <h3> University of British Columbia</h3>
                    <em> Bachelors of Science, Statistics</em>
                    <p> Sept 2015 - May 2020</p>

                </div>
                <div className="thin_bar"></div>
                <h2>SKILLS</h2>
                <div className="bars">
                    <ul className="skills_container">{skills}</ul>
                </div> 
            </div>
    )
}

export default Skills
