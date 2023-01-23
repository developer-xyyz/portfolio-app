import React from "react";
import './styles/Resume.css';
import Pdf from './resume/resume.pdf';



const Resume = () => {

    return (
        <div className="resume">
            <h1>Resume</h1>
            <a href={Pdf} target="_blank">
                <p>View my resume</p>
            </a>
        </div>
    )
}

export default Resume