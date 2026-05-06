import { Link } from "react-router-dom";
import "./Home.css";



export default function Home(){
    return (
        <>
            <section id="home-hero">
                <div className="home-container">
                    <p className="home-eyebrow">Engineer • Builder • Strategist</p>
                    <h1 className="home-title">
                        Technical depth, structured thinking, and presentation with intent.
                    </h1>
                    <p className="home-subtitle">
                        I build solutions across software, systems, data, and technical strategy,
                        with a strong focus on clarity, exectuion, and professional polish.
                    </p>
                </div>
            </section>
            <section id="home-profile-preview">
                <div className="home-container">
                    <div className="section-header-row">
                        <div>
                            <h2 className="section-header">About me</h2>
                        </div>
                    </div>
                    <p className="profile-text">
                        I am a versatile engineer with experience across software, systems, 
                        data, security, and business-facing technical work. I focus on 
                        building well, understanding deeply, and communicating clearly.
                    </p>
                    <div className="preview-grid-three-col">
                        <article className="preview-card">
                            <h3>Technical Range</h3>
                            <p>Software, systems, machine learning, security, and research-oriented problem solving.</p>
                        </article>
                        <article className="preview-card">
                            <h3>Communication</h3>
                            <p>Comfortable presentin technical work to both engineers and leadership audiences.</p>
                        </article>
                        <article className="preview-card">
                            <h3>Ownership</h3>
                            <p>I push beyond functionality toward structure, clarity, and polished execution.</p>
                        </article>
                    </div>
                    <Link to="/Profile" className="btn btn-secondary">Learn more</Link>
                </div>
            </section>
            <section id="home-timeline-preview">
                <div className="home-container">
                    <div className="section-heading-row">
                    <div>
                        <p className="section-eyebrow">Timeline</p>
                        <h2 className="section-title">My Professional Path</h2>
                    </div>
                    </div>

                    <div className="timeline-preview-list">
                    <article className="timeline-preview-item">
                        <span className="timeline-year">2019–2023</span>
                        <div>
                        <h3>Tecnológico de Monterrey</h3>
                        <p>Undergraduate formation in a project-driven engineering environment.</p>
                        </div>
                    </article>

                    <article className="timeline-preview-item">
                        <span className="timeline-year">2024–Present</span>
                        <div>
                        <h3>Munsa Molinos</h3>
                        <p>Technical, IT, BI, and business-facing initiatives across multiple functions.</p>
                        </div>
                    </article>

                    <article className="timeline-preview-item">
                        <span className="timeline-year">2024-2026</span>
                        <div>
                        <h3>Arizona State University</h3>
                        <p>Graduate work in software engineering, machine learning, mobile computing, and security.</p>
                        </div>
                    </article>

                    <article className="timeline-preview-item">
                        <span className="timeline-year">2019-Present</span>
                        <div>
                        <h3>Engineering Projects</h3>
                        <p>Applied work across ML, systems, networking, Android, and cybersecurity.</p>
                        </div>
                    </article>
                    </div>
                    <Link to="/timeline" className="btn btn-secondary">Learn more</Link>
                    </div>
                </section>
            <section id="home-demo-preview">
                <div className="home-container">
                    <div className="section-heading-row">
                        <div>
                            <p className="section-eyebrow">Demos</p>
                            <h2 className="">Interactive Work</h2>
                        </div>
                    </div>
                    <div className="demo-preview-area">
                        {/* Insert a test here */}
                    </div>
                    <Link to="/demo" className="btn btn-secondary">Explore more</Link>
                </div>
            </section>
            <section id="home-contact-preview">
                <div className="home-container home-contact-cta">
                    <div>
                        <p className="section-eyebrow">Contact Information</p>
                        <h2 className="section-title">Interested in developing meaningful solutions?</h2>
                        <p className="contact-preview-text">
                            I am open to conversations around software engineering, technical strategy,
                            data-driven systems, and roles where careful execution matters.
                        </p>
                    </div>
                    <div className="contact-preview-actions">
                        <Link to="/contact" className="btn btn-secondary">Get in touch</Link>
                        <a
                            className="btn btn-outline-light"
                            href="/Esteban's%20CV%20-%20Technical%20Engineering%20Focus.docx"
                            download
                        >
                            Download CV
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
};
