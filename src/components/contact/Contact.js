import react from "react";
import "./contact.css"

export default function Contact() {
    return (
        <div id="contact-container">
            <p id="contact-title">Contact Me!</p>

            <p id="contact-description">Have a question, or just want to say hello? Contact me</p>

            <div id="contact-icon-container"></div>

            <form id="contact-form">
                <div className="input-container">
                    <label className="contact-label" for="name">Name</label>
                    <input className="contact-input" name="name" placeholder="Enter your name" />
                </div>
                <div className="input-container">
                    <label className="contact-label" for="email">Email Address</label>
                    <input className="contact-input" name="email" placeholder="Enter your email address" />
                </div>
                <div className="input-container">
                    <label className="contact-label" for="message">Message</label>
                    <textarea id="contact-textarea" className="contact-input" name="message" placeholder="Enter your message..." />
                </div>
                <div className="input-container">
                    <button id="contactBtn" type="submit">Send <i class="fa-regular fa-paper-plane"></i></button>
                </div>
            </form>
        </div>
    )
}