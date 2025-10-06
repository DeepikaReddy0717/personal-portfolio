import React from 'react';
import './Education.css';
import Image1 from '../../assets/klu.jpeg'
import Image2 from '../../assets/scec.jpeg'
import Image3 from '../../assets/10th.jpeg'

const data = [
    
    {
        id: 1,
        image: Image1,
        title: "Bachelor of Technology (B.Tech) in Computer Science and Engineering",
        description: "K L E F Deemed To Be University | 2023 - 2027 | Vijayawada, Andhra Pradesh | GPA: 9.92/10"
    },
    
    
    {
        id: 2,
        image: Image2,
        title: "Intermediate (Class 12)- MPC (Maths, Physics, Chemistry)",
        description: "Sri Chaithanya Junior College|  State Board | 2021 - 2023 |Vijayawada, Andhra Pradesh | GPA: 97.3/10"
    },
    {
        id: 3,
        image: Image3,
        title: "Secondary (Class 10)",
        description: "Scholars School| state Board | 2020 - 2021 | Piduguralla,Andhra Pradesh | GPA: 10/10"
    },
];

const Education = () => {
    return (
        <section className="education container section" id="education">
            <h2 className="section__title">Education</h2>

            <div className="education__container grid">
                {data.map(({ id, image, title, description }) => {
                    return (
                        <div className="education__card" key={id}>
                            <img src={image} alt='' className='education__img' width="80" />

                            <h3 className="education__title">{title}</h3>
                            <p className="education__description">{description}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Education