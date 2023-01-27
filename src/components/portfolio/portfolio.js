import react from "react";
import roundTable from "../../assets/images/roundTable.png"
import movieTime from "../../assets/images/movieTime.png"
import weatherDash from "../../assets/images/weatherDash.png"
import quiz from "../../assets/images/quiz.png"
import studyGuide from "../../assets/images/studyGuide.png"
import brickstreet from "../../assets/images/brickstreet.png"
import "./portfolio.css"


export default function Portfolio() {
    const projects = [
        {
            name: "Round Table",
            repo: "https://github.com/Steezy1416/round-table",
            deployed: "https://round-table14.herokuapp.com",
            image: roundTable
        },
        {
            name: "Movie Time",
            repo: "https://github.com/v1ct0r14m/group-project-1",
            deployed: "https://v1ct0r14m.github.io/group-project-1/",
            image: movieTime
        },
        {
            name: "Weather Dashboard",
            repo: "https://github.com/Steezy1416/weather-dashboard",
            deployed: "https://steezy1416.github.io/weather-dashboard/",
            image: weatherDash
        },
        {
            name: "Code Quiz",
            repo: "https://github.com/Steezy1416/code-quiz-challenge",
            deployed: "https://steezy1416.github.io/code-quiz-challenge/",
            image: quiz
        },
        {
            name: "PreWork Study Guide",
            repo: "https://github.com/Steezy1416/prework-study-guide",
            deployed: "https://steezy1416.github.io/prework-study-guide/",
            image: studyGuide
        },
        {
            name: "BrickStreet",
            repo: "https://github.com/Steezy1416/brickstreet",
            deployed: "https://brickstreet.herokuapp.com/",
            image: brickstreet
        },
    ]

    return (
        <div id="project-container">
            {
                projects.map(project => (
                    <div className="project" key={project.name}>
                        <img src={project.image} className="projectImg" />
                        <p className="projectName">{project.name}</p>
                        <div className="btnContainer">
                            <a href={project.repo} target="_blank" >
                                <button className="projectBtn">Code</button>
                            </a>
                            <a href={project.deployed} target="_blank">
                                <button className="projectBtn">Open</button>
                            </a>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}