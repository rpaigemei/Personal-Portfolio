import { FaArrowUpRightFromSquare, FaDownload  } from "react-icons/fa6";

export default function About() {
    return (
        <div className="page">
            <div className="section">
                <div className="title">
                    <div className="overline">
                        ABOUT
                    </div>
                    <div className="h1">
                        Paige Reeves
                    </div>
                </div>
                <div className="about">
                    <div className="bio body-md">
                        <div>
                            Paige Reeves is a product designer based in Orlando, FL focused on creating user-centered digital experiences that are functional, accessible, and visually appealing. She received her Bachelor of Science in Computer Science from the University of Florida, with minors in Mass Communications and Digital Arts & Science. She is now pursuing a Master of Arts in Digital Media at the University of Central Florida. This blend of technical training and design fundamentals has helped me bridge the gap between creativity and functionality, understanding both how things should work and how they can be built.
                        </div>
                        <div>
                            Currently, Reeves is a UX designer at the University of Florida College of Medicine Office of Research, where they are developing a series of data visualization products for administrations and researchers across different departments. She designs the interfaces for these products, with the goal of enhancing the user experience and improving data visibility. She also helps develop reusable front-end components and mentors undergraduate students as they develop their own UI/UX skills.
                        </div>
                        <div>
                            In the summer of 2026, Reeves was a product design intern at Cvent, an event management technology company. She owned the end-to-end design of the Attendee Record feature in the company’s Event Core platform, where she led the process from research and prototyping through usability testing and final recommendations. She worked within Cvent’s Carina design system during a company-wide rebrand and collaborated with product managers, engineers, and fellow designers.
                        </div>
                        <div>
                            Looking ahead, Reeves hopes to keep designing experiences that make complex information feel clear, approachable, and genuinely useful for every user.
                        </div>
                    </div>
                    <div className="cv">
                        <iframe
                            src="/CV.pdf#toolbar=0&navpanes=0"
                            title="CV"
                            className="pdf shadow-md"
                        />

                        <div className="buttons">
                            <a href="/CV.pdf" target="_blank" className="button primary">
                                Open in New Tab
                                <FaArrowUpRightFromSquare />
                            </a>
                            <a href="/CV.pdf" download="CV-paigereeves.pdf" className="button secondary">
                                Download PDF
                                <FaDownload />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}