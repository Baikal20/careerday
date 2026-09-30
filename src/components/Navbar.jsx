import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className="navbar">
            <Link to="/" className="logo">
                CareerDay
            </Link>

            <div className="nav-links">
                <Link to="/careers">Careers</Link>
                <Link to="/progress">My Progress</Link>
            </div>

            <button className="login-button">
                Log in
            </button>
        </nav>
    )
}