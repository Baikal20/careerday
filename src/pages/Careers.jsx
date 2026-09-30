import { careers } from '../data/careers'
import CareerCard from '../components/CareerCard'

export default function Careers() {
    return (
        <main className="careers-page">

            <section className="careers-header">

                <p className="hero-label">
                    EXPLORE YOUR FUTURE
                </p>

                <h1>
                    Explore Careers
                </h1>

                <p>
                    Discover what different professionals actually do
                    and find a career worth trying.
                </p>

            </section>


            <section className="career-grid">

                {careers.map((career) => (
                    <CareerCard
                        key={career.id}
                        career={career}
                    />
                ))}

            </section>

        </main>
    )
}