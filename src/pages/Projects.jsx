import React from "react";
import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
    return (
        <div className="page">
            <div className="header pattern-bg all-projects">
                <div className="text-box">
                    <div className="text center-align">
                        <div className="heading">
                            My Projects
                        </div>
                        <div className="body">
                            Here is a collection of my works, from UI/UX design to web development.
                        </div>
                    </div>
                </div>
            </div>
            <div className="projects">
                <div className="cards">
                    {projects.map(project => (
                        <ProjectCard project={project} key={project.id} />
                    ))}
                </div>
            </div>
        </div>
    )
}