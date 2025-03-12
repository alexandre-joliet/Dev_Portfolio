import "./Projects.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

const Projects = () => {
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        const scrollTrigger = ScrollTrigger.create({
            trigger: ".phone_portfolio-activities-section",
            scroller: ".portfolio_main-wrapper",
            start: "600",
            // markers: true,
            // onEnter: () => console.log("Section entered viewport"),
        });

        gsap.to(".phone_portfolio-activities-section", {
            scrollTrigger: scrollTrigger,
            duration: 1,
            opacity: 1,
            filter: "blur(0px)",
            translateX: 0,
        });
    }, []);

    return (
        <>
            <section className="phone_portfolio-projects-section">
                <h2 className="phone_portfolio-projects-title">PROJECTS</h2>
                <div>
                    <ul className="phone_portfolio_projects-card-container">
                        <li className="phone_portfolio_projects-card">
                            <img
                                className="phone_projects-card-image"
                                src="/pictures/Portfolio.webp"
                                alt=""
                            ></img>
                            <p className="phone_projects-card-title">
                                WEB PORTFOLIO
                            </p>
                            <div className="phone_projects-card-info">
                                <p className="phone_projects-card-info-title">
                                    INFO
                                </p>
                                <p className="projects-card-info-text">
                                    Built from scratch to showcase my work
                                </p>
                                <p className="phone_projects-card-info-title">
                                    STACK
                                </p>
                                <p className="phone_projects-card-info-text">
                                    Blender, React, TypeScript, React-router,
                                    Zustand, GSAP and Vite
                                </p>
                            </div>
                        </li>
                        <li className="phone_portfolio_projects-card">
                            <img
                                className="phone_projects-card-image"
                                src="/pictures/Photo.webp"
                                alt=""
                            ></img>
                            <p className="phone_projects-card-title">
                                PHOTOGRAPHY PORTFOLIO
                            </p>
                            <a
                                className="phone_projects-card-link"
                                href="https://www.alexandrejoliet-photo.com/"
                                target="_blank"
                            >
                                <button className="phone_projects-card-button">
                                    <img
                                        src="/icons/link_wght200_48.png"
                                        alt=""
                                    />
                                </button>
                            </a>
                            <div className="phone_projects-card-info">
                                <p className="phone_projects-card-info-title">
                                    INFO
                                </p>
                                <p className="phone_projects-card-info-text">
                                    Personal project to host and showcase my
                                    photography work
                                </p>
                                <p className="phone_projects-card-info-title">
                                    STACK
                                </p>
                                <p className="phone_projects-card-info-text">
                                    NextJS, ReactJS, TypeScript, Framer Motion
                                    and Cloudinary
                                </p>
                            </div>
                        </li>
                        <li className="phone_portfolio_projects-card">
                            <img
                                className="phone_projects-card-image"
                                src="/pictures/TKD.webp"
                                alt=""
                            ></img>
                            <p className="phone_projects-card-title">
                                VENDOME TAEKWONDO CLUB
                            </p>

                            <a
                                className="phone_projects-card-link"
                                href="https://www.vendome-taekwondo.com/"
                                target="_blank"
                            >
                                <button className="phone_projects-card-button">
                                    <img
                                        src="/icons/link_wght200_48.png"
                                        alt=""
                                    />
                                </button>
                            </a>
                            <div className="phone_projects-card-info">
                                <p className="phone_projects-card-info-title">
                                    INFO
                                </p>
                                <p className="phone_projects-card-info-text">
                                    Built for a local association to give them
                                    online visibility, share infos about the
                                    sport and bring new members
                                </p>
                                <p className="phone_projects-card-info-title">
                                    STACK
                                </p>
                                <p className="phone_projects-card-info-text">
                                    NextJS, ReactJS and TypeScript
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    );
};

export default Projects;
