import { Link, useParams, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { careers } from '../data/careers'

export default function Reflection() {
    const { id } = useParams()
    const navigate = useNavigate()

    const career = careers.find((item) => item.id === id)

    const [answers, setAnswers] = useState({
        enjoyed: '',
        difficulty: '',
        interested: '',
    })

    if (!career) {
        return (
            <main className="reflection-page">
                <h1>Career not found</h1>

                <Link to="/careers" className="primary-button">
                    ← BACK TO CAREERS
                </Link>
            </main>
        )
    }

    function handleChange(field, value) {
        setAnswers((previous) => ({
            ...previous,
            [field]: value,
        }))
    }

    function handleSubmit(event) {
        event.preventDefault()

        const progress = JSON.parse(
            localStorage.getItem('careerProgress') || '[]'
        )

        const newResult = {
            careerId: career.id,
            careerTitle: career.title,
            completedAt: new Date().toISOString(),
            ...answers,
        }

        const updatedProgress = [
            ...progress.filter((item) => item.careerId !== career.id),
            newResult,
        ]

        localStorage.setItem(
            'careerProgress',
            JSON.stringify(updatedProgress)
        )

        navigate('/progress')
    }

    const isComplete =
        answers.enjoyed &&
        answers.difficulty &&
        answers.interested

    return (
        <main className="reflection-page">

            <section className="reflection-header">

                <Link
                    to={`/try/${career.id}`}
                    className="back-link"
                >
                    ← Back to Experience
                </Link>

                <p className="hero-label">
                    REFLECT ON YOUR EXPERIENCE
                </p>

                <div className="reflection-icon">
                    {career.icon}
                </div>

                <h1>
                    What did you think?
                </h1>

                <p>
                    Take a moment to think about your experience as a{' '}
                    {career.title}.
                </p>

            </section>


            <form
                className="reflection-form"
                onSubmit={handleSubmit}
            >

                <div className="reflection-question">

                    <span>01</span>

                    <h2>
                        Did you enjoy the task?
                    </h2>

                    <div className="choice-grid">

                        {['Yes', 'Not sure', 'No'].map((answer) => (
                            <button
                                type="button"
                                key={answer}
                                className={
                                    answers.enjoyed === answer
                                        ? 'choice selected'
                                        : 'choice'
                                }
                                onClick={() =>
                                    handleChange('enjoyed', answer)
                                }
                            >
                                {answer}
                            </button>
                        ))}

                    </div>

                </div>


                <div className="reflection-question">

                    <span>02</span>

                    <h2>
                        How difficult was it?
                    </h2>

                    <div className="choice-grid">

                        {['Easy', 'Moderate', 'Difficult'].map((answer) => (
                            <button
                                type="button"
                                key={answer}
                                className={
                                    answers.difficulty === answer
                                        ? 'choice selected'
                                        : 'choice'
                                }
                                onClick={() =>
                                    handleChange('difficulty', answer)
                                }
                            >
                                {answer}
                            </button>
                        ))}

                    </div>

                </div>


                <div className="reflection-question">

                    <span>03</span>

                    <h2>
                        Would you like to learn more about this career?
                    </h2>

                    <div className="choice-grid">

                        {['Definitely', 'Maybe', 'Probably not'].map(
                            (answer) => (
                                <button
                                    type="button"
                                    key={answer}
                                    className={
                                        answers.interested === answer
                                            ? 'choice selected'
                                            : 'choice'
                                    }
                                    onClick={() =>
                                        handleChange('interested', answer)
                                    }
                                >
                                    {answer}
                                </button>
                            )
                        )}

                    </div>

                </div>


                <button
                    type="submit"
                    className="primary-button reflection-submit"
                    disabled={!isComplete}
                >
                    SAVE MY EXPERIENCE →
                </button>

            </form>

        </main>
    )
}