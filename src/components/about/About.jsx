import React from 'react';
import './About.css';
import Image from '../../assets/about-profile.jpg';
import Resume from '../../assets/DEEPU.pdf'; 

const About = () => {
    const downloadResume = () => {
        window.open(Resume, '_blank');
    };

    return (
        <section className="about container section" id="about">
            <h2 className="section__title">About Me</h2>

            <div className="about__container grid">
                {/* Profile Image */}
                <div className="about__img-container">
                    <img src={Image} alt="Deepika Reddy" className="about__img" />
                </div>

                {/* About Data */}
                <div className="about__data">
                    <p className="about__description">
                        Hi! I’m <strong>Deepika Reddy</strong>, a passionate Computer Science student at 
                        <strong> Koneru Lakshmaiah University</strong> with a growing love for technology, logic, 
                        and creativity. I am building strong coding skills in <strong>C,
                             C++, Python</strong> and practicing <strong>Data Structures & Algorithms 
                                (DSA)</strong> to solve real-world problems.
                        I enjoy exploring AI technologies, experimenting with ML projects, and learning from open-source contributions and coding challenges.
                    </p>

                    <p className="about__description">
                       I’m excited to work on AI/ML projects, internships, and team collaborations as I continue to grow in this field.
                    </p>

                    

                    <button className="btn download-resume" onClick={downloadResume}>
                        📄 Download Resume
                    </button>
                </div>
            </div>
        </section>
    );
};

export default About;
