import "./MobilleProjects.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import useHoverSound from "../../../../components/Extras/SoundEffects/hoverSound";
import useClickSound from "../../../../components/Extras/SoundEffects/clickSound";

const MobileProjects = () => {
    //** Logic */
    const playHoverSound = useHoverSound();
    const playClickSound = useClickSound();

    //** Style */
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        const scrollTrigger = ScrollTrigger.create({
            trigger: ".mobile_projects-section",
            scroller: ".mobile-content-wrapper",
            start: 2350,
            // markers: true,
            // onEnter: () => console.log("Section entered viewport"),
        });

        gsap.to(".mobile_projects-section", {
            scrollTrigger: scrollTrigger,
            duration: 1,
            opacity: 1,
            filter: "blur(0px)",
            translateX: 0,
        });
    }, []);

    return (
        <>
            <section className="mobile_projects-section">
                <h2 className="mobile_projects-title">PROJECTS</h2>
                <div>
                    <ul className="mobile_projects-card-container">
                        <li className="mobile_projects-card">
                            <img
                                className="mobile_projects-card-image"
                                src="/pictures/Portfolio.webp"
                                alt=""
                            ></img>
                            <p className="mobile_projects-card-title">
                                WEB PORTFOLIO
                            </p>
                            <div className="mobile_projects-card-info">
                                <p className="mobile_projects-card-info-title">
                                    INFO
                                </p>
                                <p className="mobile_projects-card-info-text">
                                    Built from scratch to showcase my work
                                </p>
                                <p className="mobile_projects-card-info-title">
                                    STACK
                                </p>
                                <p className="mobile_projects-card-info-text">
                                    Blender, React, TypeScript, React-router,
                                    Zustand, GSAP and Vite
                                </p>
                                <a
                                    className="mobile_projects-card-link"
                                    href="https://github.com/alexandre-joliet/Dev_Portfolio"
                                    target="_blank"
                                >
                                    <button
                                        className="mobile_projects-card-button"
                                        onMouseEnter={playHoverSound}
                                        onClick={playClickSound}
                                    >
                                        <img
                                            className="mobile_projects-card-icons icon-github"
                                            src="/icons/github.png"
                                            alt=""
                                        />
                                        Repo
                                    </button>
                                </a>
                            </div>
                        </li>
                        <li className="mobile_projects-card">
                            <img
                                className="mobile_projects-card-image"
                                src="/pictures/Photo.webp"
                                alt=""
                            ></img>
                            <p className="mobile_projects-card-title">
                                PHOTOGRAPHY PORTFOLIO
                            </p>
                            <div className="mobile_projects-card-info">
                                <p className="mobile_projects-card-info-title">
                                    INFO
                                </p>
                                <p className="mobile_projects-card-info-text">
                                    Personal project to host and showcase my
                                    photography work
                                </p>
                                <p className="mobile_projects-card-info-title">
                                    STACK
                                </p>
                                <p className="mobile_projects-card-info-text">
                                    NextJS, ReactJS, TypeScript, Framer Motion
                                    and Cloudinary
                                </p>
                                <a
                                    className="mobile_projects-card-link"
                                    href="https://www.alexandrejoliet-photo.com/"
                                    target="_blank"
                                >
                                    <button
                                        className="mobile_projects-card-button"
                                        onMouseEnter={playHoverSound}
                                        onClick={playClickSound}
                                    >
                                        <img
                                            className="mobile_projects-card-icons"
                                            src="/icons/up-arrow.png"
                                            alt=""
                                        />
                                        Live
                                    </button>
                                </a>
                                <a
                                    className="mobile_projects-card-link"
                                    href="https://github.com/alexandre-joliet/Photo_Portfolio"
                                    target="_blank"
                                >
                                    <button
                                        className="mobile_projects-card-button"
                                        onMouseEnter={playHoverSound}
                                        onClick={playClickSound}
                                    >
                                        <img
                                            className="mobile_projects-card-icons icon-github"
                                            src="/icons/github.png"
                                            alt=""
                                        />
                                        Repo
                                    </button>
                                </a>
                            </div>
                        </li>
                        <li className="mobile_projects-card">
                            <img
                                className="mobile_projects-card-image"
                                src="/pictures/TKD.webp"
                                alt=""
                            ></img>
                            <p className="mobile_projects-card-title">
                                VENDOME TAEKWONDO CLUB
                            </p>
                            <div className="mobile_projects-card-info">
                                <p className="mobile_projects-card-info-title">
                                    INFO
                                </p>
                                <p className="mobile_projects-card-info-text">
                                    Creation of a website for a local sports
                                    association to increase its visibility,
                                    share information and recruit new members
                                </p>
                                <p className="mobile_projects-card-info-title">
                                    STACK
                                </p>
                                <p className="mobile_projects-card-info-text">
                                    NextJS, ReactJS and TypeScript
                                </p>
                                <a
                                    className="mobile_projects-card-link"
                                    href="https://www.vendome-taekwondo.com/"
                                    target="_blank"
                                >
                                    <button
                                        className="mobile_projects-card-button"
                                        onMouseEnter={playHoverSound}
                                        onClick={playClickSound}
                                    >
                                        <img
                                            className="mobile_projects-card-icons"
                                            src="/icons/up-arrow.png"
                                            alt=""
                                        />
                                        Live
                                    </button>
                                </a>
                                <a
                                    className="mobile_projects-card-link"
                                    href="https://github.com/alexandre-joliet/Vendome_TKD"
                                    target="_blank"
                                >
                                    <button
                                        className="mobile_projects-card-button"
                                        onMouseEnter={playHoverSound}
                                        onClick={playClickSound}
                                    >
                                        <img
                                            className="mobile_projects-card-icons icon-github"
                                            src="/icons/github.png"
                                            alt=""
                                        />
                                        Repo
                                    </button>
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    );
};

export default MobileProjects;
