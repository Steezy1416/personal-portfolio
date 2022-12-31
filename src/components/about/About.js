import react from "react";
import "./about.css"
import Icon from "../../assets/images/icon.svg"

export default function About() {
    return (
        <section id="about-container">
            <div id="text-container">
                <p id="text-1">Hello 👋, <br/>My name is Alexander Fortin</p>
                <div id="icon-container"></div>
                <p id="text-2">I am a Web Developer who loves to create, and experiment with new technology 💻.</p>
            </div>

            <section id="profile-picture-container">
                <div id="image-container"></div>
            </section>
        </section>
    )
}