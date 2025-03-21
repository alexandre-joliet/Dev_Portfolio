import "./MobileHero.css";
import { useEffect } from "react";
import gsap from "gsap";
import useIframeStore from "../../../../stores/iframeStore";

const MobileHero = () => {
    //** Logic */
    const { showIntro, updateShowIntro } = useIframeStore();

    const handleIntroButton = () => {
        gsap.to(".mobile_hero_section", {
            duration: 1,
            opacity: 0,
            delay: 0.3,
        });

        setTimeout(() => {
            updateShowIntro(false);
        }, 1500);
    };

    //** Style */
    // Intro
    useEffect(() => {
        if (showIntro) {
            gsap.to(".mobile_hero_section", {
                duration: 2,
                opacity: 1,
                delay: 3,
            });
        }
    }, [showIntro]);

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
