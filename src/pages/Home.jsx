import React from "react";
import { NavLink } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import projects from "../data/projects";
import Headshot from "../assets/headshot-frame.png";
import Logo from "../assets/logos/logo-color.png";
import ProjectCard from "../components/ProjectCard";
import MarqueeDivider from "../components/Marquee";
import Gallery from "../components/Gallery";

export default function Home() {
    const words = ["UI/UX Design", "Web Development", "Graphic Design"];

    return (
        <div className="page">
            <div className="header">
                <div className="side pattern-bg">
                    <img src={Headshot} alt="Headshot" className="img"/>
                </div>
                <div className="side">
                    <img src={Logo} alt="PR Logo" className="logo"/>

                    <div className="text center-align">
                        <div className="heading">
                            Hello, I'm Paige Reeves
                        </div>
                        <div className="body">
                            I’m a UI/UX designer & developer currently pursuing a Masters in Digital Media at the University of Central Florida. My work focuses on creating user-centered digital experiences that are functional & visually appealing.
                        </div>
                    </div>

                    <NavLink to="/about" className="more">
                        <FaArrowRightLong />

                        More About Me
                    </NavLink>
                </div>
            </div>

            <MarqueeDivider words={words} />

            <div className="projects">
                <div className="heading">
                    My Latest Projects
                </div>

                <div className="cards">
                    {projects.slice(0,6).map(project => (
                        <ProjectCard project={project} key={project.id} />
                    ))}
                </div>

                <NavLink to="/projects" className="more">
                    <FaArrowRightLong />

                    See More Projects
                </NavLink>
            </div>

            <div className="gallery pattern-bg">
                <div className="text-box">
                    <div className="heading">
                        Graphic Design Gallery
                    </div>
                </div>
                
                <Gallery />
            </div>
        </div>
    )
}