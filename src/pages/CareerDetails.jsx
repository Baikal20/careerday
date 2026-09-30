import { Link, useParams } from 'react-router-dom'
import { careers } from '../data/careers'

export default function CareerDetails() {
    const { id } = useParams()

    console.log('URL id:', id)
    console.log('Careers:', careers)

    const career = careers.find((item) => item.id === id)

    if (!career) {
        return (
            <main className="career-details">
                <section className="career-details-hero">
                    <h1>Career not found</h1>

                    <p className="details-description">
                        We couldn't find this career.
                    </p>

                    <Link to="/careers" className="primary-button">
                        ← BACK TO CAREERS
                    </Link>
                </section>
            </main>
        )
    }

    return (
        <main className="career-details">

            <section className="career-details-hero">

                <Link to="/careers" className="back-link">
                    ← Back to Careers
                </Link>

                <div className="details-icon">
                    {career.icon}
                </div>

                <p className="hero-label">
                    {career.category}
                </p>

                <h1>{career.title}</h1>

                <p className="details-description">
                    {career.description}
                </p>

                <Link
                    to={`/try/${career.id}`}
                    className="primary-button"
                >
                    TRY THIS CAREER →
                </Link>

            </section>

            <section className="details-content">

                <div className="details-block">

                    <p className="section-label">
                        WHAT THEY DO
                    </p>

                    <h2>
                        What does a {career.title} actually do?
                    </h2>

                    <p>
                        A {career.title.toLowerCase()} works on real problems,
                        makes decisions and uses professional skills to create
                        useful results.
                    </p>

                </div>

                <div className="details-block">

                    <p className="section-label">
                        KEY SKILLS
                    </p>

                    <div className="details-skills">
                        {career.skills.map((skill) => (
                            <div
                                className="details-skill"
                                key={skill}
                            >
                                {skill}
                            </div>
                        ))}
                    </div>

                </div>

                <div className="details-block">

                    <p className="section-label">
                        A DAY IN THE LIFE
                    </p>

                    <h2>
                        What could your day look like?
                    </h2>

                    <div className="day-list">

                        <div>
                            <span>09:00</span>
                            <p>Start the workday and review priorities.</p>
                        </div>

                        <div>
                            <span>11:00</span>
                            <p>Work on an important professional task.</p>
                        </div>

                        <div>
                            <span>14:00</span>
                            <p>Collaborate with other people and solve problems.</p>
                        </div>

                        <div>
                            <span>17:00</span>
                            <p>Review the results and plan the next steps.</p>
                        </div>

                    </div>

                </div>

                <div className="details-block story-block">

                    <p className="section-label">
                        REAL STORY
                    </p>

                    <h2>
                        Meet someone who does this for a living.
                    </h2>

                    <p>
                        Learn about their career path, biggest challenges,
                        daily routine and advice for students.
                    </p>

                    <button className="secondary-button">
                        Coming Soon
                    </button>

                </div>

                <div className="try-banner">

                    <div>
                        <p className="section-label">
                            READY TO TEST YOURSELF?
                        </p>

                        <h2>
                            Try the profession yourself.
                        </h2>
                    </div>

                    <Link
                        to={`/try/${career.id}`}
                        className="primary-button"
                    >
                        START EXPERIENCE →
                    </Link>

                </div>

            </section>

        </main>
    )
}