import "./DesktopProjects.css";
import gsap from "gsap";
import { useEffect } from "react";
import useIframeStore from "../../../../stores/iframeStore";
import useHoverSound from "../../../../components/Extras/SoundEffects/hoverSound";
import useClickSound from "../../../../components/Extras/SoundEffects/clickSound";

const DesktopProjects = () => {
    //** Logic */
    const { showProjects, showExitAnimation, updateShowAnimation } =
        useIframeStore();
    const playHoverSound = useHoverSound();
    const playClickSound = useClickSound();

    //** Style */
    useEffect(() => {
        if (showProjects) {
            gsap.to(".desktop_projects-section", {
                duration: 2,
                opacity: 1,
                // filter: "blur(0px)",
            });
            gsap.to(".desktop_projects-section", {
                duration: 1,
                filter: "blur(0px)",
            });
        }
    }, [showProjects]);

    useEffect(() => {
        if (showExitAnimation) {
            gsap.to(".desktop_projects-section", {
                duration: 1,
                opacity: 0,
            });
            updateShowAnimation("Enter");
        }
    }, [showExitAnimation, updateShowAnimation]);

    return (
        <>
            {showProjects && (
                <section className="desktop_projects-section">
                    <h2 className="desktop_projects-title">PROJECTS</h2>
                    <div className="desktop_projects-content-wrapper">
                        <ul className="desktop_projects-cards-container">
                            <li className="desktop_projects-card">
                                <div className="desktop_projects-card-textcontent">
                                    <h3 className="desktop_projects-card-title">
                                        WEB PORTFOLIO
                                    </h3>
                                    <div className="desktop_projects-card-info">
                                        <h4 className="desktop_projects-card-info-title">
                                            INFO
                                        </h4>
                                        <p className="desktop_projects-card-info-text">
                                            Built from scratch to showcase my
                                            work
                                        </p>
                                        <h4 className="desktop_projects-card-info-title">
                                            STACK
                                        </h4>
                                        <p className="desktop_projects-card-info-text">
                                            Blender, React, TypeScript,
                                            Three.js, React-router, Zustand,
                                            GSAP and Vite
                                        </p>
                                        <a
                                            className="desktop_projects-card-link"
                                            href="https://github.com/alexandre-joliet/Dev_Portfolio"
                                            target="_blank"
                                        >
                                            <button
                                                className="desktop_projects-card-button"
                                                onMouseEnter={playHoverSound}
                                                onClick={playClickSound}
                                            >
                                                <img
                                                    className="desktop_projects-card-icons icon-github"
                                                    src="/icons/github.png"
                                                    alt="Open Github repository"
                                                />
                                                Repo
                                            </button>
                                        </a>
                                    </div>
                                </div>
                                <img
                                    className="desktop_projects-card-image"
                                    src="/pictures/Portfolio.webp"
                                    alt=""
                                ></img>
                            </li>
                            <li className="desktop_projects-card">
                                <div className="desktop_projects-card-textcontent">
                                    <h3 className="desktop_projects-card-title">
                                        PHOTOGRAPHY PORTFOLIO
                                    </h3>

                                    <div className="desktop_projects-card-info">
                                        <h4 className="desktop_projects-card-info-title">
                                            INFO
                                        </h4>
                                        <p className="desktop_projects-card-info-text">
                                            Personal project to host and
                                            showcase my photography work
                                        </p>
                                        <h4 className="desktop_projects-card-info-title">
                                            STACK
                                        </h4>
                                        <p className="desktop_projects-card-info-text">
                                            NextJS, ReactJS, TypeScript, Framer
                                            Motion and Cloudinary
                                        </p>
                                        <a
                                            className="desktop_projects-card-link"
                                            href="https://www.alexandrejoliet-photo.com/"
                                            target="_blank"
                                        >
                                            <button
                                                className="desktop_projects-card-button"
                                                onMouseEnter={playHoverSound}
                                                onClick={playClickSound}
                                            >
                                                <img
                                                    className="desktop_projects-card-icons"
                                                    src="/icons/up-arrow.png"
                                                    alt="Open website"
                                                />
                                                Live
                                            </button>
                                        </a>
                                        <a
                                            className="desktop_projects-card-link"
                                            href="https://github.com/alexandre-joliet/Photo_Portfolio"
                                            target="_blank"
                                        >
                                            <button
                                                className="desktop_projects-card-button"
                                                onMouseEnter={playHoverSound}
                                                onClick={playClickSound}
                                            >
                                                <img
                                                    className="desktop_projects-card-icons icon-github"
                                                    src="/icons/github.png"
                                                    alt="Open Github repository"
                                                />
                                                Repo
                                            </button>
                                        </a>
                                    </div>
                                </div>
                                <img
                                    className="desktop_projects-card-image"
                                    src="/pictures/Photo.webp"
                                    alt=""
                                ></img>
                            </li>
                            <li className="desktop_projects-card">
                                <div className="desktop_projects-card-textcontent">
                                    <h3 className="desktop_projects-card-title">
                                        VENDOME TAEKWONDO CLUB
                                    </h3>
                                    <div className="desktop_projects-card-info">
                                        <h4 className="desktop_projects-card-info-title">
                                            INFO
                                        </h4>
                                        <p className="desktop_projects-card-info-text">
                                            Creation of a website for a local
                                            sports association to increase its
                                            visibility, share information and
                                            recruit new members
                                        </p>
                                        <h4 className="desktop_projects-card-info-title">
                                            STACK
                                        </h4>
                                        <p className="desktop_projects-card-info-text">
                                            NextJS, ReactJS and TypeScript
                                        </p>
                                        <a
                                            className="desktop_projects-card-link"
                                            href="https://www.vendome-taekwondo.com/"
                                            target="_blank"
                                        >
                                            <button
                                                className="desktop_projects-card-button"
                                                onMouseEnter={playHoverSound}
                                                onClick={playClickSound}
                                            >
                                                <img
                                                    className="desktop_projects-card-icons"
                                                    src="/icons/up-arrow.png"
                                                    alt="Open website"
                                                />
                                                Live
                                            </button>
                                        </a>
                                        <a
                                            className="desktop_projects-card-link"
                                            href="https://github.com/alexandre-joliet/Vendome_TKD"
                                            target="_blank"
                                        >
                                            <button
                                                className="desktop_projects-card-button"
                                                onMouseEnter={playHoverSound}
                                                onClick={playClickSound}
                                            >
                                                <img
                                                    className="desktop_projects-card-icons icon-github"
                                                    src="/icons/github.png"
                                                    alt="Open Github repository"
                                                />
                                                Repo
                                            </button>
                                        </a>
                                    </div>
                                </div>
                                <img
                                    className="desktop_projects-card-image"
                                    src="/pictures/TKD.webp"
                                    alt=""
                                ></img>
                            </li>
                        </ul>
                    </div>
                </section>
            )}
        </>
    );
};

export default DesktopProjects;
