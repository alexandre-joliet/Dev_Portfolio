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
    const { updateUsePhone, updatePlayAmbientSound } = useGeneralStore();
    const { showMobileIntro } = useIframeStore();

    // Receive data from parent
    useEffect(() => {
        const handleMessage = (event: MessageEvent) => {
            // console.log(event.data.payload);
            if (
                event.data.payload?.type === "UPDATE_DATA" &&
                "phone" in event.data.payload
            ) {
                // Update Zustand store in iframe
                updateUsePhone(event.data.payload.phone);
                updatePlayAmbientSound(event.data.payload.phone);
            }

            if (
                event.data.payload?.type === "UPDATE_DATA" &&
                "sound" in event.data.payload
            ) {
                // Update Zustand store in iframe
                updatePlayAmbientSound(event.data.payload.sound);
            }
        };

        window.addEventListener("message", handleMessage);
        return () => window.removeEventListener("message", handleMessage);
    });

    //** Style */
    useEffect(() => {
        if (!showMobileIntro) {
            gsap.to(".mobile_background", {
                duration: 2,
                backgroundColor: "rgba(0, 0, 0, 0.6)",
            });
        }
    }, [showMobileIntro]);

    return (
        <>
            <main className="mobile_portfolio_main">
                <div className="mobile_background"></div>
                {showMobileIntro && <MobileHero />}
                {!showMobileIntro && (
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
