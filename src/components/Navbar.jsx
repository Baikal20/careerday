import { Link, useNavigate } from 'react-router-dom'

export default function Navbar() {
    const navigate = useNavigate()

    const handleLogin = () => {
        navigate('/login')
    }

    return (
        <nav className="navbar">
            <Link to="/" className="logo">
                CareerDay
            </Link>

            <div className="nav-links">
                <Link to="/careers">Careers</Link>
                <Link to="/progress">My Progress</Link>
            </div>

            <button
                className="login-button"
                onClick={handleLogin}
            >
                Log in
            </button>
        </nav>
    )
}