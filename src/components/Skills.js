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
                <h1>Skills</h1>
                <div className="bars">
                    <ul className="skills_container">{skills}</ul>
                 
                {/* <div className="skills_container">
                    <p>React</p>
                    <div class="container">
                    <div class="skills_indiv react "></div>
                    </div>

                    <p>Node.js</p>
                    <div class="container">
                    <div class="skills_indiv node"></div>
                    </div>

                    <p>Java</p>
                    <div class="container">
                    <div class="skills_indiv java"></div>
                    </div>

                    <p>Python</p>
                    <div class="container">
                    <div class="skills_indiv python"></div>
                    </div>

                    <p>C/C++</p>
                    <div class="container">
                    <div class="skills_indiv cc"></div>
                    </div> */}
                </div> 
            </div>
    )
}

export default Skills
