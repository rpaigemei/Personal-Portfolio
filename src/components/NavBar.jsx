import React from "react";
import { NavLink } from "react-router-dom";

import Logo from "../assets/logos/logo-light.png";

export default function NavBar() {
    
    return (
        <div className="nav-bar">
            <NavLink to="/">
                <img src={Logo} alt="PR Logo" className="logo" />
            </NavLink>

            <div className="tabs">
                <NavLink to="/about" className="tab">
                    About
                </NavLink>
                <NavLink to="/projects" className="tab">
                    Projects
                </NavLink>
                <NavLink to="/contact" className="tab">
                    Contact
                </NavLink>
            </div>
        </div>
    )
}