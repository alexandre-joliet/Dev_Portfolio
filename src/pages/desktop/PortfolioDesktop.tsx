import "./PortfolioDesktop.css";
import DesktopHeader from "./desktop_components/DesktopHeader/DesktopHeader";
import DesktopHero from "./desktop_components/DesktopHero/DesktopHero";
import DesktopAbout from "./desktop_components/DesktopAbout/DesktopAbout";
import DesktopActivities from "./desktop_components/DesktopActivities/DesktopActivities";
import DesktopSkills from "./desktop_components/DesktopSkills/DesktopSkills";
import DesktopProjects from "./desktop_components/DesktopProjects/DesktopProjects";
// import DesktopCanvas from "./desktop_components/DesktopCanvas/DesktopCanvas";

const PortfolioDesktop = () => {
    return (
        <>
            <main className="destkop_portfolio_main">
                <div className="desktop_portfolio_container">
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
