import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [name, setName] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!name || !email) {
            return
        }

        localStorage.setItem(
            'careerDayUser',
            JSON.stringify({
                name,
                email,
            })
        )

        navigate('/progress')
    }

    return (
        <main className="login-page">

            <div className="login-card">

                <p className="hero-label">
                    CAREERDAY
                </p>

                <h1>
                    Welcome back.
                </h1>

                <p>
                    Log in to save your career exploration progress.
                </p>

                <form onSubmit={handleSubmit}>

                    <input
                        type="text"
                        placeholder="Your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <input
                        type="email"
                        placeholder="Email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <button type="submit">
                        Continue →
                    </button>

                </form>

            </div>

        </main>
    )
}