import "./Experience.css";
import * as THREE from "three";
import gsap from "gsap";
// import { CanvasWrapper } from "@isaac_ua/drei-html-fix"; // import CanvasWrapper
import { Canvas } from "@react-three/fiber";
import { CameraControls } from "@react-three/drei";
import { Suspense, useEffect, useRef, useState } from "react";
import CameraSetup from "../Settings/Camera/CameraSetup.tsx";
import LightsSettings from "../Settings/Lights/LightsSettings.tsx";
import PostprocessingSettings from "../Settings/Postprocessing/PostprocessingSettings.tsx";
import EnvironmentSettings from "../Settings/Environment/EnvironmentSettings.tsx";
import useCameraStore from "../../stores/cameraStore.ts";
import useGeneralStore from "../../stores/generalStore.ts";
import Scene from "../BlenderModels/Scene/Scene.tsx";
import Laptop from "../BlenderModels/Laptop/Laptop.tsx";
import Phone from "../BlenderModels/Phone/Phone.tsx";
import Planet from "../Extras/Planet/Planet.tsx";
import AmbientSound from "../Extras/AmbientSound/AmbientSound.tsx";
import Hologram from "../Extras/Hologram/Hologram.tsx";
import BackgroundPlane from "../Extras/BackgroundPlane/BackgroundPlane.tsx";
import Astronaut from "../Extras/Astronaut/Astronaut.tsx";
import Loading from "../Loading/Loading.tsx";
import Welcome from "../Welcome/Welcome.tsx";
import useHoverSound from "../Extras/SoundEffects/hoverSound.tsx";
import useClickSound from "../Extras/SoundEffects/clickSound.tsx";
import Cup from "../BlenderModels/Cup/Cup.tsx";

const Experience = () => {
    //** Camera settings & movements */
    const cameraSettings: {
        fov: number;
        near: number;
        far: number;
        position: [number, number, number];
    } = {
        fov: 35,
        near: 0.1,
        far: 50,
        position: [3.5, 1, 0],
    };

    const cameraRef = useRef<CameraControls>(null!);

    //** Logic */
    // Loading screen & welcome message
    const [showLoading, setShowLoading] = useState<boolean>(true);
    const { showWelcome } = useGeneralStore();
    const playHoverSound = useHoverSound();
    const playClickSound = useClickSound();

    useEffect(() => {
        if (!showLoading) {
            gsap.to(".canvas_home", {
                duration: 2,
                ease: "power2.in",
                opacity: 1,
            });
            gsap.to(".camera_buttons-toggle", {
                duration: 2,
                ease: "power2.in",
                opacity: 1,
            });
            gsap.to(".buttons-toggle-action", {
                duration: 2,
                ease: "power2.in",
                opacity: 1,
            });
        }
    }, [showLoading]);

    // Camera menu
    const [openCameraOptions, setOpenCameraOptions] = useState<boolean>(false);
    const [screenSize, setScreenSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });
    const { updateHasClickedCameraMenu } = useGeneralStore();

    useEffect(() => {
        const handleResize = () => {
            setScreenSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    });

    const handleOpenCameraOptions = () => {
        playClickSound();
        if (!openCameraOptions) {
            setOpenCameraOptions(true);
            updateHasClickedCameraMenu(true);
        } else {
            setOpenCameraOptions(false);
        }
    };

    useEffect(() => {
        const getWidth = () => {
            if (screenSize.width <= 600)
                return openCameraOptions ? "70%" : "15%";
            if (screenSize.width <= 800)
                return openCameraOptions ? "40%" : "8%";
            if (screenSize.width <= 1200)
                return openCameraOptions ? "30%" : "7%";
            return openCameraOptions ? "20%" : "5%";
        };

        const cameraOptionsTimeline = gsap.timeline();

        if (openCameraOptions) {
            cameraOptionsTimeline
                .to(".camera_buttons-toggle", {
                    duration: 0.5,
                    backgroundColor: `rgba(0, 0, 0, 0.7)`,
                    width: getWidth(),
                })
                .to(".camera_buttons-toggle", { height: "8.5rem" }, "<50%")
                .to(".buttons-toggle-action", { bottom: "7rem" }, "<")
                .to(".camera_buttons_container", { bottom: 0 }, "<")
                .to(".buttons-toggle-action", { rotateZ: 180 }, "<50%")
                .to(
                    ".toggle-action-icon",
                    { backgroundColor: "var(--color-accent)" },
                    "<"
                );
        } else if (!showLoading) {
            cameraOptionsTimeline
                .to(".toggle-action-icon", {
                    backgroundColor: "transparent",
                    duration: 0,
                })
                .to(".camera_buttons_container", { bottom: "-7rem" }, "<")
                .to(".buttons-toggle-action", { bottom: "1rem" }, "<")
                .to(".camera_buttons-toggle", { height: "4.75rem" }, "<")
                .to(".camera_buttons-toggle", { width: getWidth() }, ">")
                .to(
                    ".camera_buttons-toggle",
                    { backgroundColor: `rgba(0, 0, 0, 0.5)` },
                    "<"
                )
                .to(".buttons-toggle-action", { rotateZ: 0 }, "<50%");
        }
    }, [openCameraOptions, showLoading, screenSize.width]);

    //** Camera logic */
    const {
        defaultCameraPosition,
        laptopCameraPosition,
        phoneCameraPosition,
        cupCameraPosition,
        updateScreenOn,
        updateCameraPosition,
    } = useCameraStore();
    const {
        updateUsePhone,
        updateUseLaptop,
        hideDefaultButton,
        updateHideDefaultButton,
    } = useGeneralStore();

    // Default position
    const handeDefaultButtonToggle = () => {
        playClickSound();
        updateCameraPosition("default");
    };

    useEffect(() => {
        if (cameraRef.current && defaultCameraPosition) {
            cameraRef.current.setLookAt(3.5, 1, 0, 0, 1, 0, true);
            cameraRef.current.minPolarAngle = Math.PI / 2.02;
            cameraRef.current.maxPolarAngle = Math.PI / 1.97;
            cameraRef.current.minAzimuthAngle = 80 * THREE.MathUtils.DEG2RAD;
            cameraRef.current.maxAzimuthAngle = 100 * THREE.MathUtils.DEG2RAD;
            cameraRef.current.minDistance = 3.5;
            cameraRef.current.maxDistance = 3.501;
        }

        if (defaultCameraPosition && history.state.position !== "default") {
            history.pushState({ position: "default" }, "", "");
        }
    }, [defaultCameraPosition]);

    // Manage history
    useEffect(() => {
        window.addEventListener("popstate", () => {
            useCameraStore.getState().updateCameraPosition("default");
        });

        return () =>
            window.removeEventListener("popstate", () => {
                useCameraStore.getState().updateCameraPosition("default");
            });
    }, []);

    // Menu Default button
    useEffect(() => {
        if (laptopCameraPosition || phoneCameraPosition || cupCameraPosition) {
            gsap.to(".button_reset", { duration: 1, opacity: 1 });
            updateHideDefaultButton(false);
        } else if (defaultCameraPosition && hideDefaultButton === false) {
            gsap.to(".button_reset", { duration: 1, opacity: 0 });
            updateHideDefaultButton(true);
        }
    }, [
        laptopCameraPosition,
        phoneCameraPosition,
        cupCameraPosition,
        defaultCameraPosition,
        hideDefaultButton,
        updateHideDefaultButton,
    ]);

    // To laptop
    const handleLaptopButtonToggle = () => {
        playClickSound();
        updateCameraPosition("laptop");
        setOpenCameraOptions(false);
        updateHideDefaultButton(false);
    };

    useEffect(() => {
        if (cameraRef.current && laptopCameraPosition) {
            cameraRef.current.setLookAt(1.1, 1, -0.1, 0, 0.9, -0.1, true);
            cameraRef.current.minPolarAngle = Math.PI / 2.1;
            cameraRef.current.maxPolarAngle = Math.PI / 2.05;
            cameraRef.current.minDistance = 1.1;
            cameraRef.current.maxDistance = 1.101;
            updateUseLaptop(true);
        }

        if (history.state.position !== "default") {
            history.pushState({ position: "default" }, "", "");
        }
    }, [laptopCameraPosition, updateUseLaptop]);

    // To phone
    const handlePhoneButtonToggle = () => {
        playClickSound();
        updateScreenOn("ON");
        updateCameraPosition("phone");
        setOpenCameraOptions(false);
        updateHideDefaultButton(false);
    };

    useEffect(() => {
        // console.log(phoneCameraPosition);

        if (cameraRef.current && phoneCameraPosition) {
            // console.log("Camera is moving");
            cameraRef.current.setLookAt(0.95, 1, 0.17, 0, 0.9, 0.205, true);
            cameraRef.current.minPolarAngle = Math.PI / 2.145;
            cameraRef.current.maxPolarAngle = Math.PI / 2.145;
            cameraRef.current.minAzimuthAngle = 92.1 * THREE.MathUtils.DEG2RAD;
            cameraRef.current.maxAzimuthAngle = 92.1 * THREE.MathUtils.DEG2RAD;
            cameraRef.current.minDistance = 0.95;
            cameraRef.current.maxDistance = 0.951;
            updateUsePhone(true);
        }
        if (history.state.position !== "default") {
            history.pushState({ position: "default" }, "", "");
        }
    }, [phoneCameraPosition, updateUsePhone]);

    // To coffee
    useEffect(() => {
        if (cameraRef.current && cupCameraPosition) {
            cameraRef.current.setLookAt(1.05, 1.2, 0.1, 0.65, 0.95, 0.3, true);
            cameraRef.current.minPolarAngle = Math.PI / 3;
            cameraRef.current.maxPolarAngle = Math.PI / 2;
            cameraRef.current.minAzimuthAngle = 45 * THREE.MathUtils.DEG2RAD;
            cameraRef.current.maxAzimuthAngle = 140 * THREE.MathUtils.DEG2RAD;
            cameraRef.current.minDistance = 0.525;
            cameraRef.current.maxDistance = 0.5251;
        }

        if (history.state.position !== "default") {
            history.pushState({ position: "default" }, "", "");
        }
    }, [cupCameraPosition]);

    return (
        <>
            {showLoading && <Loading setShowLoading={setShowLoading}></Loading>}

            <AmbientSound
                url="/sounds/password-infinity-123276.mp3"
                volume={0.15}
                loop={true}
            ></AmbientSound>

            {/* <CanvasWrapper> */}
            <Canvas
                className={
                    showLoading
                        ? "canvas_home"
                        : "canvas_home canvas_home-visible"
                }
                flat
                camera={cameraSettings}
                shadows
                dpr={[1, 2]}
            >
                <Suspense fallback={null}>
                    {/* Scene */}
                    <color
                        attach="background"
                        args={[0, 0, 0]}
                    />

                    <LightsSettings />
                    <PostprocessingSettings />
                    <EnvironmentSettings />

                    {/* Camera */}
                    <CameraSetup cameraRef={cameraRef} />
                    <CameraControls
                        makeDefault
                        ref={cameraRef}
                        minPolarAngle={Math.PI / 2.02}
                        maxPolarAngle={Math.PI / 1.97}
                        minAzimuthAngle={80 * THREE.MathUtils.DEG2RAD}
                        maxAzimuthAngle={100 * THREE.MathUtils.DEG2RAD}
                        smoothTime={1}
                        minDistance={3.5}
                        maxDistance={3.501}
                        infinityDolly={false}
                        truckSpeed={0}
                        draggingSmoothTime={0.3}
                    />

                    <Scene />
                    <Laptop />
                    <Phone />
                    <Cup />
                    <Hologram />
                    <Planet />
                    <BackgroundPlane />
                    <Astronaut />
                </Suspense>
            </Canvas>
            {/* </CanvasWrapper> */}
            {/* )} */}

            {/* Welcome */}
            {!showLoading && showWelcome && <Welcome></Welcome>}

            {/* Buttons */}
            {!showLoading && (
                <>
                    <div
                        className="camera_buttons-toggle"
                        onClick={handleOpenCameraOptions}
                    >
                        <div
                            className="buttons-toggle-action"
                            onMouseEnter={playHoverSound}
                        >
                            <img
                                className="toggle-action-icon"
                                src="/icons/expand_circle1_wght200_48.png"
                                alt="Open camera controls"
                            ></img>
                        </div>
                    </div>

                    <div className="camera_buttons_container">
                        <button
                            className="button_phone"
                            onMouseEnter={playHoverSound}
                            onClick={handlePhoneButtonToggle}
                        >
                            <img
                                className="button-icon"
                                src="/icons/smartphone_wght200_48.png"
                                alt="Move camera to the phone"
                            ></img>
                        </button>

                        <button
                            className={
                                !hideDefaultButton
                                    ? "button_reset"
                                    : "button_reset-hidden"
                            }
                            onMouseEnter={playHoverSound}
                            onClick={handeDefaultButtonToggle}
                        >
                            <img
                                className="button-icon"
                                src="/icons/home_wght200_48.png"
                                alt="Move camera to default position"
                            ></img>
                        </button>

                        <button
                            className="button_laptop"
                            onMouseEnter={playHoverSound}
                            onClick={handleLaptopButtonToggle}
                        >
                            <img
                                className="button-icon"
                                src="/icons/laptop_wght200_48.png"
                                alt="Move camera to laptop"
                            ></img>
                        </button>
                    </div>
                </>
            )}
        </>
    );
};

export default Experience;
