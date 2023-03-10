import react from "react";
import "./about.css"

export default function About() {
    return (
        <section id="about-container">
            <div id="text-container">
                <p id="text-1">Hello, <br/>My name is <span className="highlight">Alexander Fortin</span></p>
                <div id="icon-container"></div>
                <p id="text-2">I am a <span className="highlight">Web Developer</span> who loves to create, and experiment with new technology 💻.</p>
            </div>

            <section id="profile-picture-container">
                <div id="image-container"></div>
            </section>
        </section>
    )
}