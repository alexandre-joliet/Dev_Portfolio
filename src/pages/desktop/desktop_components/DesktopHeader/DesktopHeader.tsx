import "./DesktopHeader.css";
import { useEffect } from "react";
import gsap from "gsap";
import useIframeStore from "../../../../stores/iframeStore";
import useHoverSound from "../../../../components/Extras/SoundEffects/hoverSound";
import useClickSound from "../../../../components/Extras/SoundEffects/clickSound";

const DesktopHeader = () => {
    //** Logic */
    const {
        showDesktopIntro,
        showAbout,
        showActivities,
        showProjects,
        showSkills,
        updateShowPage,
        updateShowAnimation,
    } = useIframeStore();
    const playHoverSound = useHoverSound();
    const playClickSound = useClickSound();

    const handleHeaderButtonAbout = () => {
        playClickSound();
        updateShowAnimation("Exit");
        setTimeout(() => {
            updateShowPage("About");
        }, 1000);
    };

    const handleHeaderButtonActivities = () => {
        playClickSound();
        updateShowAnimation("Exit");
        setTimeout(() => {
            updateShowPage("Activities");
        }, 1000);
    };

    const handleHeaderButtonProjects = () => {
        playClickSound();
        updateShowAnimation("Exit");
        setTimeout(() => {
            updateShowPage("Projects");
        }, 1000);
    };

    const handleHeaderButtonSkills = () => {
        playClickSound();
        updateShowAnimation("Exit");
        setTimeout(() => {
            updateShowPage("Skills");
        }, 1000);
    };

    //** Syle */
    useEffect(() => {
        if (!showDesktopIntro) {
            gsap.to(".desktop_header", { duration: 2, opacity: 1, delay: 0.5 });
        }
    }, [showDesktopIntro]);

    useEffect(() => {
        if (!showDesktopIntro) {
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
    }, [showDesktopIntro, showAbout, showActivities, showProjects, showSkills]);

    return (
        <>
            {!showDesktopIntro && (
                <header className="desktop_header">
                    <nav className="desktop_nav">
                        <button
                            className="desktop_nav-button button-about"
                            onMouseEnter={playHoverSound}
                            onClick={handleHeaderButtonAbout}
                        >
                            ABOUT
                        </button>
                        <button
                            className="desktop_nav-button button-activities"
                            onMouseEnter={playHoverSound}
                            onClick={handleHeaderButtonActivities}
                        >
                            ACTIVITIES
                        </button>
                        <button
                            className="desktop_nav-button button-skills"
                            onMouseEnter={playHoverSound}
                            onClick={handleHeaderButtonSkills}
                        >
                            SKILLS
                        </button>
                        <button
                            className="desktop_nav-button button-projects"
                            onMouseEnter={playHoverSound}
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
