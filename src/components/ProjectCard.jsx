import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { AnimatePresence, motion } from "framer-motion";

export default function ProjectCard({ project }) {
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseEnter = () => {
        setIsHovering(true);
    }

    const handleMouseLeave = () => {
        setIsHovering(false);
    }

    return (
        <NavLink to={`/projects/${project.id}`} className="card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <img src={project.thumbnail} alt="Project Thumbnail" className="img" />

            <AnimatePresence>
                {isHovering &&
                    <motion.div className="overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        <motion.div className="content"
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.8 }}
                            transition={{ duration: 0.4 }}
                        >
                            {project.tagline}

                            <div className="more">
                                <FaArrowRightLong />

                                Read More
                            </div>
                        </motion.div>
                    </motion.div>
                }
            </AnimatePresence>
        </NavLink>
    )
}