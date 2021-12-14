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
        "colour":"#00008B"
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

                <div className="education_container">
                    <div className="education_section">
                            <h2>EDUCATION</h2>
                    </div> 
                    <div className="education_info">
                        <h3> University of British Columbia</h3>
                        <em> Bachelors of Science, Statistics</em>
                        <p> Sept 2015 - May 2020</p>
                    </div>
                </div>
                
                <div className="thin_bar"></div>

                <div className = "skills_container">
                    <div className="skills_section">
                        <h2>SKILLS</h2>
                    </div>
                    <div className="bars">
                        <ul className="skills_info">{skills}</ul>
                    </div> 
                </div>
                
            </div>
    )
}

export default Skills
