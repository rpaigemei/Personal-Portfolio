import { NavLink } from "react-router-dom";

import ProjectCard from "../components/ProjectCard";
import ContactForm from "../components/ContactForm";

import projects from "../data/projects";

import { FaArrowRightLong, FaEnvelope, FaMapLocationDot } from "react-icons/fa6";
import Headshot from "../assets/headshot-frame.png";

export default function Home() {
    return (
        <div className="page">
            <div className="hero">
                <div className="image pattern-bg shadow-md">
                    <img src={Headshot} alt="Headshot" className="img"/>
                </div>
                <div className="content">
                    <div className="title">
                        <div className="overline">
                            PRODUCT DESIGNER
                        </div>
                        <div className="h1">
                            Paige Reeves
                        </div>
                    </div>
                    <div className="about body-md">
                        Focused on creating user-centered digital experiences that are functional, accessible, and visually appealing. Currently pursuing a Master of Arts in Digital Media at the University of Central Florida.
                    </div>
                    <div className="buttons">
                        <NavLink to="/projects" className="button primary">
                            View Projects
                            <FaArrowRightLong />
                        </NavLink>
                        <NavLink to="/about" className="button secondary">
                            About
                        </NavLink>
                    </div>
                </div>
            </div>
            <div className="section">
                <div className="h2">
                    Latest Projects
                </div>
                
                <div className="projects">
                    {projects.slice(0,3).map(project => (
                        <ProjectCard project={project} key={project.id} />
                    ))}
                </div>

                <NavLink to="/projects" className="button secondary">
                    See More Projects
                    <FaArrowRightLong />
                </NavLink>
            </div>
            <div className="section">
                <div className="contact-container">
                    <div className="contact">
                        <div className="details">
                            <div className="head">
                                <div className="title">
                                    <div className="h2">
                                        Get in Touch
                                    </div>
                                </div>
                                <div className="about body-md">
                                    Have an inquiry, an opportunity, or just want to say hi? Send Paige a note and she’ll get back to you.
                                </div>
                            </div>
                            
                            <div className="contacts">
                                <div className="item body-md">
                                    <FaEnvelope className="icon" />
                                    paigereeves.m@gmail.com
                                </div>
                                <div className="item body-md">
                                    <FaMapLocationDot className="icon" />
                                    Based in Orlando, FL
                                </div>
                            </div>
                        </div>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    )
}