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
                        <td>Python</td>
                        <td>C</td>
                        <td>C++</td>
                    </tr>
                    <tr>
                        <td>HTML & CSS</td>
                        <td>SQL</td>
                        <td>JavaScript</td>
                        <td>React</td>
                    </tr>
                    <tr>
                        <td>TypeScript</td>
                        <td>MySQL</td>
                        <td>SQLite</td>
                        <td>MongoDB</td>
                    </tr>
                    <tr>
                        <td>Docker</td>
                        <td>Github</td>
                        <td>AWS</td>
                        <td>Postman</td>
                    </tr>
            
                </table>
                <h2 className="crrnt-interests">Current Interests/Learning</h2>
                <ul className="crrent-interests-list">
                    <li>TypeScript web automation</li>
                    <li>Python machine learning data analytics</li>
                    <li>AWS Cloud Computing</li>
                </ul>
            </div>
        </div>
    )
}

export default Body
