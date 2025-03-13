import "./Content.css";
// import { Canvas } from "@react-three/fiber";
// import { useEffect, useState } from "react";
// import gsap from "gsap";
import Bio from "./Bio";
import Activities from "./Activities";
import Projects from "./Projects";
import Skills from "./Skills";
// import CanvasMobile from "./CanvasMobile";

const Content = () => {
    //! Potential use of a Canvas for small devices
    // const [showContent, setShowContent] = useState(false);
    // useEffect(() => {
    //     setTimeout(() => {
    //         setShowContent(true);
    //     }, 2000);
    // }, []);

    // useEffect(() => {
    //     if (showContent) {
    //         gsap.to(".canvas_container", { duration: 1, height: "200px" });
    //     }
    // }, [showContent]);

    return (
        <>
            {/* <div className="canvas_container">
                <Canvas
                    className="phone_portfolio-canvas"
                    camera={{
                        fov: 50,
                        near: 0.1,
                        far: 1000,
                        position: [0, 0, 5],
                    }}
                >
                    <CanvasMobile />
                </Canvas>
            </div> */}

            <Bio></Bio>
            <Activities></Activities>
            <Skills></Skills>
            <Projects></Projects>
        </>
    );
};

export default Content;
