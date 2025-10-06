import React from 'react';
import './Home.css';
import Me from '../../assets/home.jpg';
import HeaderSocials from './HeaderSocials';

const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <div className="left">
          <img src={Me} alt="Deepika Reddy Profile" className="home__img" />
        </div>
        <div className="right">
          <h1 className="home__name">Deepika Reddy Mandapati</h1>
          <p className="home__education">
             Computer Science Student  <br />
             AI & Machine Learning Enthusiast<br/>
             Specializing in AI-driven Language Models


          </p>
          <HeaderSocials />
          <a href="#contact" className="btn contact-btn">
            Contact Me
          </a>
        </div>
      </div>


    </section>
  );
};

export default Home;
