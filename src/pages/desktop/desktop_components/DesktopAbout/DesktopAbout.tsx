import "./DesktopAbout.css";
import gsap from "gsap";
import { useEffect } from "react";
import useIframeStore from "../../../../stores/iframeStore";

const DesktopAbout = () => {
    //** Logic */
    const { showAbout, showExitAnimation, updateShowAnimation } =
        useIframeStore();

    //** Style */
    useEffect(() => {
        if (showAbout) {
            gsap.to(".desktop_about_section", {
                duration: 2,
                opacity: 1,
                // filter: "blur(0px)",
            });
            gsap.to(".desktop_about_section", {
                duration: 1,
                filter: "blur(0px)",
            });
        }
    }, [showAbout]);

    useEffect(() => {
        console.log(showExitAnimation);

        if (showExitAnimation) {
            gsap.to(".desktop_about_section", { duration: 1, opacity: 0 });
            updateShowAnimation("Enter");
        }
    }, [showExitAnimation, updateShowAnimation]);

    return (
        <>
            {showAbout && (
                <section className="desktop_about_section">
                    <h2 className="desktop_about_section-title">ABOUT ME</h2>
                    {/* <p className="desktop_about_section-text">
                    Allow me to introduce myself first.
                </p> */}
                    <p className="desktop_about_section-text">
                        Born in the 80s, I grew up surrounded by technological
                        innovations that shaped the world as we know it
                        nowadays. The rise of the internet was the pinnacle of
                        these changes, and I quickly developed a deep passion
                        for technology and creation during my childhood.
                    </p>

                    <img
                        className="desktop_about-text-icon"
                        src="/icons/smart_toy_wght200_48.png"
                        alt=""
                    />
                    <p className="desktop_about_section-text">
                        School, especially college, never quite felt like my
                        place, so I jumped into the working world early, without
                        any real specialization. I explored various fields, took
                        on different roles, climbed the ladder, got ever growing
                        responsibilites. But more importantly, I met and worked
                        with wonderful people and learned a lot along the way.
                    </p>
                    <img
                        className="desktop_about-text-icon"
                        src="/icons/handshake_wght200_48.png"
                        alt=""
                    />
                    <p className="desktop_about_section-text">
                        By 2023, though, I realized I was ready for something
                        new—or rather, something old. I decided to return to my
                        first loves: technology and creation. I enrolled in an
                        intensive six-month bootcamp, honed my skills, and
                        earned my diploma in early 2024. Now, I’m fully back in
                        the game, doing what I’ve always been passionate about
                        and ready to help you to achieve your goals.
                    </p>
                </section>
            )}
        </>
    );
};

export default DesktopAbout;
