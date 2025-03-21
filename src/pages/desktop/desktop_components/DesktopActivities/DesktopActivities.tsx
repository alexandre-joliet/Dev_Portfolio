import gsap from "gsap";
import { useEffect } from "react";
import useIframeStore from "../../../../stores/iframeStore";
import "./DesktopActivities.css";

const DesktopActivities = () => {
    //** Logic */
    const { showActivities, showExitAnimation, updateShowAnimation } =
        useIframeStore();

    //** Style */
    useEffect(() => {
        if (showActivities) {
            gsap.to(".desktop_activities_section", {
                duration: 1,
                opacity: 1,
            });
            gsap.to(".desktop_activities_section", {
                duration: 1,
                opacity: 1,
                filter: "blur(0px)",
            });
        }
    }, [showActivities]);

    useEffect(() => {
        console.log(showExitAnimation);

        if (showExitAnimation) {
            gsap.to(".desktop_activities_section", { duration: 1, opacity: 0 });
            updateShowAnimation("Enter");
        }
    }, [showExitAnimation, updateShowAnimation]);

    return (
        <>
            {showActivities && (
                <section className="desktop_activities_section">
                    <h2 className="desktop_activities_section-title">
                        ACTIVITIES
                    </h2>
                    <h3 className="desktop_activities_section-subtitle">
                        DEVELOPMENT
                    </h3>
                    <ul className="desktop_activities_section-list">
                        <li>
                            <strong>Creative Developer</strong> - Freelance
                            <p>2024 - Today</p>
                        </li>
                        <li>
                            <strong>Fullstack Web Developer</strong> - Freelance
                            <p>2023 - Today</p>
                        </li>
                    </ul>
                    <h3 className="desktop_activities_section-subtitle">
                        OTHER FIELDS
                    </h3>
                    <ul className="desktop_activities_section-list">
                        <li>
                            <strong>
                                Talent, HR Development & Digital Learning
                                Specialist
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
                            <strong>Team Manager</strong> at{" "}
                            <strong>Veepee</strong>
                            <p>2015 - 2017</p>
                        </li>
                        <li>
                            <strong>Team Manager</strong> at{" "}
                            <strong>UGC</strong> and <strong>H&M</strong>
                            <p>2011 - 2014</p>
                        </li>
                    </ul>
                </section>
            )}
        </>
    );
};

export default DesktopActivities;
