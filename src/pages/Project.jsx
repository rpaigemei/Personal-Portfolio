import { NavLink, useParams } from "react-router-dom";

import projects from "../data/projects";

import { FaGlobe, FaCode, FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

export default function Project() {
    const { id } = useParams();

    const project = projects.find(p => p.id === id);

    if (!project) {
        return (
            <div className="page">
                <div className="section">
                    <div className="not-found body-md">
                    Project not found.
                </div>
                </div>
            </div>
        );
    }

    return (
        <div className="page">
            <div className="section">
                <div className="project">
                    <img src={project.frame} alt={`${project.name} Thumbnail Framed`} className="img" />

                    <div className="title">
                        <div className="overline">
                            {project.type}
                        </div>
                        <div className="h1">
                            {project.name}
                        </div>
                    </div>

                    <div className="description">
                        <div className="details left">
                            <div className="group">
                                <div className="h4">
                                    OVERVIEW
                                </div>
                                <div className="body-md">
                                    {project.description}
                                </div>
                            </div>
                            <div className="group">
                                <div className="h4">
                                    CONTEXT
                                </div>
                                <div className="body-md">
                                    {project.context}
                                </div>
                            </div>
                        </div>

                        <div className="details right">
                            <div className="group">
                                <div className="h4">
                                    BUILT WITH
                                </div>
                                <div className="tags body-sm">
                                    {project.technologies.map(technology => (
                                        <div className="tag">
                                            {technology}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {(project.website || project.code) &&
                                <div className="buttons body-md">
                                    {project.website &&
                                        <a href={project.website} target="_blank" className="button secondary">
                                            <FaGlobe />

                                            {project.type === "LIVE SITE" &&
                                                <> Visit Website </>
                                            }

                                            {project.type === "PROTOTYPE" &&
                                                <> View Prototype </>
                                            }
                                        </a>
                                    }
                                    {project.id === "doodlenaut" &&
                                        <>
                                            <a href="https://cen4721-project-design-a.netlify.app/" target="_blank" className="button secondary">
                                                <FaGlobe />

                                                Visit Design A Website
                                            </a>
                                            <a href="https://cen4721-project-design-b.netlify.app/" target="_blank" className="button secondary">
                                                <FaGlobe />

                                                Visit Design B Website
                                            </a>
                                        </>
                                    }
                                    {project.code &&
                                        <a href={project.code} target="_blank" className="button secondary">
                                            <FaCode />

                                            View Code
                                        </a>
                                    }
                                </div>
                            }
                        </div>
                    </div>

                    <div className="pictures">
                        {project.pictures.map((picture) => (
                            <img src={picture} alt="Project Picture" className="picture shadow-md" />
                        ))}
                    </div>

                    <div className="pagination">
                        <div>
                            {project.prev &&
                                <NavLink to={`/projects/${project.prev}`} className="control link body-md">
                                    <FaArrowLeftLong />

                                    Previous
                                </NavLink>
                            }
                        </div>
                        <div>
                            {project.next &&
                                <NavLink to={`/projects/${project.next}`} className="control link body-md">
                                    Next

                                    <FaArrowRightLong />
                                </NavLink>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}