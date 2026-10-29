import { NavLink } from "react-router-dom";

export default function ProjectCard({ project }) {
    return (
        <NavLink to={`/projects/${project.id}`} className="card shadow-md">
            <img src={project.thumbnail} alt="Project Thumbnail" className="img" />

            <div className="content">
                <div className="title">
                    <div className="overline-sm">
                        {project.type}
                    </div>
                    <div className="h3">
                        {project.name}
                    </div>
                </div>
                <div className="about body-sm">
                    {project.tagline}
                </div>

                <div className="link body-sm">
                    Read More
                </div>
            </div>
        </NavLink>
    )
}