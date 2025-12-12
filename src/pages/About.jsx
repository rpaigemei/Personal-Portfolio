import React from "react";
import { FaArrowRightLong  } from "react-icons/fa6";

import Headshot from "../assets/headshot-frame.png";
import jsIcon from "../assets/technologies/js.png";
import htmlIcon from "../assets/technologies/html.png";
import cssIcon from "../assets/technologies/css.png";
import tsIcon from "../assets/technologies/ts.png";
import figmaIcon from "../assets/technologies/figma.png";
import reactIcon from "../assets/technologies/react.png";
import viteIcon from "../assets/technologies/vite.png";
import p5Icon from "../assets/technologies/p5.png";
import githubIcon from "../assets/technologies/github.png";


export default function About() {
    const technologies = [
        {
            icon: <img src={jsIcon} alt="JS Icon" className="icon"/>,
            name: "JavaScript",
        },
        {
            icon: <img src={htmlIcon} alt="HTML Icon" className="icon"/>,
            name: "HTML",
        },
        {
            icon: <img src={cssIcon} alt="CSS Icon" className="icon"/>,
            name: "CSS",
        },
        {
            icon: <img src={tsIcon} alt="TS Icon" className="icon"/>,
            name: "TypeScript",
        },
        {
            icon: <img src={figmaIcon} alt="Figma Icon" className="icon"/>,
            name: "Figma",
        },
        {
            icon: <img src={reactIcon} alt="React.js Icon" className="icon"/>,
            name: "React.js",
        },
        {
            icon: <img src={viteIcon} alt="Vite Icon" className="icon"/>,
            name: "Vite",
        },
        {
            icon: <img src={p5Icon} alt="p5.js Icon" className="icon"/>,
            name: "p5.js",
        },
        {
            icon: <img src={githubIcon} alt="Github Icon" className="icon"/>,
            name: "GitHub",
        },
    ];

    const education = [
        {
            university: "University of Central Florida",
            location: "Orlando, FL",
            degree: "MA in Digital Media",
            dates: "08/2025 - 05/2027",
        },
        {
            university: "University of Florida",
            location: "Gainesville, FL",
            degree: "BS in Computer Science",
            dates: "08/2021 - 05/2025",
            details: "Minors in Mass Communications and Digital Arts & Science",
        },
    ];

    const experience = [
        {
            company: "University of Central Florida",
            positions: [
                {
                    title: "Graduate Teaching Assistant",
                    dates: "08/2025 - Present",
                },
            ],
        },
        {
            company: "University of Florida College of Medicine Office of Research",
            positions: [
                {
                    title: "UI/UX Designer",
                    dates: "05/2025 - Present ",
                },
                {
                    title: "Student Assistant UX Technical Specialist",
                    dates: "08/2024 - 05/2025 ",
                },
            ],
        },
        {
            company: "Women in Computer Science and Engineering (WiCSE)",
            positions: [
                {
                    title: "Design Team Lead",
                    dates: "08/2024 - 04/2025",
                },
                {
                    title: "Professional Shadowing Mentee",
                    dates: "01/2024 - 04/2024",
                },
            ],
        },
        {
            company: "UF Floridance",
            positions: [
                {
                    title: "Vice President",
                    dates: "04/2024 - 04/2025",
                },
                {
                    title: "Historian",
                    dates: "04/2023 - 04/2024",
                },
            ],
        },
    ];

    return (
        <div className="page">
            <div className="header pattern-bg">
                <div className="side text-box">
                    <div className="text left-align">
                        <div className="heading">
                            Hello, I'm Paige Reeves
                        </div>
                        <div className="body">
                            I’m a UI/UX designer & developer currently pursuing a Masters in Digital Media at the University of Central Florida. My work focuses on creating user-centered digital experiences that are functional & visually appealing.
                        </div>
                    </div>
                </div>

                <img src={Headshot} alt="Headshot" className="img"/>
            </div>

            <div className="about">
                <div className="heading">
                    About Me
                </div>
                <div className="about-me">
                    <div className="side">
                        <div className="section">
                            <div className="body">
                                I’ve always loved design and all things creative, especially when I get to pair that with problem-solving. I stumbled into UI/UX design during my undergrad and immediately connected with it. My favorite work blends design and development, creating experiences that are functional and beautiful. I’m always experimenting, learning, and exploring new ideas.
                            </div>
                            <div className="body">
                                Through my education, I’ve been able to take an interdisciplinary approach to UX design. As a Computer Science major, I built a strong foundation in technical skills that I’ve been able to pair with the fundamentals of design to create thoughtful solutions. This blend of disciplines has helped me has helped me bridge the gap between creativity and functionality, understanding  both how things should work and how they can be built.
                            </div>
                            <div className="body">
                                Currently, I am the UI/UX Designer at the UF College of Medicine Office of Research. We are developing a series of data visibility products for administrators and researchers across the different departments. As the sole designer on the team, I contribute to the design of these interfaces and development of reusable components.
                            </div>
                            <div className="body">
                                In my free time, I’m usually crocheting, watching the same movie for the hundredth time, or scrolling on Petfinder.
                            </div>
                        </div>
                        <div className="section">
                            <div className="subtitle">
                                Technologies
                            </div>
                            <div className="technologies">
                                {technologies.map((technology) => (
                                    <div className="technology">
                                        {technology.icon}

                                        <div className="body">
                                            {technology.name}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="side">
                        <div className="section">
                            <div className="subtitle">
                                Education
                            </div>
                            <div className="list">
                                {education.map((item) => (
                                    <div className="item">
                                        <div className="upper subtitle">
                                            {item.university} - {item.location}
                                        </div>

                                        <div className="lower">
                                            <div className="left body">
                                                {item.degree}
                                            </div>

                                            <div className="right body">
                                                {item.dates}
                                            </div>
                                        </div>
                                        {item.details && 
                                            <div className="detail body">
                                                {item.details}
                                            </div>
                                        }
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="section">
                            <div className="subtitle">
                                Experience
                            </div>

                            <div className="list">
                                {experience.map((item) => (
                                    <div className="item">
                                        <div className="upper subtitle">
                                            {item.company}
                                        </div>

                                        {item.positions.map((position) => (
                                            <div className="lower">
                                                <div className="left body">
                                                    {position.title}
                                                </div>
                                                <div className="right body">
                                                    {position.dates}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <a href="/resume.pdf" target="_blank" className="more">
                    <FaArrowRightLong />
                    
                    View Full Résumé
                </a>
            </div>
        </div>
    )
}