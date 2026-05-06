import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
    return (
        <header className="navbar-shell fixed-top">
            <nav className="navbar navbar-expand-lg bg-navbar" data-bs-theme="dark">
                <div className="container">
                    <NavLink to="/" end className="navbar-brand fw-semibold">
                        Esteban Sanchez
                    </NavLink>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#mainNavbar"
                        aria-controls="mainNavbar"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-center" id="mainNavbar">
                        <ul className="navbar-nav gap-lg-2 mx-auto">
                            <li className="nav-item">
                                <NavLink
                                    to="/"
                                    end
                                    className={({ isActive }) =>
                                        isActive ? "nav-link custom-nav-link active" : "nav-link custom-nav-link"
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink
                                    to="/profile"
                                    className={({ isActive }) =>
                                        isActive ? "nav-link custom-nav-link active" : "nav-link custom-nav-link"
                                    }
                                >
                                    Profile
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink
                                    to="/timeline"
                                    className={({ isActive }) =>
                                        isActive ? "nav-link custom-nav-link active" : "nav-link custom-nav-link"
                                    }
                                >
                                    Timeline
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink
                                    to="/demos"
                                    className={({ isActive }) =>
                                        isActive ? "nav-link custom-nav-link active" : "nav-link custom-nav-link"
                                    }
                                >
                                    Demos
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink
                                    to="/contact"
                                    className={({ isActive }) =>
                                        isActive ? "nav-link custom-nav-link active" : "nav-link custom-nav-link"
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>
                        </ul>

                        <a
                            href="/Esteban-Sanchez-CV.docx"
                            download
                            className="btn btn-sm ms-lg-3 nav-resume-btn"
                        >
                            Resume
                        </a>
                    </div>
                </div>
            </nav>
        </header>
    );
}