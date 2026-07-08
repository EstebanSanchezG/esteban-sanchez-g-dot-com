import "./Demos.css";

type DemoProject = {
    title: string;
    language: string;
    runtime: string;
    summary: string;
    interaction: string;
    status: "Ready" | "Prototype" | "Container";
    output: string[];
    accent: string;
    source?: string;
};

const demoProjects: DemoProject[] = [
    {
        title: "ThreeJS Multiagents",
        language: "JavaScript",
        runtime: "Iframe + WebGL",
        summary: "A browser-run traffic simulation with multiple cars, traffic lights, camera views, and dat.GUI controls.",
        interaction: "Orbit the scene, switch viewports, inspect vehicles, and watch frame-by-frame simulation data.",
        status: "Ready",
        output: ["entry: index.html", "engine: three.js", "data: simul_data.json", "mode: live iframe"],
        accent: "cyan",
        source: "/projects/ThreeJS_Multiagents/index.html",
    },
    {
        title: "Systems Simulator",
        language: "C++",
        runtime: "WebAssembly",
        summary: "Compiles a C++ core to WASM so visitors can run the engine without installing tooling.",
        interaction: "Adjust inputs and compare simulation traces.",
        status: "Prototype",
        output: ["wasm module initialized", "seed: 14872", "tick rate: 60hz", "memory: 12.8mb"],
        accent: "rose",
    },
    {
        title: "ML Inference Notebook",
        language: "Python",
        runtime: "Pyodide or API",
        summary: "Runs lightweight Python examples locally, with heavier model calls delegated to a service.",
        interaction: "Change sample values and review prediction confidence.",
        status: "Container",
        output: ["model: compact classifier", "features: 8", "confidence: 0.91", "latency: 42ms"],
        accent: "amber",
    },
];

const runtimeOptions = [
    "iframe for web projects",
    "WASM for C/C++",
    "Pyodide for small Python",
    "API/container for heavy runtimes",
];

export default function Demos(){
    const featuredDemo = demoProjects[0];

    return(
        <section className="demos-page" aria-labelledby="demos-title">
            <div className="demos-shell">
                <div className="demos-intro">
                    <p className="demos-eyebrow">Demos</p>
                    <h1 id="demos-title">A playground for projects that deserve to be touched.</h1>
                    <p>
                        The best implementation is a modular demo gallery: each project gets a small
                        sandbox window, a short technical explanation, and the right execution strategy
                        for its language.
                    </p>
                </div>

                <div className="playground-window" aria-label="Featured demo playground preview">
                    <div className="window-toolbar">
                        <div className="window-controls" aria-hidden="true">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <span className="window-title">{featuredDemo.title}</span>
                        <span className="window-runtime">{featuredDemo.runtime}</span>
                    </div>
                    <div className="playground-body">
                        <div className="playground-canvas">
                            {featuredDemo.source ? (
                                <iframe
                                    className="demo-iframe"
                                    title={featuredDemo.title}
                                    src={featuredDemo.source}
                                    sandbox="allow-scripts allow-same-origin"
                                />
                            ) : (
                                <div className="grid-map" aria-hidden="true">
                                    {Array.from({ length: 56 }).map((_, index) => (
                                        <span
                                            key={index}
                                            className={
                                                index === 8 || index === 17 || index === 26 || index === 35
                                                    ? "grid-cell is-path"
                                                    : index % 11 === 0 || index % 13 === 0
                                                        ? "grid-cell is-weight"
                                                        : "grid-cell"
                                            }
                                        />
                                    ))}
                                </div>
                            )}
                        </div>
                        <div className="terminal-panel">
                            <div className="terminal-header">run output</div>
                            {featuredDemo.output.map((line) => (
                                <code key={line}>{">"} {line}</code>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="demo-grid" aria-label="Demo project options">
                    {demoProjects.map((project) => (
                        <article className={`demo-card accent-${project.accent}`} key={project.title}>
                            <div className="demo-card-header">
                                <span className="demo-status">{project.status}</span>
                                <span className="demo-language">{project.language}</span>
                            </div>
                            <h2>{project.title}</h2>
                            <p>{project.summary}</p>
                            <dl>
                                <div>
                                    <dt>Runtime</dt>
                                    <dd>{project.runtime}</dd>
                                </div>
                                <div>
                                    <dt>Interaction</dt>
                                    <dd>{project.interaction}</dd>
                                </div>
                            </dl>
                        </article>
                    ))}
                </div>

                <div className="implementation-panel">
                    <div>
                        <p className="demos-eyebrow">Implementation model</p>
                        <h2>Small windows, different engines behind them.</h2>
                    </div>
                    <div className="runtime-list">
                        {runtimeOptions.map((option) => (
                            <span key={option}>{option}</span>
                        ))}
                    </div>
                    <p>
                        Browser-safe projects can run directly on the page. Compiled, Python, Java, or
                        heavier projects should use either WebAssembly, Pyodide, or a container-backed
                        API so the visitor gets the interactive experience without exposing your server
                        or asking them to install anything.
                    </p>
                </div>
            </div>
        </section>
    )
};
