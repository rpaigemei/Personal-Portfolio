import ProjectCard from "../components/ProjectCard";

import projects from "../data/projects";

export default function Projects() {
    return (
         <div className="page">
            <div className="hero">
                <div className="content">
                    <div className="title">
                        <div className="overline">
                            SELECTED WORK
                        </div>
                        <div className="h1">
                            Projects
                        </div>
                    </div>
                    <div className="about body-md">
                        Browse a selection of UX design and development projects. They range from data dashboards for the UF College of Medicine to games and playful interactive experiments built in class.
                    </div>
                </div>
            </div>
            <div className="section">
                <div className="projects">
                    {projects.map(project => (
                        <ProjectCard project={project} key={project.id} />
                    ))}
                </div>
            </div>
        </div>
    )
}