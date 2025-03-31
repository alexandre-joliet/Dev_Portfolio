import "./Welcome.css";
import { useEffect } from "react";
import gsap from "gsap";
import useGeneralStore from "../../stores/generalStore";
import useHoverSound from "../Extras/SoundEffects/hoverSound";
import useClickSound from "../Extras/SoundEffects/clickSound";

const Welcome = () => {
    //** Logic */
    const {
        showWelcome,
        updateShowWelcome,
        hasClickedCameraMenu,
        updateHasClickedCameraMenu,
    } = useGeneralStore();
    const playHoverSound = useHoverSound();
    const playClickSound = useClickSound();

    const handleWelcomeButtonToogle = () => {
        playClickSound();
        updateHasClickedCameraMenu(true);
    };

    //** Style */
    useEffect(() => {
        if (showWelcome) {
            gsap.to(".welcome_container", {
                duration: 2,
                ease: "power2.inOut",
                opacity: 1,
                delay: 2.5,
            });
            gsap.to(".welcome_background", {
                duration: 2,
                opacity: 1,
                delay: 2.5,
            });
        }

        if (hasClickedCameraMenu) {
            gsap.to(".welcome_container", {
                duration: 1,
                opacity: 0,
                delay: 0.3,
            });
            gsap.to(".welcome_background", {
                duration: 1,
                opacity: 0,
                delay: 0.3,
            });
            setTimeout(() => {
                updateShowWelcome(false);
            }, 1000);
        }
    }, [showWelcome, hasClickedCameraMenu, updateShowWelcome]);

    return (
        <>
            <div className="welcome_background"></div>
            <section className="welcome_container">
                <p className="welcome_title">
                    SELECT YOUR{" "}
                    <span className="welcome_text-accentuation">DEVICE</span>
                </p>
                <p className="welcome_text">
                    Click on the phone or the computer, or use the menu below to
                    navigate between them. For{" "}
                    <span className="welcome_text-accentuation">tablets</span>,
                    please choose the phone. When ready, click the button below
                    to continue.
                </p>

                <button
                    className="welcome_button"
                    onMouseEnter={playHoverSound}
                    onClick={handleWelcomeButtonToogle}
                >
                    OK
                </button>
            </section>
        </>
    );
};

export default Welcome;
