import react, { useState } from "react";
import "./contact.css"

export default function Contact() {

    const [formState, setFormState] = useState({ name: "", email: "", message: "" })

    const [errorMessage, setErrorMessage] = useState("")

    const { name, email, message } = formState

    function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    function handleChange(e) {
        if (e.target.name === "email") {
            const isValid = validateEmail(e.target.value)
            if (!isValid) {
                setErrorMessage("Your email is invalid")
                e.target.style.border = "2px solid red"
            }
            else {
                setErrorMessage("")
                e.target.style.border = "2px solid lightgreen"
            }
        }
        else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required`)
                e.target.style.border = "2px solid red"

            }
            else {
                setErrorMessage("")
                e.target.style.border = "2px solid lightgreen"
            }
        }
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value })
        }

    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log(formState)
    }

    return (
        <div id="contact-container">
            <p id="contact-title">Contact Me!</p>

            <p id="contact-description">Have a question, or just want to say hello? Contact me</p>

            <div id="contact-icon-container"></div>

            {errorMessage && (
                <div>
                    <p id="error-message">{errorMessage}</p>
                </div>
            )}

            <form id="contact-form" onSubmit={handleSubmit}>
                <div className="input-container">
                    <label className="contact-label" for="name">Name</label>
                    <input className="contact-input" autoComplete="off" name="name" defaultValue={name} onBlur={handleChange} placeholder="Enter your name" />
                </div>
                <div className="input-container">
                    <label className="contact-label" for="email">Email Address</label>
                    <input type="email" autoComplete="off" className="contact-input" name="email" defaultValue={email} onBlur={handleChange} placeholder="Enter your email address" />
                </div>
                <div className="input-container">
                    <label className="contact-label" for="message">Message</label>
                    <textarea id="contact-textarea" className="contact-input" name="message" defaultValue={message} onBlur={handleChange} placeholder="Enter your message..." />
                </div>
                <div className="input-container">
                    <button id="contactBtn" type="submit">Send <i class="fa-regular fa-paper-plane"></i></button>
                </div>
            </form>
        </div>
    )
}