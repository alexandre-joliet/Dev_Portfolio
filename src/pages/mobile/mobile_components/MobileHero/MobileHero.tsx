import "./MobileHero.css";
import { useEffect } from "react";
import gsap from "gsap";
import useIframeStore from "../../../../stores/iframeStore";
import useHoverSound from "../../../../components/Extras/SoundEffects/hoverSound";
import useClickSound from "../../../../components/Extras/SoundEffects/clickSound";

const MobileHero = () => {
    //** Logic */
    const { showMobileIntro, updateShowMobileIntro } = useIframeStore();
    const playHoverSound = useHoverSound();
    const playClickSound = useClickSound();

    const handleIntroButton = () => {
        playClickSound();
        gsap.to(".mobile_hero_section", {
            duration: 1,
            opacity: 0,
            delay: 0.3,
        });

        setTimeout(() => {
            updateShowMobileIntro(false);
        }, 1500);
    };

    //** Style */
    // Intro
    useEffect(() => {
        if (showMobileIntro) {
            gsap.to(".mobile_hero_section", {
                duration: 2,
                opacity: 1,
                delay: 3,
            });
        }
    }, [showMobileIntro]);

    return (
        <>
            <section className="mobile_hero_section">
                <h1 className="mobile_hero-title">HELLO</h1>
                <h1 className="mobile_hero-title2">TRAVELLER</h1>
                <p className="mobile_hero-subtext">Welcome onboard.</p>
                <p className="mobile_hero-text">
                    Begin your journey and find out more about me and my work.
                </p>

                <button
                    className="mobile_hero-button"
                    onMouseEnter={playHoverSound}
                    onClick={handleIntroButton}
                >
                    START
                    <div className="hero-button-disc-primary">
                        <div className="hero-button-disc-top"></div>
                        <div className="hero-button-disc-bottom"></div>
                    </div>
                </button>
            </section>
        </>
    );
};

export default MobileHero;
