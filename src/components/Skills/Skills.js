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
        jobTitle:"QA Engineer",
        company:"Meta",
        duration: "Jun 2024 - Current",
        jobDesc:[
            "Developed and executed comprehensive test cases based on the detailed functional requirements for products such as Facebook, WhatsApp, Messenger, and Instagram across platforms such as iOS and Android.",
            "Created and maintained detailed documentation of test cases, test results, and defect logs using TestRail, ensuring clarity and consistency in the testing process.",
            "Reviewed test cases created by other team members, providing feedback and guidance to ensure quality and accuracy. Oversaw and distributed these test cases with offshore team members, fostering a collaborative work environment.",
        ]
    
    },
    {
        jobTitle:"Tech Engineer",
        company:"lululemon",
        duration: "Apr 2024 - Jun 2024",
        jobDesc:[
            "Created and analyzed Oracle SQL data-cleaning queries to remove 13 billion rows of non-NA data from the NA database in production.",
            "Created Splunk dashboards in SPL which searches, monitors, and analyzes machine-generated data, displaying metrics and problem diagnostics for business operations.",
            "Optimized existing Splunk dashboards in production by improving the speed, which drastically reduced the time taken to query results from 8s to ~3s.",
        ]
    
    },
    {
        jobTitle:"Software Developer",
        company:"HCL Technologies Limited",
        duration: "Jun 2023 - Current",
        jobDesc:[
            "Created a mobile application using React Native, Typescript, and OpenAI to showcase the use cases of Generative AI. Users can perform TTI, TTS, and STT, image generation, as well as moderations.",
            "Created a web scraper application for a big-name financial service corporation using React, Node.js, and the Puppeteer library to scrape and display the exchange rates for various money transfer services such as Western Union, Wise, and Remitly. This application generated millions in revenue for HCLTech.",
            "Built a full-stack web application using React, Typescript, Next.js, Golang, MongoDB, Vercel, and AWS EC2 which allows users and admins to register and create an account for managing credit cards. Admins can create their own credit card design, and users can request to use these credit cards. This application acquired a big-name client for HCLTech."
        ]
    
    },
    {
        jobTitle:"Software Developer",
        company:"Aether Automation Inc.",
        duration: "Jan 2022 - Jun 2023",
        jobDesc:[
            "Complete mastery of Zoho Deluge and its 25+ applications in Zoho Suite.",
            "Collaborated with project managers to design, test, and develop automation workflow processes for production scale SaaS applications.",
            "Built web applications with Zoho’s development platform with REST API proficiency for integration to third-party services such as WooCommerce, Canvas LMS, and Xero."
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
                            <SkillItem source="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg"/>
                            <SkillItem source="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original-wordmark.svg"/>
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
