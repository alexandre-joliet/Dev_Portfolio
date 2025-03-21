import "./MobileActivities.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

const MobileActivities = () => {
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        const scrollTrigger = ScrollTrigger.create({
            trigger: ".mobile_activities-section",
            scroller: ".mobile-content-wrapper",
            start: 400,
            // markers: true,
            // onEnter: () => console.log("Section entered viewport"),
        });

        gsap.to(".mobile_activities-section", {
            scrollTrigger: scrollTrigger,
            duration: 1,
            opacity: 1,
            filter: "blur(0px)",
            translateX: 0,
        });
    }, []);

    return (
        <>
            <section className="mobile_activities-section">
                <h2 className="mobile_activities-section-title">ACTIVITIES</h2>
                <h3 className="mobile_activities-section-subtitle">
                    DEVELOPMENT
                </h3>
                <ul className="mobile_activities-section-text">
                    <li>
                        <strong>Creative Developer</strong> - Freelance
                        <p>2024 - Today</p>
                    </li>
                    <li>
                        <strong>Fullstack Web Developer</strong> - Freelance
                        <p>2023 - Today</p>
                    </li>
                </ul>
                <h3 className="mobile_activities-section-subtitle">
                    OTHER FIELDS
                </h3>
                <ul className="mobile_activities-section-text">
                    <li>
                        <strong>
                            Talent, HR Development & Digital Learning Specialist
                        </strong>{" "}
                        at <strong>Veepee</strong>
                        <p>2019 - 2023</p>
                    </li>
                    <li>
                        <strong>Training Manager</strong> at{" "}
                        <strong>Veepee</strong>
                        <p>2017 - 2019</p>
                    </li>
                    <li>
                        <strong>Team Manager</strong> at <strong>Veepee</strong>
                        <p>2015 - 2017</p>
                    </li>
                    <li>
                        <strong>Team Manager</strong> at <strong>UGC</strong>{" "}
                        and <strong>H&M</strong>
                        <p>2011 - 2014</p>
                    </li>
                </ul>
            </section>{" "}
        </>
    );
};

export default MobileActivities;
