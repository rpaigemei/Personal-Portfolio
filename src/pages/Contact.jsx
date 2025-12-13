import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import ContactForm from "../components/ContactForm";

export default function Contact() {
    return (
        <div className="page">
            <div className="contact pattern-bg">
                <div className="content">
                    <div className="prompt heading">
                        Let's Connect!
                    </div>
                    <div className="contact-info">
                        <div className="side">
                            <div className="body">
                                If you have any inquiries or just want to say hi, feel free to use the contact form!
                            </div>
                            <div className="contacts">
                                <div className="item body">
                                    <FaPhone className="icon" />
                                    (727) 219-6773
                                </div>
                                <div className="item body">
                                    <FaEnvelope className="icon" />
                                    paigereeves.m@gmail.com
                                </div>
                                <div className="item body">
                                    <FaMapMarkerAlt className="icon" />
                                    Based in Orlando, FL
                                </div>
                            </div>
                        </div>
                        <div className="side">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}