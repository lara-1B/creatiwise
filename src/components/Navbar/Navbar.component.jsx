import { Link, useLocation } from "react-router-dom";
import Images from "../../utils/importImages";
import "./Navbar.component.css";

const Navbar = () => {
    const location = useLocation(); 
    return (
        <nav className="navbar">
            {/* Logo */}
            <div className="logo">
                <img src={Images.logo} alt="Logo" />
            </div>
            {/* Navigation Links */}
            <ul className="nav-links">
                <li>
                    <Link to="/" className={`nav-link ${location.pathname === "/" ? "active" : ""}`}>Home</Link>
                </li>
                <li>
                    <Link to="/about" className={`nav-link ${location.pathname === "/about" ? "active" : ""}`}>About</Link>
                </li>
                <li>
                    <Link to="/projects" className={`nav-link ${location.pathname === "/projects" ? "active" : ""}`}>Projects</Link>
                </li>
                <li>
                    <Link to="/contact" className={`nav-link ${location.pathname === "/contact" ? "active" : ""}`}>Contact</Link>
                </li>
            </ul>
            {/* Hire Me Button */}
            <button className="hire-button">Hire Me</button>
        </nav>
    );
};

export default Navbar;
