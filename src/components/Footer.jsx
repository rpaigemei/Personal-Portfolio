import React from "react";
import { NavLink } from "react-router-dom";

import { FaLinkedin, FaGithub } from "react-icons/fa6";

import Logo from "../assets/logos/logo-light.png";

export default function Footer() {
    
    return (
        <div className="footer">
            <NavLink to="/" className="logo-container">
                <img src={Logo} alt="PR Logo" className="logo" />
            </NavLink>

            <a href="https://github.com/rpaigemei/Personal-Portfolio" target="_blank" className="credit">
                © 2025 Paige Reeves
            </a>

            <div className="socials">
                <a href="https://github.com/rpaigemei" target="_blank">
                    <FaGithub className="icon"/>
                </a>
                <a href="https://www.linkedin.com/in/paige-reeves-91424b264" target="_blank">
                    <FaLinkedin className="icon"/>
                </a>
            </div>
        </div>
    )
}