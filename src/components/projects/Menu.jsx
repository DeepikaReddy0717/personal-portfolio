import ofd from "../../assets/ofd.png";
import ems from "../../assets/ems.png";
import dev from "../../assets/deveops.png";
import ai from "../../assets/ai.png";
import port from "../../assets/portfolio.png";

const Menu = [
	{
	id: 1,
	image: ems,
	title: "Employee Management System",
	category: ["Django"],
	repositoryUrl: "https://github.com/DeepikaReddy0717/Employee_Onboarding_System",
	description: "A Django-powered web app to manage employee onboarding, roles, and HR tasks efficiently."
},

	{
		id: 2,
		image: ofd,
		title: "Delize",
		category: ["Full Stack"],
		repositoryUrl: "https://github.com/DeepikaReddy0717/Delizee",
		description: "Delize is a food delivery app where admins, restaurants, delivery agents, and customers manage orders smoothly."
	},
	{
		id: 3,
		image: port,
		title: "Personal Portfolio Website",
		category: ["ReactJS"],
		repositoryUrl: "https://github.com/DeepikaReddy0717/personal-portfolio.git",
		description: "A personal portfolio website built with ReactJS to display my projects, skills, and experience in a simple and responsive layout."

	},
	{
		id: 4,
		image: ai,
		title: "Conversational AI in HealthCare",
		category: ["Python,NLP,ML"],
		repositoryUrl: "https://github.com/DeepikaReddy0717/Conversational-AI-for-healthCare.git",
		description: "Trained a healthcare chatbot on medical datasets for accurate symptom mapping and context-aware responses."

	},
	{
		id: 5,
		image: dev,
		title: "Food Delivery App with CI/CD",
		category: ["CI/CD & DevOps"],
		repositoryUrl: "https://github.com/DeepikaReddy0717/SDP_Project",
		description: "Automated CI/CD pipeline using Jenkins and Docker for smooth builds, tests, and deployments."

	},
	
	
];

export default Menu;