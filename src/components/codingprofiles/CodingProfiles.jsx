import React from 'react';
import './CodingProfiles.css';
import codechefLogo from '../../assets/codechef.jpg';
import leetcodeLogo from '../../assets/leetcode.png';
import hackerranklogo from '../../assets/hackerranklogo.jpeg';
import smartinterviews from '../../assets/smartinterviews.gif';
import codeforces from '../../assets/codeforces.png';
const profiles = [
  {
    name: "CodeChef",
    username: "deepu0717",
    logo: codechefLogo,
    url: "https://www.codechef.com/users/deepu0717"
  },
  {
    name: "HackerRank",
    username: "h2300031389",
    logo:hackerranklogo,
    url: "https://www.hackerrank.com/profile/h2300031389"
  },
  {
    name: "LeetCode",
    username: "klu2300031389",
    logo: leetcodeLogo,
    url: "https://leetcode.com/u/klu2300031389/"
  },
  {
    name: "Smart Interviews",
    username: "2300031389",
    logo: smartinterviews,
    url: "https://smartinterviews.in/profile/2300031389"
  },
  {
    name: "Code Forces",
    username: "KLU2300031389",
    logo: codeforces,
    url: "https://codeforces.com/profile/KLU2300031389"
  },

];

const CodingProfiles = () => {
  return (
    <section className="coding-profiles" id="coding-profiles">
      <h2 className="section__title">My Coding Profiles</h2>
      <div className="profiles">
        {profiles.map(({ name, username, logo, url }) => (
          <div key={name} className="profile-card" aria-label={`${name} Profile`}>
            <img src={logo} alt={`${name} Logo`} className="profile-logo" />
            <div className="profile-info">
              <h3>{name}</h3>
              <p className="username">@{username}</p>
              <a href={url} target="_blank" rel="noopener noreferrer">
                <button className="profile-button">Visit Profile</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CodingProfiles;
