import "./DesktopProjects.css";
import gsap from "gsap";
import useIframeStore from "../../../../stores/iframeStore";
import { useEffect } from "react";

const DesktopProjects = () => {
    //** Logic */
    const { showProjects, showExitAnimation, updateShowAnimation } =
        useIframeStore();

    //** Style */
    useEffect(() => {
        if (showProjects) {
            gsap.to(".desktop_portfolio-projects-section", {
                duration: 2,
                opacity: 1,
                // filter: "blur(0px)",
            });
            gsap.to(".desktop_portfolio-projects-section", {
                duration: 1,
                filter: "blur(0px)",
            });
        }
    }, [showProjects]);

    useEffect(() => {
        console.log(showExitAnimation);

        if (showExitAnimation) {
            gsap.to(".desktop_portfolio-projects-section", {
                duration: 1,
                opacity: 0,
            });
            updateShowAnimation("Enter");
        }
    }, [showExitAnimation, updateShowAnimation]);

    return (
        <>
            {showProjects && (
                <section className="desktop_portfolio-projects-section">
                    <h2 className="desktop_portfolio-projects-title">
                        PROJECTS
                    </h2>
                    <div>
                        <ul className="desktop_portfolio_projects-card-container">
                            <li className="desktop_portfolio_projects-card">
                                <img
                                    className="desktop_projects-card-image"
                                    src="/pictures/Portfolio.webp"
                                    alt=""
                                ></img>
                                <p className="desktop_projects-card-title">
                                    WEB PORTFOLIO
                                </p>
                                <div className="desktop_projects-card-info">
                                    <p className="desktop_projects-card-info-title">
                                        INFO
                                    </p>
                                    <p className="projects-card-info-text">
                                        Built from scratch to showcase my work
                                    </p>
                                    <p className="desktop_projects-card-info-title">
                                        STACK
                                    </p>
                                    <p className="desktop_projects-card-info-text">
                                        Blender, React, TypeScript,
                                        React-router, Zustand, GSAP and Vite
                                    </p>
                                </div>
                            </li>
                            <li className="desktop_portfolio_projects-card">
                                <img
                                    className="desktop_projects-card-image"
                                    src="/pictures/Photo.webp"
                                    alt=""
                                ></img>
                                <p className="desktop_projects-card-title">
                                    PHOTOGRAPHY PORTFOLIO
                                </p>
                                <a
                                    className="desktop_projects-card-link"
                                    href="https://www.alexandrejoliet-photo.com/"
                                    target="_blank"
                                >
                                    <button className="desktop_projects-card-button">
                                        <img
                                            src="/icons/link_wght200_48.png"
                                            alt=""
                                        />
                                    </button>
                                </a>
                                <div className="desktop_projects-card-info">
                                    <p className="desktop_projects-card-info-title">
                                        INFO
                                    </p>
                                    <p className="desktop_projects-card-info-text">
                                        Personal project to host and showcase my
                                        photography work
                                    </p>
                                    <p className="desktop_projects-card-info-title">
                                        STACK
                                    </p>
                                    <p className="desktop_projects-card-info-text">
                                        NextJS, ReactJS, TypeScript, Framer
                                        Motion and Cloudinary
                                    </p>
                                </div>
                            </li>
                            <li className="desktop_portfolio_projects-card">
                                <img
                                    className="desktop_projects-card-image"
                                    src="/pictures/TKD.webp"
                                    alt=""
                                ></img>
                                <p className="desktop_projects-card-title">
                                    VENDOME TAEKWONDO CLUB
                                </p>

                                <a
                                    className="desktop_projects-card-link"
                                    href="https://www.vendome-taekwondo.com/"
                                    target="_blank"
                                >
                                    <button className="desktop_projects-card-button">
                                        <img
                                            src="/icons/link_wght200_48.png"
                                            alt=""
                                        />
                                    </button>
                                </a>
                                <div className="desktop_projects-card-info">
                                    <p className="desktop_projects-card-info-title">
                                        INFO
                                    </p>
                                    <p className="desktop_projects-card-info-text">
                                        Creation of a website for a local sports
                                        association to increase its visibility,
                                        share information and recruit new
                                        members
                                    </p>
                                    <p className="desktop_projects-card-info-title">
                                        STACK
                                    </p>
                                    <p className="desktop_projects-card-info-text">
                                        NextJS, ReactJS and TypeScript
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>
            )}
        </>
    );
};

export default DesktopProjects;
