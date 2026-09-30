import { Link } from 'react-router-dom'
import { careers } from '../data/careers'

export default function Progress() {
    const progress = JSON.parse(
        localStorage.getItem('careerProgress') || '[]'
    )

    return (
        <main className="progress-page">

            <section className="progress-header">

                <p className="hero-label">
                    YOUR CAREER JOURNEY
                </p>

                <h1>My Progress</h1>

                <p>
                    Track the careers you have explored and discover
                    which directions interest you most.
                </p>

            </section>


            <section className="progress-stats">

                <div className="progress-stat">
                    <span>{progress.length}</span>
                    <p>Careers Explored</p>
                </div>

                <div className="progress-stat">
                    <span>{careers.length}</span>
                    <p>Careers Available</p>
                </div>

                <div className="progress-stat">
          <span>
            {progress.length > 0
                ? Math.round((progress.length / careers.length) * 100)
                : 0}%
          </span>
                    <p>Exploration Progress</p>
                </div>

            </section>


            <section className="progress-list">

                <div className="progress-list-header">
                    <div>
                        <p className="section-label">
                            EXPLORED CAREERS
                        </p>

                        <h2>Your experiences</h2>
                    </div>

                    <Link
                        to="/careers"
                        className="secondary-button"
                    >
                        Explore More
                    </Link>
                </div>


                {progress.length === 0 ? (

                    <div className="empty-progress">

                        <div>🚀</div>

                        <h3>Your journey starts here.</h3>

                        <p>
                            Try your first career and your experience
                            will appear here.
                        </p>

                        <Link
                            to="/careers"
                            className="primary-button"
                        >
                            EXPLORE CAREERS →
                        </Link>

                    </div>

                ) : (

                    <div className="progress-cards">

                        {progress.map((item) => (

                            <div
                                className="progress-card"
                                key={item.careerId}
                            >

                                <div className="progress-card-icon">
                                    {careers.find(
                                        (career) => career.id === item.careerId
                                    )?.icon}
                                </div>

                                <div className="progress-card-info">

                                    <span>COMPLETED</span>

                                    <h3>
                                        {item.careerTitle}
                                    </h3>

                                    <p>
                                        Enjoyed: {item.enjoyed}
                                    </p>

                                    <p>
                                        Difficulty: {item.difficulty}
                                    </p>

                                    <p>
                                        Interested: {item.interested}
                                    </p>

                                </div>

                                <div className="completed-check">
                                    ✓
                                </div>

                            </div>

                        ))}

                    </div>

                )}

            </section>

        </main>
    )
}