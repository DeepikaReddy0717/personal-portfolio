import Salesforce from "../../assets/salesforce.png";
import MongoDB from "../../assets/MongoDB.png";
import nptel from "../../assets/nptel.png";
import oracle from "../../assets/oracle.jpg";
import Lingua from "../../assets/linguaskill.png";
import azuru from "../../assets/azuru.png";
import srucm from "../../assets/srucm.png";
import c1 from "../../assets/c11.jpg";
import c2 from "../../assets/c12.jpg";
import g from "../../assets/guidewire.png";
import al from "../../assets/graph.png";
const Menu = [
	{
		id: 1,
		title: "Microsoft certified AZURU Fundamentals",
		company: "Microsoft",
		certificate: {
			src: azuru,
			style: { width: '100%', height: 'auto' }
		}
	},
	{
		id:2,
		title: "MongoDB Certified Developer Associate",
		company: "MongoDB",
		certificate: {
			src: MongoDB,
			style: { width: '100%', height: 'auto' }
		}
	},
	{
		id: 3,
		title: "NPTEL ",
		company: "IIT Kharagpur",
		certificate:{
			src: nptel,
			style: { width: '100%', height: 'auto' }
		}
	},
	{
		id: 4,
		title: "Salesforce Certified AI Associate",
		company: "Salesforce",
		certificate: {
			src: Salesforce,
			style: { width: '100%', height: 'auto' }
		}
	},
	{
		id: 5,
		title: "Scrum Fundamentals Certified",
		company: "SCRUMStudy",
		certificate: {
			src: srucm,
			style: { width: '100%', height: 'auto' }
		}
	},
	{
	id: 6,
	title: "AI-ML Virtual Internship",
	company: "AICTE - EduSkills - Google",
	certificate: {
		src: c1,
		style: { width: '100%', height: 'auto' }
	}
},

	{
	id: 7,
	title: "Simulation of Geotechnical Analysis Virtual Internship",
	company: "AICTE - EduSkills - MIDAS",
	certificate: {
		src: c2,
		style: { width: '100%', height: 'auto' }
	}
},


	{
		id: 8,
		title: "Oracle Cloud Infrastructure 2025 AI Foundations Associate",
		company: "Oracle",
		certificate: {
			src: oracle,
			style: { width: '100%', height: 'auto' }
		}
	},
	{
		id: 9,
		title: "Linguaskill General - English Language Proficiency",
		company: "Cambridge University Press and Assessment",
		certificate: {
			src: Lingua,
			style: { width: '100%', height: 'auto' }
		}
	},
	{
    id: 10,
    title: "Guidewire DEVTrails University Hackathon 2026",
    company: "Guidewire Software",
    certificate: {
        src: g,
        style: { width: '100%', height: 'auto' }
    }
},
{
    id: 11,
    title: "Graph Theory Programming Camp",
    company: "AlgoUniversity",
    certificate: {
        src: al,
        style: { width: '100%', height: 'auto' }
    }
},
	
	
	
	
	
	
	
];

export default Menu;