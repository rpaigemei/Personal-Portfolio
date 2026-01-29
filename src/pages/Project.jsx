import React from "react";
import { NavLink, useParams } from "react-router-dom";
import projects from "../data/projects";
import MarqueeDivider from "../components/Marquee";
import { FaGlobe, FaCode, FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

export default function Project() {
    const { id } = useParams();

    const project = projects.find(p => p.id === id);

    if (!project) {
        return (
            <div className="page">
                <div className="contact pattern-bg">
                    <div className="text-box body">
                        Project not found.
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="page">
            <div className="header pattern-bg">
                <img src={project.frame} alt={`${project.name} Thumbnail Framed`} className="img"/>
            </div>
            
            <MarqueeDivider words={project.technologies} />

            <div className="project-page">
                <div className="title">
                    <div className="heading">
                        {project.name}
                    </div>
                    {(project.website || project.code) &&
                        <div className="links body">
                            {project.website &&
                                <a href={project.website} target="_blank" className="link">
                                    <FaGlobe className="icon" />

                                    {project.type === "site" &&
                                        <div>
                                            Visit Website
                                        </div>
                                    }

                                    {project.type === "prototype" &&
                                        <div>
                                            View Prototype
                                        </div>
                                    }
                                </a>
                            }
                            {project.id === "doodlenaut" &&
                                <>
                                    <a href="https://cen4721-project-design-a.netlify.app/" target="_blank" className="link">
                                        <FaGlobe className="icon" />

                                        Visit Design A Website
                                    </a>
                                    <a href="https://cen4721-project-design-b.netlify.app/" target="_blank" className="link">
                                        <FaGlobe className="icon" />

                                        Visit Design B Website
                                    </a>
                                </>
                            }
                            {project.code &&
                            <a href={project.code} target="_blank" className="link">
                                <FaCode className="icon" />

                                View Code
                            </a>
                            }
                        </div>
                    }
                </div>
                <div className="overview">
                    <div className="body">
                        {project.overview}
                    </div>
                    
                    <div className="body">
                        {project.purpose}
                    </div>
                    
                </div>
                <div className="pictures">
                    {project.pictures.map((picture) => (
                        <img src={picture} alt="Project Picture" className="picture" />
                    ))}
                </div>

                <div className="pagination">
                    <div className="control-container">
                        {project.prev &&
                            <NavLink to={`/projects/${project.prev}`} className="control body">
                                <FaArrowLeftLong className="arrow" />

                                Previous
                            </NavLink>
                        }
                    </div>
                    <div className="control-container">
                        {project.next &&
                            <NavLink to={`/projects/${project.next}`} className="control body">
                                Next

                                <FaArrowRightLong className="arrow" />
                            </NavLink>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}