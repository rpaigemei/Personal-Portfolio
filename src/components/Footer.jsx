import { FaLinkedin, FaGithub } from "react-icons/fa6";

export default function Footer() {
    
    return (
        <div className="footer">
            <a href="https://github.com/rpaigemei/Personal-Portfolio" target="_blank" className="credit">
                © 2026 Paige Reeves
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