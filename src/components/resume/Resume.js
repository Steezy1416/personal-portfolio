import react from "react";
import "./resume.css"
import resume from "../../assets/resume/react-resume.docx"

export default function Resume() {

    const frontEnd = [
        { name: "Jquery" },
        { name: "Boostrap" },
        { name: "React" },
        { name: "Html" },
        { name: "Css" },
        { name: "JavaScript" },
    ]

    const backEnd = [
        { name: "Node.js" },
        { name: "MySql" },
        { name: "MongoDb" },
        { name: "Socket.io" },
        { name: "Express" },
        { name: "JavaScript" },
    ]


    return (
        <div id="resume-container">

            <p id="resume-title">Here are some of the technologies I have been using recently</p>

            <div id="resume-content-container">
            <div className="tech-container">
                <p className="list-title">Front End Technologies</p>
                <ul className="resume-list">
                    {frontEnd.map(item => (
                        <li className="resume-item">{item.name}</li>
                    ))}
                </ul>
            </div>

            <div id="icon-btn-container">
                <div id="resume-icon-container"></div>
                <a href={resume} download="resume"><button id="resume-btn">Download Resume</button></a>
            </div>


            <div className="tech-container">
                <p className="list-title">Back End Technologies</p>
                <ul className="resume-list">
                    {backEnd.map(item => (
                        <li className="resume-item">{item.name}</li>
                    ))}
                </ul>
            </div>
            </div>
        </div>
    )
}