import React from "react";
import './styles/Footer.css';
import { FaGithub, FaLinkedin } from "react-icons/fa";



const Footer = () => {

    return (
        <div className="footer">
            <h1 className="footer-text">Ahnaf Ahmad</h1>
            <ul className="socialMedia-list">
                <a href="https://www.linkedin.com/in/ahnaf-ahmad-8006b4249/" target="_blank">
                    <li><FaLinkedin size="1.5em"/></li>
                </a>
                <a href="https://github.com/developer-xyyz" target="_blank">
                    <li><FaGithub size="1.5em"/></li>
                </a>
            </ul>
        </div>
    )
}

export default Footer