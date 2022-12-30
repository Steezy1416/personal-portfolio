import react from "react";
import "./nav.css"

export default function Nav() {
    return (
        <header>
            <div className="content-container">

                <p>&lt;Alex Fortin/&gt;</p>

                <ul id="nav-container">
                    <li className="nav-item">About</li>
                    <li className="nav-item">Projects</li>
                    <li className="nav-item">Contact</li>
                    <li className="nav-item">Resume</li>
                </ul>
            </div>
        </header>
    )
}