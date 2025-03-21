import { useEffect } from "react";
import useIframeStore from "../../../../stores/iframeStore";
import "./DesktopHeader.css";
import gsap from "gsap";

const DesktopHeader = () => {
    //** Logic */
    const {
        showIntro,
        showAbout,
        showActivities,
        showProjects,
        showSkills,
        updateShowPage,
        updateShowAnimation,
    } = useIframeStore();

    const handleHeaderButtonAbout = () => {
        updateShowAnimation("Exit");
        setTimeout(() => {
            updateShowPage("About");
        }, 1000);
    };

    const handleHeaderButtonActivities = () => {
        updateShowAnimation("Exit");
        setTimeout(() => {
            updateShowPage("Activities");
        }, 1000);
    };

    const handleHeaderButtonProjects = () => {
        updateShowAnimation("Exit");
        setTimeout(() => {
            updateShowPage("Projects");
        }, 1000);
    };

    const handleHeaderButtonSkills = () => {
        updateShowAnimation("Exit");
        setTimeout(() => {
            updateShowPage("Skills");
        }, 1000);
    };

    //** Syle */
    useEffect(() => {
        if (!showIntro) {
            gsap.to(".desktop_header", { duration: 2, opacity: 1, delay: 0.5 });
        }
    }, [showIntro]);

    useEffect(() => {
        if (!showIntro) {
            if (showAbout) {
                gsap.to(".button-about", { color: "var(--color-accent" });
            } else {
                gsap.to(".button-about", { color: "" });
            }

            if (showActivities) {
                gsap.to(".button-activities", { color: "var(--color-accent" });
            } else {
                gsap.to(".button-activities", { color: "" });
            }

            if (showProjects) {
                gsap.to(".button-projects", { color: "var(--color-accent" });
            } else {
                gsap.to(".button-projects", { color: "" });
            }

            if (showSkills) {
                gsap.to(".button-skills", { color: "var(--color-accent" });
            } else {
                gsap.to(".button-skills", { color: "" });
            }
        }
    }, [showIntro, showAbout, showActivities, showProjects, showSkills]);

    return (
        <>
            {!showIntro && (
                <header className="desktop_header">
                    <nav className="desktop_nav">
                        <button
                            className="desktop_nav-button button-about"
                            // onClick={() => updateShowPage("About")}
                            onClick={handleHeaderButtonAbout}
                        >
                            ABOUT
                        </button>
                        <button
                            className="desktop_nav-button button-activities"
                            // onClick={() => updateShowPage("Activities")}
                            onClick={handleHeaderButtonActivities}
                        >
                            ACTIVITIES
                        </button>
                        <button
                            className="desktop_nav-button button-skills"
                            onClick={handleHeaderButtonSkills}
                        >
                            SKILLS
                        </button>
                        <button
                            className="desktop_nav-button button-projects"
                            onClick={handleHeaderButtonProjects}
                        >
                            PROJECTS
                        </button>
                    </nav>
                </header>
            )}
        </>
    );
};

export default DesktopHeader;
