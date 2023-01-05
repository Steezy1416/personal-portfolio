import react, { useEffect, useState } from "react";
import "./nav.css"

export default function Nav(props) {

    const { navItems, categorySelected, setCategory } = props

    useEffect(() => {
        const navItem = document.getElementsByClassName("nav-item")

        for (let i = 0; i < navItem.length; i++) {
            if (navItem[i].innerText === categorySelected) {
                navItem[i].style.color = "lightgreen"
            }
            else {
                navItem[i].style.color = "lightgrey"
            }

        } 
    }, [])

    const switchComponent = (name) => {

        const navItem = document.getElementsByClassName("nav-item")

        for (let i = 0; i < navItem.length; i++) {
            if (navItem[i].innerText === name) {
                navItem[i].style.color = "lightgreen"
            }
            else {
                navItem[i].style.color = "lightgrey"
            }

        }

        setCategory(name)
    }

    return (
        <header>
            <div className="content-container">

                <p className="name-item">&lt;Alex Fortin/&gt;</p>

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