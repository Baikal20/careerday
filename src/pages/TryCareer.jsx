import { Link, useParams } from 'react-router-dom'
import { useState } from 'react'
import { careers } from '../data/careers'

const tasks = {
    'software-developer': {
        title: 'Fix a Website Bug',
        description:
            'A website is not working correctly. Find the problem and decide how you would fix it.',
        instruction:
            'A button on a website should open the checkout page, but nothing happens when users click it. What would you check first?',
        options: [
            'Check the button and its click event',
            'Change the website logo',
            'Delete the checkout page',
            'Change the font',
        ],
        correct: 0,
        explanation:
            'A developer would first inspect the button, its click event and the code connected to it.',
    },

    journalist: {
        title: 'Investigate a Story',
        description:
            'You are a journalist investigating a story. Your job is to verify information before publishing it.',
        instruction:
            'You receive an important claim from social media. What should you do first?',
        options: [
            'Publish it immediately',
            'Verify the information using reliable sources',
            'Share it with friends',
            'Add your own opinion',
        ],
        correct: 1,
        explanation:
            'Journalists need to verify information before publishing it, especially when the original source may be unreliable.',
    },

    'ux-designer': {
        title: 'Improve an App',
        description:
            'You are a UX/UI designer. Your task is to make a digital product easier to use.',
        instruction:
            'Users say they cannot find the checkout button. What should you do first?',
        options: [
            'Add more animations',
            'Make the button easier to see and find',
            'Add more text',
            'Change the company logo',
        ],
        correct: 1,
        explanation:
            'A UX designer focuses on the user experience. Making an important action easier to find directly addresses the problem.',
    },

    lawyer: {
        title: 'Analyze a Case',
        description:
            'You are a lawyer working on a new case. You need to analyze the available information before making an argument.',
        instruction:
            'Your client gives you only their version of events. What should you do next?',
        options: [
            'Immediately make a final decision',
            'Ignore the client',
            'Collect and verify relevant evidence',
            'Publish the case online',
        ],
        correct: 2,
        explanation:
            'A lawyer needs to examine relevant evidence and information before building a legal argument.',
    },

    entrepreneur: {
        title: 'Build a Business Idea',
        description:
            'You have an idea for a new product. Your first job is to understand whether people actually need it.',
        instruction:
            'What should you do before spending a lot of money building the product?',
        options: [
            'Buy expensive equipment',
            'Research the target customers and their needs',
            'Hire a huge team',
            'Create a company logo',
        ],
        correct: 1,
        explanation:
            'Entrepreneurs should understand their customers and validate the problem before investing heavily in a product.',
    },

    'marketing-manager': {
        title: 'Create a Marketing Campaign',
        description:
            'You are a marketing manager. Your goal is to help a new product reach the right audience.',
        instruction:
            'A company is launching a new fitness app for teenagers. What should you do first?',
        options: [
            'Research the target audience',
            'Buy the most expensive advertisement',
            'Change the company logo',
            'Post random content online',
        ],
        correct: 0,
        explanation:
            'A marketing manager should first understand the target audience, their needs and interests before creating a campaign.',
    },

    architect: {
        title: 'Design a New Space',
        description:
            'You are an architect designing a new space. You need to balance creativity, functionality and the needs of the people using it.',
        instruction:
            'You are designing a study room for students. What should you consider first?',
        options: [
            'Only how the room looks',
            'The needs of the people who will use the room',
            'The most expensive materials',
            'The color of the company logo',
        ],
        correct: 1,
        explanation:
            'Architects need to understand how people will use a space and what they need from it before making design decisions.',
    },

    'data-analyst': {
        title: 'Find the Pattern',
        description:
            'You are a data analyst. Your job is to examine data and use it to answer business questions.',
        instruction:
            'A company wants to know why sales decreased last month. What should you do first?',
        options: [
            'Guess the reason',
            'Delete the old data',
            'Analyze the available sales data',
            'Immediately change the product',
        ],
        correct: 2,
        explanation:
            'A data analyst should examine the available data, look for patterns and identify possible reasons before making conclusions.',
    },
}

export default function TryCareer() {
    const { id } = useParams()

    const career = careers.find((item) => item.id === id)
    const task = tasks[id]

    const [selectedAnswer, setSelectedAnswer] = useState(null)

    if (!career || !task) {
        return (
            <main className="try-page">
                <h1>Career not found</h1>

                <Link to="/careers" className="primary-button">
                    ← BACK TO CAREERS
                </Link>
            </main>
        )
    }

    const isCorrect = selectedAnswer === task.correct

    function handleAnswer(index) {
        if (selectedAnswer !== null) return
        setSelectedAnswer(index)
    }

    return (
        <main className="try-page">

            <section className="try-header">

                <Link
                    to={`/careers/${career.id}`}
                    className="back-link"
                >
                    ← Back to {career.title}
                </Link>

                <p className="hero-label">
                    TRY THIS CAREER
                </p>

                <div className="try-icon">
                    {career.icon}
                </div>

                <h1>{task.title}</h1>

                <p>
                    {task.description}
                </p>

            </section>

            <section className="task-card">

                <div className="task-number">
                    TASK 01
                </div>

                <h2>
                    {task.instruction}
                </h2>

                <div className="task-options">

                    {task.options.map((option, index) => {

                        let className = 'task-option'

                        if (selectedAnswer !== null) {
                            if (index === task.correct) {
                                className += ' correct'
                            } else if (index === selectedAnswer) {
                                className += ' incorrect'
                            }
                        }

                        return (
                            <button
                                key={option}
                                className={className}
                                onClick={() => handleAnswer(index)}
                            >
                <span>
                  {String.fromCharCode(65 + index)}
                </span>

                                {option}
                            </button>
                        )
                    })}

                </div>

                {selectedAnswer !== null && (
                    <div
                        className={`answer-result ${
                            isCorrect ? 'success' : 'error'
                        }`}
                    >
                        <h3>
                            {isCorrect ? '✓ Correct!' : '✕ Not quite'}
                        </h3>

                        <p>
                            {task.explanation}
                        </p>

                        <Link
                            to={`/reflection/${career.id}`}
                            className="primary-button result-button"
                        >
                            CONTINUE →
                        </Link>

                    </div>
                )}

            </section>

        </main>
    )
}