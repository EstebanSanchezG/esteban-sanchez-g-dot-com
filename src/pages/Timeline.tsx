import { useMemo, useState } from "react";
import "./Timeline.css";

type TimelineEntry = {
    id: string;
    period: string;
    shortPeriod: string;
    role: string;
    organization: string;
    type: string;
    summary: string;
    description: string;
    responsibilities: string[];
};

const timelineEntries: TimelineEntry[] = [
    {
        id: "tec",
        period: "2019 - 2023",
        shortPeriod: "2019",
        role: "Engineering Formation",
        organization: "Tecnologico de Monterrey",
        type: "Education",
        summary: "Project-driven undergraduate engineering work across systems, software, and applied problem solving.",
        description:
            "Built a technical foundation through engineering coursework and applied projects that required planning, experimentation, implementation, and presentation of results.",
        responsibilities: [
            "Developed software and systems projects in structured academic and team environments.",
            "Practiced technical communication through project reviews, documentation, and presentations.",
            "Built early experience translating open-ended requirements into working deliverables.",
        ],
    },
    {
        id: "internship",
        period: "2022 - 2023",
        shortPeriod: "2022",
        role: "GIS Graphics Developer",
        organization: "Development Monitors LLC",
        type: "Internship",
        summary: "Interactive 3D terrain visualization using GIS elevation data, drone imagery, satellite sources, and Three.js.",
        description:
            "Built GIS-based terrain reconstruction tools that converted geospatial elevation data into interactive 3D environments for disaster risk analysis, infrastructure planning, and research-oriented decision support.",
        responsibilities:[
            "Designed and implemented Three.js terrain rendering from TIFF-based geospatial elevation datasets.",
            "Built data workflows to retrieve, normalize, and prepare satellite and drone-derived GIS inputs for visualization.",
            "Contributed to disaster risk and infrastructure analysis work, including focused map-based planning for Taiz.",
            "Mentored incoming interns and coordinated task handoff after being promoted into an assistant supervisor role.",
        ],
    },
    {
        id: "munsa",
        period: "2024 - Present",
        shortPeriod: "2024",
        role: "Technical, IT, and BI Initiatives",
        organization: "Munsa Molinos",
        type: "Professional",
        summary: "Business-facing technical work across IT, data, reporting, and operational improvement.",
        description:
            "Contributed to technical initiatives that connect operational needs with reliable implementation, clearer data, and better decision support across business functions.",
        responsibilities: [
            "Supported IT and systems work with an emphasis on practical reliability and user-facing clarity.",
            "Built and improved BI/reporting workflows for business visibility and operational decisions.",
            "Coordinated with non-technical stakeholders to understand requirements and present solutions clearly.",
            "Owned execution details from problem framing through delivery and follow-up.",
        ],
    },
    {
        id: "asu",
        period: "2024 - 2026",
        shortPeriod: "2024",
        role: "Graduate Software Engineering",
        organization: "Arizona State University",
        type: "Graduate Study",
        summary: "Advanced work in software engineering, machine learning, mobile computing, and security.",
        description:
            "Expanded technical depth through graduate coursework focused on modern software systems, secure development, mobile platforms, and machine learning.",
        responsibilities: [
            "Designed and evaluated software solutions using engineering-oriented methods.",
            "Studied secure systems, ML workflows, mobile computing, and software architecture topics.",
            "Balanced implementation detail with written analysis and presentation of technical tradeoffs.",
        ],
    },
    {
        id: "projects",
        period: "2019 - Present",
        shortPeriod: "2019",
        role: "Engineering Projects",
        organization: "Independent and Academic Work",
        type: "Portfolio",
        summary: "Applied builds across ML, systems, networking, Android, cybersecurity, and research-oriented work.",
        description:
            "Built a range of technical projects that strengthened full-cycle execution: understanding the domain, selecting an approach, implementing the work, and communicating the result.",
        responsibilities: [
            "Implemented technical prototypes and project deliverables across multiple engineering domains.",
            "Explored unfamiliar tools and methods quickly enough to turn them into working systems.",
            "Documented decisions, constraints, and outcomes so the work could be understood beyond the code.",
        ],
    },
];

export default function Timeline() {
    const [activeIndex, setActiveIndex] = useState(0);
    const activeEntry = timelineEntries[activeIndex];

    const experienceYears = useMemo(() => {
        const firstYear = 2019;
        return new Date().getFullYear() - firstYear;
    }, []);

    const moveSelection = (direction: -1 | 1) => {
        setActiveIndex((currentIndex) => {
            const nextIndex = currentIndex + direction;

            if (nextIndex < 0) {
                return timelineEntries.length - 1;
            }

            if (nextIndex >= timelineEntries.length) {
                return 0;
            }

            return nextIndex;
        });
    };

    const getCarouselPosition = (index: number) => {
        const totalEntries = timelineEntries.length;
        let offset = index - activeIndex;

        if (offset > totalEntries / 2) {
            offset -= totalEntries;
        }

        if (offset < -totalEntries / 2) {
            offset += totalEntries;
        }

        if (offset < -2) {
            return "is-hidden-left";
        }

        if (offset > 2) {
            return "is-hidden-right";
        }

        return `is-offset-${offset}`;
    };

    return (
        <>
            <section id="timeline-hero">
                <div className="timeline-container timeline-hero-grid">
                    <div>
                        <p className="timeline-eyebrow">Professional timeline</p>
                        <h1 className="timeline-title">
                            {experienceYears}+ years of technical growth, ownership, and applied engineering.
                        </h1>
                        <p className="timeline-subtitle">
                            A focused view of the roles, studies, and project work that shaped how I build,
                            communicate, and solve technical problems.
                        </p>
                    </div>
                    <div className="timeline-hero-stat" aria-label={`${experienceYears}+ years of experience`}>
                        <span>{experienceYears}+</span>
                        <p>Years building across software, systems, data, and technical strategy.</p>
                    </div>
                </div>
            </section>

            <section id="timeline-slider-section">
                <div className="timeline-container">
                    <div className="timeline-section-heading">
                        <div>
                            <p className="timeline-eyebrow">Path overview</p>
                            <h2>Move through the timeline</h2>
                        </div>
                        <div className="timeline-controls" aria-label="Timeline controls">
                            <button type="button" onClick={() => moveSelection(-1)} aria-label="Previous timeline item">
                                <span aria-hidden="true">&lt;</span>
                            </button>
                            <button type="button" onClick={() => moveSelection(1)} aria-label="Next timeline item">
                                <span aria-hidden="true">&gt;</span>
                            </button>
                        </div>
                    </div>

                    <div className="timeline-carousel" aria-label="Timeline milestones">
                        {timelineEntries.map((entry, index) => {
                            const positionClass = getCarouselPosition(index);
                            const isVisible = !positionClass.startsWith("is-hidden");

                            return (
                                <button
                                    key={entry.id}
                                    type="button"
                                    className={`timeline-node ${positionClass} ${index === activeIndex ? "is-active" : ""}`}
                                    onClick={() => setActiveIndex(index)}
                                    aria-current={index === activeIndex ? "step" : undefined}
                                    tabIndex={isVisible ? 0 : -1}
                                >
                                    <span className="timeline-node-marker" aria-hidden="true" />
                                    <span className="timeline-node-year">{entry.shortPeriod}</span>
                                    <span className="timeline-node-period">{entry.period}</span>
                                    <span className="timeline-node-title">{entry.organization}</span>
                                    <span className="timeline-node-summary">{entry.summary}</span>
                                </button>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section id="timeline-detail-section">
                <div className="timeline-container">
                    <article className="timeline-detail-panel">
                        <div className="timeline-detail-meta">
                            <span>{activeEntry.type}</span>
                            <span>{activeEntry.period}</span>
                        </div>
                        <div className="timeline-detail-grid">
                            <div>
                                <p className="timeline-eyebrow">Selected experience</p>
                                <h2>{activeEntry.role}</h2>
                                <h3>{activeEntry.organization}</h3>
                                <p className="timeline-detail-description">{activeEntry.description}</p>
                            </div>
                            <div className="timeline-responsibilities">
                                <h4>Responsibilities and focus</h4>
                                <ul>
                                    {activeEntry.responsibilities.map((responsibility) => (
                                        <li key={responsibility}>{responsibility}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </article>
                </div>
            </section>
        </>
    );
}
