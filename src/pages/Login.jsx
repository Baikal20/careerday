import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [name, setName] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!name || !email) return

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

                <div className="login-header">
                    <p className="hero-label">
                        CAREERDAY ACCOUNT
                    </p>

                    <h1>
                        Welcome back.
                    </h1>

                    <p>
                        Log in to save your career exploration progress
                        and continue where you left off.
                    </p>
                </div>

                <form
                    className="login-form"
                    onSubmit={handleSubmit}
                >

                    <div className="login-field">
                        <label>Your name</label>

                        <input
                            type="text"
                            placeholder="Enter your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div className="login-field">
                        <label>Email address</label>

                        <input
                            type="email"
                            placeholder="you@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <button
                        className="login-submit"
                        type="submit"
                    >
                        Continue to CareerDay →
                    </button>

                </form>

                <p className="login-note">
                    Your information is saved only on this device.
                </p>

            </div>

        </main>
    )
}