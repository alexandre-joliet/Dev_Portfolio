import "./Laptop.css";
import { Html, useGLTF, useTexture } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import gsap from "gsap";
import { Group } from "three";
// import { useControls } from "leva";
import useCameraStore from "../../../stores/cameraStore";
import useGeneralStore from "../../../stores/generalStore";

const Laptop = () => {
    //** Debug */
    // const { position, rotation } = useControls({
    //     // position: { value: { x: 0.71, y: 0.835, z: -0.13 }, step: 0.01 },
    //     // position: { value: { x: 0.121, y: 0.028, z: 0.012 }, step: 0.01 },
    //     // position: { value: { x: 0.0, y: 0.85, z: -0.12 }, step: 0.01 },

    //     // rotation: { value: { x: -4.73, y: 0.22, z: 4.81 }, step: 0.001 },
    // });

    //** Models & Texture */
    const laptopBottom = useGLTF("/models/laptop_bottom_draco.glb");
    const laptopScreen = useGLTF("/models/laptop_screen_draco.glb");
    // console.log(laptopScreen);

    const laptopTexture = useTexture("/textures/baked/laptop_baked_fix.jpg");
    laptopTexture.flipY = false;

    //** Logic */
    const [openLaptop, setOpenLaptop] = useState(false);

    const laptopRef = useRef<THREE.Mesh>(null!);
    const laptopIframeGroupRef = useRef<Group>(null!);
    // const laptopHTMLRef = useRef<HTMLDivElement>(null!);
    const laptopIframeRef = useRef<HTMLIFrameElement>(null!);

    const { laptopCameraPosition, updateCameraPosition } = useCameraStore();
    const {
        updateHasClickedCameraMenu,
        useLaptop,
        updateUseLaptop,
        updateHideDefaultButton,
        playAmbientSound,
    } = useGeneralStore();

    const handleLaptopActions = () => {
        updateCameraPosition("laptop");
        updateHasClickedCameraMenu(true);
        updateUseLaptop(true);
        updateHideDefaultButton(false);
    };

    // Pass data to the iframe
    useEffect(() => {
        const payload = {
            type: "UPDATE_DATA",
            laptop: useLaptop,
        };

        if (laptopIframeRef.current && laptopIframeRef.current.contentWindow) {
            // console.log(`"Ready to pass": ${useLaptop}`);
            laptopIframeRef.current.contentWindow.postMessage({
                payload,
            });
        }
    }, [useLaptop]);

    useEffect(() => {
        const payload = {
            type: "UPDATE_DATA",
            sound: playAmbientSound,
        };

        if (laptopIframeRef.current && laptopIframeRef.current.contentWindow) {
            // console.log(`"Ready to pass": ${useLaptop}`);
            laptopIframeRef.current.contentWindow.postMessage({
                payload,
            });
        }
    }, [playAmbientSound]);

    useEffect(() => {
        // if (laptopRef.current !== null) {

        // Opening / closing the screen
        if (!openLaptop && laptopCameraPosition) {
            gsap.to(laptopRef.current.rotation, {
                duration: 2,
                ease: "power1.inOut",
                z: Math.PI / 3.25,
            });

            gsap.to(laptopIframeGroupRef.current.rotation, {
                duration: 2,
                ease: "power1.inOut",
                z: Math.PI / 2.07,
                x: -0.1,
                y: -0.1,
            });

            gsap.to(".htmlLaptopScreen iframe", {
                duration: 4,
                ease: "power2.inOut",
                opacity: 1,
                delay: 1,
            });

            // console.log("Laptop ouvert");
            setOpenLaptop(true);
        }
    }, [openLaptop, laptopCameraPosition, updateCameraPosition]);

    return (
        <>
            <mesh
                geometry={
                    (laptopBottom.nodes.AA_laptop_bottom_fix as THREE.Mesh)
                        .geometry
                }
                position={
                    (laptopBottom.nodes.AA_laptop_bottom_fix as THREE.Mesh)
                        .position
                }
                onPointerEnter={() => {
                    document.body.style.cursor = "pointer";
                }}
                onPointerLeave={() => {
                    document.body.style.cursor = "default";
                }}
                onClick={handleLaptopActions}
            >
                <meshBasicMaterial map={laptopTexture}></meshBasicMaterial>
            </mesh>

            <group>
                <mesh
                    ref={laptopRef}
                    geometry={
                        (laptopScreen.nodes.AA_laptop_screen_fix as THREE.Mesh)
                            .geometry
                    }
                    position={
                        (laptopScreen.nodes.AA_laptop_screen_fix as THREE.Mesh)
                            .position
                    }
                    rotation={[0, -0.1, -0.6]}
                    onPointerEnter={() => {
                        document.body.style.cursor = "pointer";
                    }}
                    onPointerLeave={() => {
                        document.body.style.cursor = "default";
                    }}
                    onClick={handleLaptopActions}
                >
                    <meshBasicMaterial map={laptopTexture}></meshBasicMaterial>
                    <mesh
                        geometry={
                            (
                                laptopScreen.nodes
                                    .Laptop_screen_glass003 as THREE.Mesh
                            ).geometry
                        }
                        position={
                            (
                                laptopScreen.nodes
                                    .Laptop_screen_glass003 as THREE.Mesh
                            ).position
                        }
                    >
                        <meshPhysicalMaterial
                            transmission={1}
                            roughness={0.15}
                            thickness={0.025}
                            color={"#000000"}
                        ></meshPhysicalMaterial>
                    </mesh>
                </mesh>

                <group
                    ref={laptopIframeGroupRef}
                    position={
                        (laptopScreen.nodes.AA_laptop_screen_fix as THREE.Mesh)
                            .position
                    }
                >
                    <Html
                        transform
                        wrapperClass="htmlLaptopScreen"
                        distanceFactor={0.1}
                        // position={[position.x, position.y, position.z]}
                        // rotation={[rotation.x, rotation.y, rotation.z]}
                        position={[0.121, 0.028, 0.012]}
                        rotation={[-4.73, 0.22, 4.815]}
                        occlude={[laptopRef]}
                    >
                        <iframe
                            ref={laptopIframeRef}
                            className="iframe_laptop"
                            src="/portfolio-desktop"
                        ></iframe>
                    </Html>
                </group>
            </group>
        </>
    );
};

export default Laptop;
