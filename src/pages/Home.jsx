import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <main className="home">

            <section className="hero">

                <p className="hero-label">
                    CAREER EXPLORATION PLATFORM
                </p>

                <h1>
                    Don't choose a career blindly.
                    <span> Try it first.</span>
                </h1>

                <p className="hero-description">
                    Explore real professions, meet specialists and complete
                    practical tasks before choosing your future career.
                </p>

                <div className="hero-buttons">
                    <Link to="/careers" className="primary-button">
                        Explore Careers →
                    </Link>

                    <Link to="/careers" className="secondary-button">
                        Try a Career
                    </Link>
                </div>

            </section>

            <section className="steps">

                <div className="step">
                    <span>01</span>
                    <h3>Explore</h3>
                    <p>
                        Discover real professions and learn what specialists
                        actually do every day.
                    </p>
                </div>

                <div className="step">
                    <span>02</span>
                    <h3>Experience</h3>
                    <p>
                        Complete practical tasks inspired by real professional
                        situations.
                    </p>
                </div>

                <div className="step">
                    <span>03</span>
                    <h3>Discover</h3>
                    <p>
                        Reflect on your experience and understand what career
                        direction fits you.
                    </p>
                </div>

            </section>

            <section className="why-section">

                <div className="why-header">

                    <p className="hero-label">
                        WHY CAREERDAY?
                    </p>

                    <h2>
                        Choosing a career should be an experience.
                    </h2>

                    <p>
                        Instead of answering another personality quiz,
                        CareerDay lets you experience what a profession
                        actually feels like.
                    </p>

                </div>

                <div className="why-grid">

                    <div className="why-card">
                        <span>01</span>
                        <h3>Real situations</h3>
                        <p>
                            Complete tasks inspired by situations
                            professionals face in real life.
                        </p>
                    </div>

                    <div className="why-card">
                        <span>02</span>
                        <h3>Learn by doing</h3>
                        <p>
                            Don't just read about a profession.
                            Try doing the work yourself.
                        </p>
                    </div>

                    <div className="why-card">
                        <span>03</span>
                        <h3>Know yourself</h3>
                        <p>
                            Reflect on every experience and understand
                            what kind of work fits you.
                        </p>
                    </div>

                </div>

            </section>

        </main>
    )
}