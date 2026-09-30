import { Link } from 'react-router-dom'

export default function CareerCard({ career }) {
    return (
        <article className="career-card">

            <div className="career-icon">
                {career.icon}
            </div>

            <div className="career-category">
                {career.category}
            </div>

            <h3>{career.title}</h3>

            <p>{career.description}</p>

            <div className="career-skills">
                {career.skills.slice(0, 3).map((skill) => (
                    <span key={skill}>{skill}</span>
                ))}
            </div>

            <Link
                to={`/careers/${career.id}`}
                className="career-button"
            >
                Explore →
            </Link>
        </article>
    )
}