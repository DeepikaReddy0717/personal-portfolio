import sdp from '../../assets/sdp.png';
import skillcraft from '../../assets/s.png';
import averixis from '../../assets/averixix.jpg'; // Add logo if available
import aver from '../../assets/aver.png';
const WorkExperience = [
  {
    id: 1,
    title: "Web Development Intern",
    company: "Skill Craft Technology",
    yearsActive: "March 2025 - April 2025",
    location: "Remote",
    image: { src: skillcraft, style: { width: '75px', height: 'auto' } },
    certificate: { src: sdp, style: { width: '75%', height: 'auto' } },
    information: [
      "Developed responsive and interactive web pages using HTML, CSS, and JavaScript.",
      "Built full-stack mini projects with React.js on the frontend and Firebase for backend/data handling.",
      "Collaborated in virtual teams to improve UI/UX designs and implement real-time features.",
      "Gained hands-on experience in deploying and testing applications, ensuring cross-browser compatibility.",
      "Received verified internship certificate and performance feedback from industry mentors."
    ],
  },
  {
    id: 2,
    title: "AIML Intern",
    company: "Averixis Solutions",
    yearsActive: "September 2025 – Present",
    location: "Remote",
    image: { src: averixis, style: { width: '75px', height: 'auto' } },
    certificate: { src: aver, style: { width: '75%', height: 'auto' } },
   information: [
  "Learning and applying Python, NLP, and Machine Learning techniques in real-time scenarios.",
  "Working on data preprocessing, text classification, and model training using Scikit-learn.",
  "Developing mini-projects in NLP, including chatbots, sentiment analysis, and text summarization.",
  "Exploring advanced AI topics such as embeddings, transformers, and fine-tuning models.",
  "Gaining hands-on experience and preparing to contribute to real-world AI and ML projects."
],

  },
];

export default WorkExperience;
