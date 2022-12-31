import react from "react";
import "./nav.css"

export default function Nav(props) {

    const { navItems, categorySelected, setCategory } = props

    const switchComponent = (name) => {
        setCategory(name)
    }

    return (
        <header>
            <div className="content-container">

                <p>&lt;Alex Fortin/&gt;</p>

                <ul id="nav-container">
                    {navItems.map(item => (
                        <li className="nav-item"
                            key={item.name}
                            onClick={() => switchComponent(item.name)}
                        >{item.name}</li>
                    ))}
                </ul>
            </div>
        </header>
    )
}