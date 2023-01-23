import React from "react";
import { FaCss3, FaGithub, FaHtml5, FaPython } from "react-icons/fa";
import './styles/Body.css';



const Body = () => {

    return (
        <div className="about-me">
            <h1 className="abme-title" >About me</h1>
            <div className="abme-body">
                <p className="abme-text">I am currently a student at the University of Texas at Arlington, pursuing B.S degree of Computer Science. My expected graduation is in May 2024.</p>
            
                <h2 className="skills">Skills & Technologies</h2>
                <table className="skills-list">
                    <tr>
                        <td>Java</td>
                        <td>C programming</td>
                        <td>Python</td>
                        <td>HTML & CSS</td>
                    </tr>
                    <tr>
                        <td>Github </td>
                        <td>SQL </td>
                        <td>Javascript (currently learning) </td>
                        <td>React (currently learning) </td>
                    </tr>
            
                </table>
                <h2 className="crrnt-interests">Current Interests/Learning</h2>
                <ul className="crrent-interests-list">
                    <li>React.js Web/Application Development</li>
                    <li>Python Web Scraping</li>
                    <li>Javascript SQL Databases</li>
                </ul>
            </div>
        </div>
    )
}

export default Body