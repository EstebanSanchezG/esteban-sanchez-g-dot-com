import "./Profile.css";

const coreSkills = [
    "Python",
    "JavaScript",
    "TypeScript",
    "SQL",
    "React",
    "Power BI",
    "DAX",
    "SQL Server",
    "Three.js",
    "GIS",
    "Machine Learning",
    "Security",
];

const focusAreas = [
    {
        title: "Software and Data Systems",
        text: "Builds practical systems across web, data, BI, visualization, and automation, with attention to architecture, performance, and maintainability.",
    },
    {
        title: "Business-Facing Engineering",
        text: "Comfortable working directly with leadership, operations, vendors, and non-technical users to turn uncertain needs into clear technical deliverables.",
    },
    {
        title: "Research-Driven Execution",
        text: "Uses structured research, feasibility analysis, and data modeling to support investment decisions, process improvement, and technical strategy.",
    },
];

const evidencePoints = [
    "Modernized BI workflows at Munsa Molinos by moving reporting logic into SQL Server and rebuilding dashboards in Power BI.",
    "Reduced a major dashboard refresh process from 6-8 hours to roughly 18 seconds by redesigning the data architecture.",
    "Built executive-facing analytics for operational analysis, investment planning, and board-level decision support.",
    "Developed GIS terrain reconstruction tools using Three.js and geospatial elevation data for disaster risk and infrastructure analysis.",
    "Led pilots and adoption work for business platforms, including an electronic signature rollout used by approximately 150 users.",
];

const traits = [
    "Owns ambiguous problems from research through delivery.",
    "Communicates technical tradeoffs clearly to engineers and leadership.",
    "Learns new domains quickly enough to produce useful systems.",
    "Balances hands-on implementation with business judgment.",
];

export default function Profile(){
    return(
        <main className="profile-page" aria-labelledby="profile-title">
            <section className="profile-hero">
                <div className="profile-container profile-hero-grid">
                    <div>
                        <p className="profile-eyebrow">Profile</p>
                        <h1 id="profile-title">
                            Software engineer with range across systems, data, and technical strategy.
                        </h1>
                        <p className="profile-lede">
                            I build business-critical technical work in environments where software,
                            data, operations, and leadership decisions meet. My strongest value is
                            turning open-ended problems into clear systems, useful analytics, and
                            decisions people can trust.
                        </p>
                    </div>
                    <div className="profile-summary-panel" aria-label="Profile summary">
                        <div>
                            <span>Current Role</span>
                            <strong>Project Coordinator and Software / Data Engineer</strong>
                            <p>Munsa Molinos</p>
                        </div>
                        <div>
                            <span>Graduate Study</span>
                            <strong>M.S. Computer Science</strong>
                            <p>Arizona State University, expected 2026</p>
                        </div>
                        <div>
                            <span>Foundation</span>
                            <strong>B.S. Computer Science and Technology</strong>
                            <p>Tecnologico de Monterrey, 4.0 GPA</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="profile-section profile-section-alt">
                <div className="profile-container">
                    <div className="profile-section-heading">
                        <p className="profile-eyebrow">What I do well</p>
                        <h2>Useful range without losing execution focus.</h2>
                    </div>
                    <div className="profile-focus-grid">
                        {focusAreas.map((area) => (
                            <article className="profile-card" key={area.title}>
                                <h3>{area.title}</h3>
                                <p>{area.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="profile-section">
                <div className="profile-container profile-proof-grid">
                    <div>
                        <p className="profile-eyebrow">Selected proof points</p>
                        <h2>Evidence a hiring manager can evaluate quickly.</h2>
                    </div>
                    <div className="profile-proof-list">
                        {evidencePoints.map((point) => (
                            <div className="profile-proof-item" key={point}>
                                <span aria-hidden="true" />
                                <p>{point}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="profile-section profile-section-alt">
                <div className="profile-container profile-skills-grid">
                    <div>
                        <p className="profile-eyebrow">Technical toolkit</p>
                        <h2>Stack and domains</h2>
                        <p className="profile-section-copy">
                            My work spans application development, analytics engineering,
                            geospatial visualization, cloud-backed projects, and secure systems.
                        </p>
                    </div>
                    <div className="profile-skill-cloud" aria-label="Technical skills">
                        {coreSkills.map((skill) => (
                            <span key={skill}>{skill}</span>
                        ))}
                    </div>
                </div>
            </section>

            <section className="profile-section profile-close-section">
                <div className="profile-container profile-close-grid">
                    <div>
                        <p className="profile-eyebrow">Working style</p>
                        <h2>Why teams can rely on me.</h2>
                    </div>
                    <div className="profile-traits">
                        {traits.map((trait) => (
                            <div className="profile-trait" key={trait}>
                                <p>{trait}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};
