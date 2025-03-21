import "./PortfolioMobile.css";
import { useEffect } from "react";
import gsap from "gsap";
import useGeneralStore from "../../stores/generalStore";
import useIframeStore from "../../stores/iframeStore";
import MobileHero from "./mobile_components/MobileHero/MobileHero";
import MobileAbout from "./mobile_components/MobileAbout/MobileAbout";
import MobileActivities from "./mobile_components/MobileActivities/MobileActivities";
import MobileSkills from "./mobile_components/MobileSkills/MobileSkills";
import MobileProjects from "./mobile_components/MobileProjects/MobileProjects";

const PortfolioMobile = () => {
    //** Logic */
    const { updateUsePhone } = useGeneralStore();
    const { showIntro } = useIframeStore();

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
    useEffect(() => {
        if (!showIntro) {
            gsap.to(".mobile_background", {
                duration: 2,
                backgroundColor: "rgba(0, 0, 0, 0.5)",
            });
        }
    }, [showIntro]);

    return (
        <>
            <main className="mobile_portfolio_main">
                <div className="mobile_background"></div>
                {showIntro && <MobileHero />}
                {!showIntro && (
                    <div className="mobile-content-wrapper">
                        <MobileAbout />
                        <MobileActivities />
                        <MobileSkills />
                        <MobileProjects />
                    </div>
                )}
            </main>
        </>
    );
};

export default PortfolioMobile;
