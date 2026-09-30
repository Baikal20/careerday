export default function Footer() {
    return (
        <footer className="footer">

            <div className="footer-main">

                <div>
                    <div className="footer-logo">
                        CareerDay<span>.</span>
                    </div>

                    <p>
                        Explore careers. Experience them.
                        Discover your direction.
                    </p>
                </div>

                <div className="footer-links">

                    <div>
                        <span>PLATFORM</span>
                        <a href="/careers">Careers</a>
                        <a href="/progress">My Progress</a>
                    </div>

                    <div>
                        <span>CAREERDAY</span>
                        <a href="/">About</a>
                        <a href="/">Contact</a>
                    </div>

                </div>

            </div>

            <div className="footer-bottom">
                <span>© 2026 CareerDay</span>
                <span>Built for the next generation.</span>
            </div>

        </footer>
    )
}