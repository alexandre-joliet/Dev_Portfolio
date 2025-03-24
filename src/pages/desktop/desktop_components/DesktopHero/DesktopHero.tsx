import "./DesktopHero.css";
import { useEffect } from "react";
import gsap from "gsap";
import useGeneralStore from "../../../../stores/generalStore";
import useIframeStore from "../../../../stores/iframeStore";

const DesktopHero = () => {
    //** Logic */
    const { updateUseLaptop } = useGeneralStore();
    const { showIntro, updateShowIntro, updateShowPage } = useIframeStore();

    // Receive data from parent
    useEffect(() => {
        const handleMessage = (event: MessageEvent) => {
            if (event.data.type === "UPDATE_DATA") {
                // console.log(event);

                // Update Zustand store in iframe
                updateUseLaptop(event.data.payload);
                updateShowIntro(event.data.payload);
            }
        };

        window.addEventListener("message", handleMessage);
        return () => window.removeEventListener("message", handleMessage);
    });

    const handleStartActions = () => {
        gsap.to(".desktop_hero-container", {
            duration: 1,
            opacity: 0,
            delay: 0.3,
        });
        setTimeout(() => {
            updateShowPage("About");
        }, 1250);
    };

    //** Style */

    useEffect(() => {
        if (showIntro) {
            gsap.to(".desktop_hero", { duration: 2, opacity: 1, delay: 3 });
        }
    }, [showIntro]);

    return (
        <>
            {showIntro && (
                <div className="desktop_hero-container">
                    <section className="desktop_hero">
                        <h1 className="desktop_hero-title">HELLO</h1>
                        <h1 className="desktop_hero-title2">TRAVELLER.</h1>
                        <p className="desktop_hero-subtext">Welcome onboard.</p>
                        <p className="desktop_hero-intro-text">
                            Begin your journey and find out more about me and my
                            work.
                        </p>
                        <button
                            className="desktop_hero-button"
                            onClick={handleStartActions}
                        >
                            START
                            <div className="hero-button-disc-primary">
                                <div className="hero-button-disc-top"></div>
                                <div className="hero-button-disc-bottom"></div>
                            </div>
                        </button>
                    </section>
                </div>
            )}
        </>
    );
};

export default DesktopHero;
