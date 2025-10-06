import React from 'react';
import './SkillsAndTechnology.css';

const skillsData = [
    {
        category: "🖥️ Programming Languages",
        items: ["C/C++", "Java", "Python", "SQL"],
    },
    {
        category: "🌐 Web Technologies",
        items: ["HTML", "CSS", "JavaScript"],
    },
    {
        category: "⚙️ Frameworks & Platforms",
        items: [
            "Spring Boot + React Full Stack Development",
            "Tomcat Server",
            "Linux Administration",
            "Generative AI Prompting"
        ],
    },
    {
        category: "🗄️ Databases",
        items: ["MySQL", "PostgreSQL", "MongoDB"],
    },
    {
        category: "📊 Data Structures & Algorithms (DSA)",
        items: ["Intermediate DSA"],
    },
    
    {
        category: "📂 Version Control ",
        items: ["Git", "GitHub"],
    },
    
    
    {
        category: "🛠️ Developer Tools",
        items: [
            "VS Code",
            "Eclipse",
            "MySQL Workbench",
            "Postman",
            
        ],
    },
    {
        category: "☁️ Deployment & Hosting",
items: ["Vercel", "PythonAnywhere","Jenkins(CI/CD)",
            "Docker"],
     

    },
];

const SkillsAndTechnology = () => {
    return (
        <section className="skills container section" id="skills">
            <h2 className="section__title">Skills & Technologies</h2>
            <ul className="skills__list">
                {skillsData.map(({ category, items }, index) => (
                    <li key={index} className="skills__category">
                        <h3 className="skills__category-title">{category}</h3>
                        <ul className="skills__items">
                            {items.map((item, i) => (
                                <li key={i} className="skills__item">{item}</li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default SkillsAndTechnology;
