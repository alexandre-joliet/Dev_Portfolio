import "./Footer.css";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import useGeneralStore from "../../stores/generalStore";
import useHoverSound from "../Extras/SoundEffects/hoverSound";
import useClickSound from "../Extras/SoundEffects/clickSound";

const Footer = () => {
    //** Logic */
    const { showHeader } = useGeneralStore();
    const [showFooter, setShowFooter] = useState<boolean>(false);
    const playHoverSound = useHoverSound();
    const playClickSound = useClickSound();

    const handleFooterActions = () => {
        playClickSound();
        if (showFooter) {
            gsap.to(".footer_sections-container", {
                duration: 0.4,
                opacity: 0,
                scale: 0,
            });
            setTimeout(() => {
                setShowFooter(false);
            }, 300);
        } else {
            setShowFooter(true);
        }
    };

    // Handle outside click
    const footerRef = useRef<HTMLDivElement>(null);
    const legalRef = useRef<HTMLDivElement>(null);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleClickOutside = (event: any) => {
        if (
            showFooter &&
            footerRef.current &&
            !footerRef.current.contains(event.target) &&
            !legalRef.current?.contains(event.target)
        ) {
            gsap.to(".footer_sections-container", {
                duration: 0.4,
                opacity: 0,
                scale: 0,
            });
            setTimeout(() => {
                setShowFooter(false);
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

    //** Style */
    useEffect(() => {
        if (showHeader) {
            gsap.to(".footer", {
                duration: 2,
                ease: "power1.inOut",
                opacity: 1,
            });
        }
    }, [showHeader]);

    useEffect(() => {
        if (showFooter) {
            gsap.to(".footer_sections-container", {
                duration: 0.4,
                opacity: 1,
                scale: 1,
            });
        }
    }, [showFooter]);

    return (
        <>
            <footer
                ref={footerRef}
                className="footer"
            >
                <button
                    className="footer_button"
                    onMouseEnter={playHoverSound}
                    onClick={handleFooterActions}
                >
                    Legal terms
                </button>
            </footer>

            {showFooter && (
                <div
                    ref={legalRef}
                    className="footer_sections-container"
                >
                    <section className="footer_section">
                        <h2 className="footer_section-subtitle">CREDITS</h2>
                        <p>
                            You'll find below the assets used in this website
                            and not created by its author, Alexandre JOLIET.
                        </p>
                        <ul>
                            <li>
                                Astronaut 3D model by&nbsp;
                                <a
                                    href="https://sketchfab.com/LasquetiSpice"
                                    target="_blank"
                                >
                                    LasquetiSpice
                                </a>
                                &nbsp;under CC 4.0 license
                            </li>
                            <li>
                                Planet texture by&nbsp;
                                <a
                                    href="https://www.solarsystemscope.com/textures/"
                                    target="_blank"
                                >
                                    Solar System Scope
                                </a>
                                &nbsp;under CC 4.0 license
                            </li>
                            <li>
                                "Password Infinity" soundtrack by&nbsp;
                                <a
                                    href="https://pixabay.com/fr/music/beats-password-infinity-123276/"
                                    target="_blank"
                                >
                                    Evgeny_Bardyuzha
                                </a>
                                &nbsp;under Pixabay Content License
                            </li>
                            <li>
                                Phone and computer background picture by&nbsp;
                                <a
                                    href="https://unsplash.com/fr/photos/une-planete-rouge-avec-une-etoile-en-arriere-plan-lH1VONHniMo"
                                    target="_blank"
                                >
                                    Javier Miranda
                                </a>
                                &nbsp;under Unsplash License
                            </li>
                            <li>
                                Sound effects by Mixkit under Mixkit Sound
                                Effects Free License
                            </li>
                        </ul>
                    </section>
                    <section className="footer_section">
                        <h2 className="footer_section-subtitle">EDITOR</h2>
                        <p>
                            This website is edited by Alexandre JOLIET,
                            Developer.
                        </p>
                    </section>
                    <section className="footer_section">
                        <h2 className="footer_section-subtitle">HOSTING</h2>
                        <p>
                            This site is hosted by Vercel Inc. located at 340 S
                            Lemon Ave #4133 Walnut, CA 91789, and can be reached
                            at (559) 288-7060.
                        </p>
                    </section>
                </div>
            )}
        </>
    );
};

export default Footer;
