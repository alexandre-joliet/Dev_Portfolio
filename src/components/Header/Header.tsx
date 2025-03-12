import gsap from "gsap";
import useGeneralStore from "../../stores/generalStore";
import "./Header.css";
import { useEffect } from "react";

const Header = () => {
    //** Logic */
    const { showHeader, playAmbientSound, updatePlayAmbientSound } =
        useGeneralStore();

    const handleSoundOptions = () => {
        if (playAmbientSound) {
            updatePlayAmbientSound(false);
        } else if (!playAmbientSound) {
            updatePlayAmbientSound(true);
        }
    };

    useEffect(() => {
        if (showHeader) {
            gsap.to(".header", {
                duration: 2,
                ease: "power1.inOut",
                opacity: 1,
            });
        }
    }, [showHeader]);

    useEffect(() => {
        const soundTimeline = gsap.timeline();

        soundTimeline
            .to(".button-sound .icon-sound-on", {
                duration: 0,
                ease: "none",
                left: playAmbientSound ? "50%" : "-35%",
            })
            .to(
                ".button-sound .icon-sound-off",
                {
                    duration: 0,
                    ease: "none",
                    left: playAmbientSound ? "50%" : "-32%",
                },
                0
            );
    }, [playAmbientSound]);

    return (
        <>
            {/* <section className="overlay-header"> */}
            <header className="header">
                <div className="header_main-infos-container">
                    <h1 className="header_main-name">ALEXANDRE JOLIET</h1>
                    <h2 className="header_main-position">Creative developer</h2>
                </div>
                <div className="header_icons-container">
                    <button
                        className="header_buttons button-sound"
                        onClick={handleSoundOptions}
                    >
                        <img
                            // src={
                            //     playAmbientSound
                            //         ? "/icons/volume_on_wght400_48.png"
                            //         : "/icons/volume_off_wght400_48.png"
                            // }
                            src="/icons/volume_on_wght400_48.png"
                            alt=""
                            className="header_icons icon-sound-on"
                        ></img>
                        <img
                            src="/icons/volume_off_wght400_48.png"
                            alt=""
                            className="header_icons icon-sound-off"
                        ></img>
                    </button>

                    <button className="header_buttons button-mail">
                        <a
                            href="mailto: alexandre.joliet@gmail.com"
                            target="_blank"
                            className="header_link"
                        >
                            <img
                                src="/icons/mail_wght400_48.png"
                                alt=""
                                className="header_icons icon-mail"
                            ></img>
                            <p className="mail-text">CONTACT</p>
                        </a>
                    </button>
                </div>
            </header>
            {/* </section> */}
        </>
    );
};

export default Header;
