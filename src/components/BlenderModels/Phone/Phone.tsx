import "./Phone.css";
import { Html, useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";
import gsap from "gsap";
// import { useControls } from "leva";
import { useEffect, useRef } from "react";
import useCameraStore from "../../../stores/cameraStore";
import useGeneralStore from "../../../stores/generalStore";

const Phone = () => {
    //** Debug */
    // const { position, rotation } = useControls({
    //     position: { value: { x: 0.62, y: 0.95, z: 0.1805 }, step: 0.01 },
    //     rotation: { value: { x: 7.08, y: 1.69, z: -0.8 }, step: 0.001 },
    // });

    //** Models & Texture */
    const phone = useGLTF("/models/phone_draco.glb");

    const phoneTexture = useTexture("/textures/baked/phone_baked.jpg");
    phoneTexture.flipY = false;

    //** Logic */
    const phoneIframeRef = useRef<HTMLIFrameElement>(null!);

    const {
        phoneCameraPosition,
        phoneScreenOn,
        updateCameraPosition,
        updateScreenOn,
    } = useCameraStore();
    const { usePhone, updateUsePhone, updateHideDefaultButton } =
        useGeneralStore();

    const { updateHasClickedCameraMenu, playAmbientSound } = useGeneralStore();

    const handlePhoneActions = () => {
        updateCameraPosition("phone");
        updateScreenOn("ON");
        updateHasClickedCameraMenu(true);
        updateUsePhone(true);
        updateHideDefaultButton(false);
    };

    useEffect(() => {
        setTimeout(() => {
            if (phoneCameraPosition && phoneScreenOn) {
                gsap.to(".iframe_phone", {
                    duration: 3,
                    ease: "power2.inOut",
                    opacity: 1,
                });
            }
        }, 1000);
    }, [phoneCameraPosition, phoneScreenOn]);

    // Pass data to the iframe
    useEffect(() => {
        const payload = {
            type: "UPDATE_DATA",
            phone: usePhone,
        };

        setTimeout(() => {
            if (
                phoneIframeRef.current &&
                phoneIframeRef.current.contentWindow
            ) {
                // console.log(`"Ready to pass": ${usePhone}`);
                phoneIframeRef.current.contentWindow.postMessage({
                    payload,
                });
            }
        }, 1000);
    }, [usePhone]);

    useEffect(() => {
        const payload = {
            type: "UPDATE_DATA",
            sound: playAmbientSound,
        };

        if (phoneIframeRef.current && phoneIframeRef.current.contentWindow) {
            // console.log(`"Ready to pass": ${useLaptop}`);
            phoneIframeRef.current.contentWindow.postMessage({
                payload,
            });
        }
    }, [playAmbientSound]);

    return (
        <>
            <mesh
                geometry={(phone.nodes.AA_phone as THREE.Mesh).geometry}
                position={(phone.nodes.AA_phone as THREE.Mesh).position}
                onPointerEnter={() => {
                    document.body.style.cursor = "pointer";
                }}
                onPointerLeave={() => {
                    document.body.style.cursor = "default";
                }}
                onClick={handlePhoneActions}
            >
                <meshBasicMaterial map={phoneTexture}></meshBasicMaterial>
            </mesh>
            {phoneScreenOn && (
                <Html
                    transform
                    wrapperClass="htmlMobileScreen"
                    distanceFactor={0.08}
                    // position={[position.x, position.y, position.z]}
                    // rotation={[rotation.x, rotation.y, rotation.z]}
                    position={[0.62, 0.9535, 0.181]}
                    rotation={[7.08, 1.69, -0.8]}
                    className="html_container"
                >
                    <div className="iframe_container">
                        <iframe
                            className="iframe_phone"
                            ref={phoneIframeRef}
                            src="/portfolio-mobile"
                        ></iframe>
                    </div>
                </Html>
            )}
        </>
    );
};

export default Phone;

// x: 0.62
