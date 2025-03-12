import { useEffect } from "react";
import "./PortfolioMobile.css";
import gsap from "gsap";
import useGeneralStore from "../../stores/generalStore";
import useIframeStore from "../../stores/iframeStore";
import Content from "../pages_components/Content";

const PortfolioMobile = () => {
    //** Logic */
    const { usePhone, updateUsePhone } = useGeneralStore();
    const { showIntro, updateShowIntro } = useIframeStore();

    // Receive data from parent
    useEffect(() => {
        const handleMessage = (event: MessageEvent) => {
            if (event.data.type === "UPDATE_DATA") {
                // console.log(event);
                updateUsePhone(event.data.payload); // Update Zustand store in iframe
            }
        };

        window.addEventListener("message", handleMessage);
        return () => window.removeEventListener("message", handleMessage);
    });

    //** Style */
    // Intro
    useEffect(() => {
        const titlePhoneTimeline = gsap.timeline({ paused: true, delay: 3 });
        titlePhoneTimeline.to(".phone_portfolio_main-title", {
            duration: 1,
            width: "90%",
        });
        titlePhoneTimeline.to(".phone_portfolio_main-title2", {
            duration: 1,
            width: "90%",
            delay: -0.5,
        });
        titlePhoneTimeline.to(".svg1", {
            attr: { y2: 175 },
            duration: 2,
        });
        titlePhoneTimeline.to(".svg2", { attr: { x2: 98 }, duration: 2 }, "<");
        titlePhoneTimeline.to(
            ".phone_portfolio_main-subtext",
            {
                duration: 1,
                opacity: 1,
            },
            "<"
        );
        titlePhoneTimeline.to(
            ".phone_portfolio-intro-text, .phone_portfolio-intro-button",
            {
                duration: 1,
                opacity: 1,
            }
        );

        if (usePhone) {
            titlePhoneTimeline.play();
        }
    }, [usePhone, updateShowIntro]);

    const handleIntroButton = () => {
        gsap.to(
            ".phone_portfolio_main-section, .phone_portfolio-intro-section, .phone_portfolio_main-svg-container",
            {
                duration: 1,
                opacity: 0,
            }
        );

        setTimeout(() => {
            updateShowIntro(false);
        }, 1000);
    };

    return (
        <>
            <div className="portfolio_main-wrapper">
                {showIntro && (
                    <>
                        <section className="phone_portfolio_main-section">
                            <h1 className="phone_portfolio_main-title">
                                HELLO
                            </h1>
                            <h1 className="phone_portfolio_main-title2">
                                TRAVELLER
                            </h1>
                            <p className="phone_portfolio_main-subtext">
                                Welcome onboard.
                            </p>
                        </section>
                        <div className="phone_portfolio_main-svg-container">
                            <div className="phone_main-svg_wrapper">
                                <svg
                                    viewBox="0 0 100 175"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="phone_main-svg1"
                                >
                                    <line
                                        x1="5.8"
                                        y1="0"
                                        x2="5.8"
                                        y2="0"
                                        className="svg1"
                                    />
                                </svg>
                                <svg
                                    viewBox="0 0 100 100"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="phone_main-svg2"
                                >
                                    <line
                                        x1="0"
                                        y1="38"
                                        x2="0"
                                        y2="38"
                                        className="svg2"
                                    />
                                </svg>
                            </div>
                        </div>

                        <section className="phone_portfolio-intro-section">
                            <p className="phone_portfolio-intro-text">
                                I'm Alex, a 37-year-old passionate developer
                                based in France.
                            </p>
                            <p className="phone_portfolio-intro-text">
                                Click the button below to begin your journey and
                                find out more about me and my work.
                            </p>
                            <button
                                className="phone_portfolio-intro-button"
                                onClick={handleIntroButton}
                            >
                                START
                            </button>
                        </section>
                    </>
                )}

                {!showIntro && <Content></Content>}
            </div>
        </>
    );
};

export default PortfolioMobile;
