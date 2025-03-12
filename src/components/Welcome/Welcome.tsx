import "./Welcome.css";
import useGeneralStore from "../../stores/generalStore";
import { useEffect } from "react";
import gsap from "gsap";

const Welcome = () => {
    const { showWelcome, updateShowWelcome, hasClickedCameraMenu } =
        useGeneralStore();

    useEffect(() => {
        if (showWelcome) {
            gsap.to(".welcome_container", {
                duration: 2,
                ease: "power2.inOut",
                opacity: 1,
                delay: 1,
            });
        }

        if (hasClickedCameraMenu) {
            gsap.to(".welcome_container", {
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
            <div className="welcome_container">
                {/* <img
                    src="./icons/arrow_up.png"
                    alt=""
                    className="welcome_icon-arrow up"
                ></img> */}
                <p className="welcome_title">
                    SELECT YOUR{" "}
                    <span className="welcome_text-accentuation">DEVICE</span>
                </p>
                <p className="welcome_text">
                    Click on the models or use the menu below. For{" "}
                    <span className="welcome_text-accentuation">tablets</span>,
                    please choose the phone.
                </p>
                {/* <img
                    src="./icons/arrow_up.png"
                    alt=""
                    className="welcome_icon-arrow down"
                ></img> */}
            </div>
        </>
    );
};

export default Welcome;
