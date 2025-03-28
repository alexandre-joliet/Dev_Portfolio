import { useEffect } from "react";
import { useNavigate } from "react-router";
import Bowser from "bowser";
import useGeneralStore from "../stores/generalStore";
import Experience from "../components/Experience/Experience";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function Home() {
    //** Logic */
    const { showHeader } = useGeneralStore();

    // Redirection
    const navigate = useNavigate();
    const browser = Bowser.getParser(window.navigator.userAgent);

    useEffect(() => {
        // console.log(browser);

        // iPhone
        if (browser.getOS().name === "iOS") {
            navigate("/portfolio-mobile");
        }

        // iPad
        if (
            (browser.getPlatform().type === "tablet" &&
                browser.getOS().name === "macOS") ||
            (browser.getOS().name === "macOS" && navigator.maxTouchPoints > 1)
        ) {
            navigate("/portfolio-mobile");
        }

        // Safari on macOS
        if (
            browser.getOS().name === "macOS" &&
            browser.getBrowser().name === "Safari"
        ) {
            navigate("/portfolio-desktop");
        }
    }, [browser, navigate]);

    return (
        <>
            <main className="main">
                {showHeader && <Header></Header>}
                <Experience></Experience>
                {showHeader && <Footer></Footer>}
            </main>
        </>
    );
}

export default Home;
