import "./Bio.css";
import gsap from "gsap";
import { useEffect } from "react";

const Bio = () => {
    useEffect(() => {
        gsap.to(".phone_portfolio-bio-section", {
            duration: 1,
            opacity: 1,
            filter: "blur(0px)",
            translateX: 0,
            delay: 1,
        });
    }, []);

    return (
        <>
            <section className="phone_portfolio-bio-section">
                <h2 className="phone_portfolio_section-bio-title">BIO</h2>
                <p className="phone_portfolio_section-bio-text">
                    Allow me to introduce myself first.
                </p>
                <p className="phone_portfolio_section-bio-text">
                    Born in the 80s, I grew up surrounded by technological
                    innovations that shaped the world as we know it nowadays.
                    The rise of the internet was the pinnacle of these changes,
                    and I quickly developed a deep passion for technology and
                    creation during my childhood.
                </p>

                <img
                    className="phone_bio-text-icon"
                    src="/icons/smart_toy_wght200_48.png"
                    alt=""
                />
                <p className="phone_portfolio_section-bio-text">
                    School, especially college, never quite felt like my place,
                    so I jumped into the working world early, without any real
                    specialization. I explored various fields, took on different
                    roles, climbed the ladder, got ever growing responsibilites.
                    But more importantly, I met and worked with wonderful people
                    and learned a lot along the way.
                </p>
                <img
                    className="phone_bio-text-icon"
                    src="/icons/handshake_wght200_48.png"
                    alt=""
                />
                <p className="phone_portfolio_section-bio-text">
                    By 2023, though, I realized I was ready for something new—or
                    rather, something old. I decided to return to my first
                    loves: technology and creation. I enrolled in an intensive
                    six-month bootcamp, honed my skills, and earned my diploma
                    in early 2024. Now, I’m fully back in the game, doing what
                    I’ve always been passionate about and ready to help you to
                    achieve your goals.
                </p>
            </section>
        </>
    );
};

export default Bio;
