import React from 'react';
import './SkillsAndTechnology.css';

const skillsData = [
    {
        category: "🖥️ Programming Languages",
        items: ["Python", "C", "C++", "Java", "SQL"],
    },
    {
        category: "🌐 Web Development",
        items: ["HTML", "CSS", "JavaScript", "React", "Spring Boot"],
    },
    {
        category: "🤖 AI / Machine Learning",
        items: [
            "Scikit-learn",
            "TensorFlow",
            "Keras",
            "NLP",
            "Isolation Forest",
            "BERT"
        ],
    },
    {
        category: "📊 Data Analysis & Visualization",
        items: [
            "NumPy",
            "Pandas",
            "Feature Engineering",
            "Matplotlib",
            "Seaborn"
        ],
    },
    {
        category: "🗄️ Databases",
        items: ["MySQL", "PostgreSQL", "MongoDB"],
    },
    {
        category: "⚙️ Tools & Platforms",
        items: [
            "Git",
            "GitHub",
            "Docker",
            "Postman",
            "VS Code"
        ],
    },
    {
        category: "☁️ Deployment & DevOps",
        items: ["Vercel", "PythonAnywhere", "Jenkins (CI/CD)"],
    },
    {
        category: "🏆 Competitive Programming",
        items: [
            "LeetCode (150+ problems)",
            "CodeChef (2⭐)",
            "Codeforces",
            "HackerRank"
        ],
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