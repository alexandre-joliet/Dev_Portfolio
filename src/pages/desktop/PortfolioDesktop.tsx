import "./PortfolioDesktop.css";
import DesktopHeader from "./desktop_components/DesktopHeader/DesktopHeader";
import DesktopHero from "./desktop_components/DesktopHero/DesktopHero";
import DesktopAbout from "./desktop_components/DesktopAbout/DesktopAbout";
import DesktopActivities from "./desktop_components/DesktopActivities/DesktopActivities";
import DesktopSkills from "./desktop_components/DesktopSkills/DesktopSkills";
import DesktopProjects from "./desktop_components/DesktopProjects/DesktopProjects";
import { useEffect, useRef } from "react";
import useGeneralStore from "../../stores/generalStore";
import useIframeStore from "../../stores/iframeStore";
// import DesktopCanvas from "./desktop_components/DesktopCanvas/DesktopCanvas";

const PortfolioDesktop = () => {
    const { updateUseLaptop, updatePlayAmbientSound } = useGeneralStore();
    const { updateShowDesktopIntro, showActivities, showSkills, showProjects } =
        useIframeStore();

    // Receive data from parent
    useEffect(() => {
        const handleMessage = (event: MessageEvent) => {
            // console.log(event.data.payload);
            if (
                event.data.payload?.type === "UPDATE_DATA" &&
                "laptop" in event.data.payload
            ) {
                // Update Zustand store in iframe
                updateUseLaptop(event.data.payload.laptop);
                updateShowDesktopIntro(event.data.payload.laptop);
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

    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (showActivities || showSkills || showProjects)
            containerRef.current?.scrollTo({ top: 0, behavior: "smooth" });
    }, [showActivities, showSkills, showProjects]);

    return (
        <>
            <main className="destkop_portfolio_main">
                <div
                    ref={containerRef}
                    className="desktop_portfolio_container"
                >
                    <DesktopHeader />
                    <DesktopHero />
                    {/* <DesktopCanvas /> */}
                    <DesktopAbout />
                    <DesktopActivities />
                    <DesktopSkills />
                    <DesktopProjects />
                </div>
            </main>
        </>
    );
};

export default PortfolioDesktop;
