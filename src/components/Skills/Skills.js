import React from 'react'
import './Skills.css'
import SkillItem from './SkillItem';

const education = {
    school:"University of British Columbia",
    degree:"Bachelors of Science, Statistics",
    schoolLength:"Sept 2015 - May 2020"
};



const jobsArray = [
    {
        jobTitle:"Junior Software Developer",
        company:"HCL Technologies Limited",
        duration: "Jun 2023 - Current",
        jobDesc:[
            "Developing a mobile application using React Native which allows users to create an account, upload videos and articles, and view other user’s posts, stories, and videos",
            "Created a POS System for a client using Angular 14, allowing agents to perform and conduct customer sales, which involves searching/creating customers, fetching exchange rates and performing money transfers",
            "Created a web scraper tool using React, Node.js and Puppeteer to display and compare various exchange rates that are offered between a multitude of financial services such as Western Union, Wise, and Remitly",
        ]
    
    },
    {
        jobTitle:"Software Developer",
        company:"Aether Automation Inc.",
        duration: "Jan 2022 - Jun 2023",
        jobDesc:[
            "Complete mastery of Zoho Deluge and its 25+ applications in Zoho Suite",
            "Collaborated with project managers to design, test, and develop automation workflow processes for production scale SaaS applications",
            "Built web applications with Zoho’s development platform with REST API proficiency for integration to third-party services such as WooCommerce, Canvas LMS, and Xero"
        ]
    
    }
]


const jobs = jobsArray.map((job) =>
    <div className='work_element'>
        <h2>{job.jobTitle}</h2>
        <em>{job.company}</em>
        <p>{job.duration}</p>
        <ul>
            {job.jobDesc.map((jobDetail)=>
            <li>{jobDetail}</li>)}
        </ul>
        <br></br>
    </div>
)

function Skills() {
    return (
            <div className="skills" >


                <div className="work_container">
                    <div className="work_section">
                            <h1>Work Experience</h1>
                    </div> 
                    <div className="work_info">
                        {jobs}
                    </div>
                    
                </div>
                
                <div className="thin_bar"></div>

                <div className="education_container">
                    <div className="education_section">
                            <h1>Education</h1>
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
                        <h1>Skills</h1>
                    </div>
                    <div className='skills_item_container'>
                        <div className='skillsGrid'>
                            <SkillItem source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"/>
                            <SkillItem source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
                            <SkillItem source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" />
                            <SkillItem source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
                            <SkillItem source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
                            <SkillItem source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-plain.svg" />
                            <SkillItem source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
                            <SkillItem source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" />
                            <SkillItem source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" />
                            <SkillItem source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />
                            <SkillItem source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" />
                            <SkillItem source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" />
                            <SkillItem source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-plain-wordmark.svg" />
                        </div>
                    </div>
                </div>
                
            </div>
    )
}

export default Skills
