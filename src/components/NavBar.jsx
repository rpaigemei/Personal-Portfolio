import { NavLink } from "react-router-dom";

import Logo from "../assets/logos/logo-color.png";

export default function NavBar() {
    
    return (
        <div className="nav-bar">
            <NavLink to="/" className="title">
                <img src={Logo} alt="PR Logo" className="logo" />
                <div className="name">
                    Paige Reeves
                </div>
            </NavLink>

            <div className="tabs body-md">
                <NavLink to="/" className="tab">
                    Home
                </NavLink>
                <NavLink to="/about" className="tab">
                    About
                </NavLink>
                <NavLink to="/projects" className="tab">
                    Projects
                </NavLink>
            </div>
        </div>
    )
}