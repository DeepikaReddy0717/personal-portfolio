import React from 'react';
import LinkedInLogo from '../../assets/LinkedInLogo.png';
import GitHubLogo from '../../assets/GithubLogo.png';
import InstagramLogo from '../../assets/InstagramLogo.png';

const HeaderSocials = () => {
    return (
        <div className='home__socials'>
            <a href='https://github.com/DeepikaReddy0717' className='home__social-link' target='_blank' rel='noreferrer'>
                <img src={GitHubLogo} alt="GitHub Logo" className="social-logo" />
            </a>

            <a href='https://www.linkedin.com/in/deepikareddymandapati/' className='home__social-link' target='_blank' rel='noreferrer'>
                <img src={LinkedInLogo} alt="LinkedIn Logo" className="social-logo" />
            </a>

            

            <a href='https://www.instagram.com/_deepikareddy_23/' className='home__social-link' target='_blank' rel='noreferrer'>
                <img src={InstagramLogo} alt="Instagram Logo" className="social-logo" />
            </a>
             

            
        </div>
    );
};

export default HeaderSocials;
