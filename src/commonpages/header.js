import { Link } from "react-router-dom";

export default function Header() {
    return (
        <>
            <nav>
                <div className="nav-content">
                    <div className="logo">
                        <Link to="/"><span>L</span>OGO</Link>
                    </div>
                    <label htmlFor="check" className="checkbox">
                        <i className="fa-solid fa-bars" aria-hidden="true"></i>
                    </label>
                    <input type="checkbox" name="check" id="check" />
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/education">Education</Link></li>
                        <li><Link to="/experience">Experience</Link></li>
                        <li><Link to="/skill">Skills</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
            </nav>
        </>
    );
}
