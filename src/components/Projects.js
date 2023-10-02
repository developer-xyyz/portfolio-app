import React from "react";
import './styles/Projects.css';



const Projects = () => {

    return (
        <div className="projects">
            <h1 className="projects-title">Featured Projects</h1>

            <a href="https://github.com/developer-xyyz/Disasteye" target="_blank">
                <button className="Disasteye">Disasteye</button>
            </a>
            <a href="https://github.com/developer-xyyz/Studymon" target="_blank">
                <button className="Studymon">Studymon</button>
            </a>
            <a href="https://github.com/developer-xyyz/CarRentalSystem" target="_blank">
                <button className="Rentalsys">Car Rental System</button>
            </a>
            <a href="https://github.com/developer-xyyz/phonebook-RESTAPI" target="_blank">
                <button className="IVRestAPI">Input Validation Rest API</button>
            </a>
            <a href="https://github.com/developer-xyyz?tab=repositories" target="_blank">
                <p className="viewmore">View more here</p>
            </a>

        </div>
    )
}

export default Projects