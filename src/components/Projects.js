import React from "react";
import './styles/Projects.css';



const Projects = () => {

    return (
        <div className="projects">
            <h1 className="projects-title">Projects</h1>

            <a href="https://github.com/developer-xyyz/Disasteye" target="_blank">
                <button className="Disasteye">Disasteye</button>
            </a>
            <a href="https://github.com/developer-xyyz/Studymon" target="_blank">
                <button className="Studymon">Studymon</button>
            </a>
            <a href="https://github.com/developer-xyyz/CarRentalSystem" target="_blank">
                <button className="Rentalsys">Vehicle Rental System</button>
            </a>
            

        </div>
    )
}

export default Projects