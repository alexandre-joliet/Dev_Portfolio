import { useEffect } from "react";
import "./PortfolioDesktop.css";
import gsap from "gsap";
import useGeneralStore from "../../stores/generalStore";

const PortfolioDesktop = () => {
    //** Logic */
    const { useLaptop, updateUseLaptop } = useGeneralStore();

    // Receive data from parent
    useEffect(() => {
        const handleMessage = (event: MessageEvent) => {
            if (event.data.type === "UPDATE_DATA") {
                // console.log(event);
                updateUseLaptop(event.data.payload); // Update Zustand store in iframe
            }
        };

        window.addEventListener("message", handleMessage);
        return () => window.removeEventListener("message", handleMessage);
    });

    //** Style */

    useEffect(() => {
        const titleDesktopTimeline = gsap.timeline({ paused: true, delay: 3 });
        titleDesktopTimeline.to(".desktop_portfolio_main-title", {
            duration: 2,
            width: "85%",
        });
        titleDesktopTimeline.to(".desktop_portfolio_main-title2", {
            duration: 2,
            width: "85%",
            delay: -1.5,
        });
        titleDesktopTimeline.to(".desktop_portfolio_main-title", {
            duration: 1,
            bottom: "17rem",
        });
        titleDesktopTimeline.to(
            ".desktop_portfolio_main-title2",
            {
                duration: 1,
                bottom: "8rem",
            },
            "<"
        );
        titleDesktopTimeline.to(
            ".desktop_portfolio_main-subtext",
            {
                duration: 3,
                width: "85%",
            },
            ">"
        );

        if (useLaptop) {
            titleDesktopTimeline.play();
        }
    }, [useLaptop]);

    return (
        <>
            <div className="destkop_portfolio_main-wrapper">
                <section>
                    <h1 className="desktop_portfolio_main-title">HELLO</h1>
                    <h1 className="desktop_portfolio_main-title2">TRAVELLER</h1>
                    <p className="desktop_portfolio_main-subtext">
                        Welcome onboard.
                    </p>
                </section>

                {/* <section>
                    <p className="p-test">
                        I'm Alex, a 37-year-old passionate developer based in
                        France.
                    </p>
                    <p className="p-test">
                        Let's find out together who I am and what I do!
                    </p>
                </section> */}

                {/* <section>
                    <h2 className="portfolio_section-title">Bio</h2>
                    <p className="p-test">
                        Allow me to introduce myself first.
                    </p>
                    <p className="p-test">
                        Born in the 80s, I grew up surrounded by technological
                        innovations that shaped the world as we know it
                        nowadays. The rise of the internet was the pinnacle of
                        these changes, and I quickly developed a deep passion
                        for technology and creation during my childhood.
                    </p>
                    <p className="p-test">
                        School, especially college, never quite felt like my
                        place, so I jumped into the working world early, without
                        any real specilization. I explored various fields, took
                        on different roles, climbed the ladder, got ever growing
                        responsibilites. But more importantly, I met and worked
                        with wonderful people and learned a lot along the way.
                    </p>
                    <p className="p-test">
                        By 2023, though, I realized I was ready for something
                        new—or rather, something old. I decided to return to my
                        first loves: technology and creation. I enrolled in an
                        intensive six-month bootcamp, honed my skills, and
                        earned my diploma in early 2024. Now, I’m fully back in
                        the game, doing what I’ve always been passionate about
                        and ready to help achieve your goals.
                    </p>
                </section> */}

                {/* <section>
                    <h2 className="portfolio_section-title">Activities</h2>
                    <h3 className="portfolio_section-subtitle">Development</h3>
                    <ul className="p-test">
                        <li>Creative Developer - Freelance</li>
                        <p>2024 - Today</p>
                        <li>Fullstack Web Developer - Freelance</li>
                        <p>2023 - Today</p>
                    </ul>
                    <h3 className="portfolio_section-subtitle">Other</h3>
                    <ul className="p-test">
                        <li>
                            Talent, HR Development & Digital Learning Specialist
                            at Veepee
                        </li>
                        <p>2019 - 2023</p>

                        <li>Training Manager at Veepee</li>
                        <p>2017 - 2019</p>

                        <li>Team Manager at Veepee</li>
                        <p>2015 - 2017</p>

                        <li>Team Manager at UGC and H&M</li>
                        <p>2011 - 2014</p>
                    </ul>
                </section> */}
            </div>
        </>
    );
};

export default PortfolioDesktop;
