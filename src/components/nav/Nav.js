import react from "react";
import "./nav.css"

export default function Nav() {

    const navItems = [
        { name: "About" },
        { name: "Projects" },
        { name: "Contact" },
        { name: "Resume" }
    ]

    return (
        <header>
            <div className="content-container">

                <p>&lt;Alex Fortin/&gt;</p>

                <ul id="nav-container">
                    {navItems.map(item => (
                        <li className="nav-item"
                            key={item.name}
                        >{item.name}</li>
                    ))}
                </ul>
            </div>
        </header>
    )
}