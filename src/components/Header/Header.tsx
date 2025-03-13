import gsap from "gsap";
import useGeneralStore from "../../stores/generalStore";
import "./Header.css";
import { useEffect, useRef, useState } from "react";

const Header = () => {
    //** Logic */
    const { showHeader, playAmbientSound, updatePlayAmbientSound } =
        useGeneralStore();
    const [showContact, setShowContact] = useState(false);

    useEffect(() => {
        if (showHeader) {
            gsap.to(".header", {
                duration: 2,
                ease: "power1.inOut",
                opacity: 1,
            });
        }
    }, [showHeader]);

    // Contact menu
    const handleContactActions = () => {
        if (showContact) {
            gsap.to(".header_contact-menu-container", {
                duration: 0.3,
                opacity: 0,
                scale: 0,
            });
            setTimeout(() => {
                setShowContact(false);
            }, 300);
        } else {
            setShowContact(true);
        }
    };

    useEffect(() => {
        if (showContact) {
            gsap.to(".header_contact-menu-container", {
                duration: 0.3,
                opacity: 1,
                scale: 1,
            });
        }
    }, [showContact]);

    // Handle outside click
    const contactRef = useRef<HTMLButtonElement>(null);
    const contactMenuRef = useRef<HTMLDivElement>(null);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleClickOutside = (event: any) => {
        if (
            showContact &&
            contactRef.current &&
            !contactRef.current.contains(event.target) &&
            !contactMenuRef.current?.contains(event.target)
        ) {
            gsap.to(".header_contact-menu-container", {
                duration: 0.3,
                opacity: 0,
                scale: 0,
            });
            setTimeout(() => {
                setShowContact(false);
            }, 300);

            // setShowFooter(false);
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    });

    // Sound
    const handleSoundOptions = () => {
        if (playAmbientSound) {
            updatePlayAmbientSound(false);
        } else if (!playAmbientSound) {
            updatePlayAmbientSound(true);
        }
    };

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
                    left: playAmbientSound ? "50%" : "-35%",
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

                    <button
                        ref={contactRef}
                        className="header_buttons button-mail"
                        onClick={handleContactActions}
                    >
                        <img
                            src="/icons/mail_wght400_48.png"
                            alt=""
                            className="header_icons icon-mail"
                        ></img>
                        {/* <p className="mail-text">CONTACT</p> */}
                    </button>
                </div>

                {showContact && (
                    <div
                        ref={contactMenuRef}
                        className="header_contact-menu-container"
                    >
                        <div className="contact-menu-item">
                            <a
                                href="mailto: alexandre.joliet@gmail.com"
                                target="_blank"
                                className="header_link"
                            >
                                <button className="header_buttons">
                                    <img
                                        src="/icons/mail_wght400_48.png"
                                        alt=""
                                        className="icon_contact-menu"
                                    ></img>
                                </button>
                            </a>
                            {/* <p className="">Mail</p> */}
                        </div>
                        <div className="contact-menu-item">
                            <a
                                href="https://www.linkedin.com/in/alexandrejoliet/"
                                target="_blank"
                                className="header_link"
                            >
                                <button className="header_buttons">
                                    <img
                                        src="/icons/linkedin.png"
                                        alt=""
                                        className="icon_contact-menu"
                                    ></img>
                                </button>
                            </a>
                            {/* <p className="">Linkedin</p> */}
                        </div>
                        <div className="contact-menu-item">
                            <a
                                href="https://github.com/alexandre-joliet"
                                target="_blank"
                                className="header_link"
                            >
                                <button className="header_buttons">
                                    <svg
                                        className="icon_contact-menu"
                                        role="img"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <title>GitHub</title>
                                        <path
                                            d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                                            fill="white"
                                        />
                                    </svg>
                                </button>
                            </a>
                            {/* <p className="">Github</p> */}
                        </div>
                    </div>
                )}
            </header>
            {/* </section> */}
        </>
    );
};

export default Header;
