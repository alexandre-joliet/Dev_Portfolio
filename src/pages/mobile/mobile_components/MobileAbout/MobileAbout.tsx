import "./MobileAbout.css";
import gsap from "gsap";
import { useEffect } from "react";

const MobileAbout = () => {
    useEffect(() => {
        gsap.to(".mobile_about-section", {
            duration: 1,
            opacity: 1,
            filter: "blur(0px)",
            translateX: 0,
            delay: 0.5,
        });
    }, []);

    return (
        <>
            <section className="mobile_about-section">
                <h2 className="mobile_about-title">ABOUT ME</h2>
                <p className="mobile_about-text">
                    Allow me to introduce myself first.
                </p>
                <p className="mobile_about-text">
                    Born in the 80s, I grew up surrounded by technological
                    innovations that shaped the world as we know it nowadays.
                    The rise of the internet was the pinnacle of these changes,
                    and I quickly developed a deep passion for technology and
                    creation during my childhood.
                </p>
                <img
                    className="mobile_bio-text-icon"
                    src="/icons/smart_toy_E38A84_wght200_48.png"
                    alt=""
                />
                <p className="mobile_about-text">
                    School, especially college, never quite felt like my place,
                    so I jumped into the working world early, without any real
                    specialization. I explored various fields, took on different
                    roles, climbed the ladder, got ever growing responsibilites.
                    But more importantly, I met and worked with wonderful people
                    and learned a lot along the way.
                </p>
                <img
                    className="mobile_bio-text-icon"
                    src="/icons/handshake_E38A84_wght200_48.png"
                    alt=""
                />
                <p className="mobile_about-text">
                    By 2023, though, I realized I was ready for something new—or
                    rather, something old. I decided to return to my first
                    loves: technology and creation. I enrolled in an intensive
                    six-month bootcamp, honed my skills, and earned my
                    Javascript FullStack Developer diploma in early 2024. Now,
                    I’m fully back in the game, doing what I’ve always been
                    passionate about and ready to help you to achieve your
                    goals.
                </p>
            </section>
        </>
    );
};

export default MobileAbout;
