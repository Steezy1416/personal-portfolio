import react from "react";
import "./footer.css"

export default function Footer() {
    return (
        <footer>
            <div id="footer-icons">
                <a href="https://github.com/Steezy1416" target="_blank"><i class="fa-brands fa-github footer-icon"></i></a>
                <a href="https://www.linkedin.com/in/alexander-fortin-396794260/" target="_blank"><i class="fa-brands fa-linkedin footer-icon"></i></a>
            </div>
            <p id="copyright">&copy; 2023 Alex Fortin</p>
        </footer>
    )
}