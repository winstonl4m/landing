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
    },{
        "type": "ZOHO DELUGE",
        "level": "95%",
        "colour":"#A6E6D9"
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

const education = {
    school:"University of British Columbia",
    degree:"Bachelors of Science, Statistics",
    schoolLength:"Sept 2015 - May 2020"
};

const job1 = {
    jobTitle:"Software Developer",
    company:"Aether Automation Inc.",
    duration: "Jan 2022 - Current",
    jobDesc:{
        desc1:"Complete mastery of Zoho Deluge and its 25+ applications in Zoho Suite",
        desc2:"Collaborated with project managers to design, test, and develop automation workflow processes for production scale SaaS applications",
        desc3:"Built web applications with Zoho’s development platform with REST API proficiency for integration to third-party services such as WooCommerce, Canvas LMS, and Xero"
    },
    jobDesc:[
        "Complete mastery of Zoho Deluge and its 25+ applications in Zoho Suite","Collaborated with project managers to design, test, and develop automation workflow processes for production scale SaaS applications","Built web applications with Zoho’s development platform with REST API proficiency for integration to third-party services such as WooCommerce, Canvas LMS, and Xero"
    ]

};

const jobDesc =[
    "Complete mastery of Zoho Deluge and its 25+ applications in Zoho Suite","Collaborated with project managers to design, test, and develop automation workflow processes for production scale SaaS applications","Built web applications with Zoho’s development platform with REST API proficiency for integration to third-party services such as WooCommerce, Canvas LMS, and Xero"
]

const listDesc = jobDesc.map((desc)=>
    <li>{desc}</li>
);

function Skills() {
    return (
            <div className="skills" >

                <div className="education_container">
                    <div className="education_section">
                            <h2>WORK EXPERIENCE</h2>
                    </div> 
                    
                    <div className="education_info">
                        <h3>{job1.jobTitle} </h3>
                        <em>{job1.company}</em>
                        <p>{job1.duration} </p>
                        <ul>{listDesc}</ul>
                    </div>
                    
                    
                </div>
                
                <div className="thin_bar"></div>

                <div className="education_container">
                    <div className="education_section">
                            <h2>EDUCATION</h2>
                    </div> 
                    <div className="education_info">
                        <h3> {education.school}</h3>
                        <em>{education.degree} </em>
                        <p>{education.schoolLength}</p>
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
