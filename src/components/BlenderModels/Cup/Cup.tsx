import { useGLTF, useTexture } from "@react-three/drei";
import { useEffect, useMemo, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import gsap from "gsap";
import coffeeSmokeVertexShader from "../../../shaders/coffeeSmoke/vertex.glsl";
import coffeeSmokeFragmentShader from "../../../shaders/coffeeSmoke/fragment.glsl";
import useCameraStore from "../../../stores/cameraStore";
import useGeneralStore from "../../../stores/generalStore";

const Cup = () => {
    //** Models */
    const cup = useGLTF("/models/cup_draco.glb");
    // console.log(cup.nodes.Cold_led.position);

    // Smoke
    const smokeMeshGeometry = useMemo(() => {
        const geometry = new THREE.PlaneGeometry(1, 1, 16, 64);
        geometry.translate(0, 0.5, 0);
        return geometry;
    }, []);

    //** Textures */
    const cupTextures = useTexture("/textures/baked/cup_baked_2k.jpg");
    cupTextures.flipY = false;

    const perlinTexture = useTexture("/textures/perlin.png");
    perlinTexture.wrapS = THREE.RepeatWrapping;
    perlinTexture.wrapT = THREE.RepeatWrapping;

    //** Logic */
    const { showHeader, updateHideDefaultButton } = useGeneralStore();

    // LEDS
    const coldLedRef = useRef<THREE.Mesh>(null!);
    const mildLedRef = useRef<THREE.Mesh>(null!);
    const hotLedRef = useRef<THREE.Mesh>(null!);
    const coolingLedTimelineRef = useRef<GSAPTimeline | null>(null);
    const heatingLedTimelineRef = useRef<GSAPTimeline | null>(null);
    const blinkTweenRef = useRef<GSAPTween | null>(null);

    const [cupHeating, setCupHeating] = useState<boolean>(false);
    const [cupInteractionAllowed, setCupInteractionAllowed] =
        useState<boolean>(false);

    useEffect(() => {
        if (
            !showHeader ||
            !hotLedRef.current ||
            !mildLedRef.current ||
            !coldLedRef.current ||
            !smokeMeshRef.current
        )
            return;

        // Kill any previous animations
        coolingLedTimelineRef.current?.kill();
        heatingLedTimelineRef.current?.kill();
        blinkTweenRef.current?.kill();

        // Create new timelines
        const coolingTimeline = gsap.timeline();
        const heatingTimeline = gsap.timeline();

        if (!cupHeating) {
            setCupInteractionAllowed(false);
            coolingTimeline.to(smokeMeshRef.current.scale, {
                duration: 23,
                x: 0,
                y: 0,
                z: 0,
            });
            coolingTimeline.to(
                hotLedRef.current.material,
                {
                    duration: 1,
                    opacity: 0,
                    delay: 6,
                },
                "<"
            );
            coolingTimeline.to(
                mildLedRef.current.material,
                {
                    duration: 1,
                    opacity: 0,
                    delay: 6,
                },
                ">"
            );
            coolingTimeline.to(
                coldLedRef.current.material,
                {
                    duration: 1,
                    opacity: 0,
                    delay: 6,
                },
                ">"
            );
            coolingTimeline.eventCallback("onComplete", () => {
                blinkTweenRef.current = gsap.to(coldLedRef.current.material, {
                    duration: 1,
                    opacity: 1,
                    repeat: -1,
                    yoyo: true,
                });
                setCupInteractionAllowed(true);
            });

            coolingLedTimelineRef.current = coolingTimeline;
        } else {
            setCupInteractionAllowed(false);
            blinkTweenRef.current = gsap.to(coldLedRef.current.material, {
                duration: 1,
                opacity: 0,
            });

            heatingTimeline.to(smokeMeshRef.current.scale, {
                duration: 20,
                x: 0.06,
                y: 0.2,
                z: 0.05,
                delay: 3,
            });
            heatingTimeline.to(
                coldLedRef.current.material,
                {
                    duration: 1,
                    opacity: 1,
                    delay: 1,
                },
                "0"
            );
            heatingTimeline.to(
                mildLedRef.current.material,
                {
                    duration: 1,
                    opacity: 1,
                    delay: 3,
                },
                ">"
            );
            heatingTimeline.to(
                hotLedRef.current.material,
                {
                    duration: 1,
                    opacity: 1,
                    delay: 3,
                },
                ">"
            );
            heatingTimeline.eventCallback("onComplete", () => {
                setCupHeating(false);
            });

            heatingLedTimelineRef.current = heatingTimeline;
        }
    }, [showHeader, cupHeating]);

    // Pointer & Camera
    const { updateCameraPosition } = useCameraStore();

    const handleCupPointer = () => {
        if (cupInteractionAllowed && !cupHeating) {
            document.body.style.cursor = "pointer";
        } else {
            document.body.style.cursor = "default";
        }
    };

    const handleCupClickActions = () => {
        updateCameraPosition("coffee");
        updateHideDefaultButton(false);

        if (!cupInteractionAllowed || cupHeating) return;

        if (cupInteractionAllowed && !cupHeating) {
            setCupHeating(true);
        }
    };

    // Smoke
    const smokeMeshRef = useRef<THREE.Mesh>(null!);
    const shaderMaterialRef = useRef<THREE.ShaderMaterial>(null);

    useFrame(({ clock }) => {
        if (shaderMaterialRef.current) {
            shaderMaterialRef.current.uniforms.uTime.value = clock.elapsedTime;
        }
    });

    //! Making sure that the texture is loaded before applying the uniforms
    const uniforms = useMemo(
        () => ({
            uPerlinTexture: new THREE.Uniform(perlinTexture),
            uTime: new THREE.Uniform(0),
        }),
        [perlinTexture]
    );

    return (
        <>
            <group
                onPointerEnter={handleCupPointer}
                onPointerLeave={() => (document.body.style.cursor = "default")}
                onClick={handleCupClickActions}
            >
                <mesh
                    geometry={(cup.nodes.Cup_frame as THREE.Mesh).geometry}
                    position={(cup.nodes.Cup_frame as THREE.Mesh).position}
                >
                    <meshBasicMaterial map={cupTextures}></meshBasicMaterial>
                </mesh>
                <mesh
                    geometry={(cup.nodes.Cup_ring as THREE.Mesh).geometry}
                    position={(cup.nodes.Cup_ring as THREE.Mesh).position}
                    onClick={() => setCupHeating(true)}
                >
                    <meshBasicMaterial map={cupTextures}></meshBasicMaterial>
                </mesh>
                <mesh
                    geometry={(cup.nodes.Cold_led as THREE.Mesh).geometry}
                    position={(cup.nodes.Cold_led as THREE.Mesh).position}
                >
                    <meshBasicMaterial map={cupTextures}></meshBasicMaterial>
                </mesh>
                <mesh
                    geometry={(cup.nodes.Mild_led as THREE.Mesh).geometry}
                    position={(cup.nodes.Mild_led as THREE.Mesh).position}
                >
                    <meshBasicMaterial map={cupTextures}></meshBasicMaterial>
                </mesh>
                <mesh
                    geometry={(cup.nodes.Hot_led as THREE.Mesh).geometry}
                    position={(cup.nodes.Hot_led as THREE.Mesh).position}
                >
                    <meshBasicMaterial map={cupTextures}></meshBasicMaterial>
                </mesh>

                {/* Three lights */}
                <mesh
                    ref={coldLedRef}
                    position={(cup.nodes.Cold_led as THREE.Mesh).position}
                    scale={0.0015}
                >
                    <sphereGeometry></sphereGeometry>
                    <meshStandardMaterial
                        emissive={"#d3463b"}
                        emissiveIntensity={10}
                        toneMapped={false}
                        transparent={true}
                        opacity={1}
                    ></meshStandardMaterial>
                </mesh>
                <mesh
                    ref={mildLedRef}
                    position={(cup.nodes.Mild_led as THREE.Mesh).position}
                    scale={0.0015}
                >
                    <sphereGeometry></sphereGeometry>
                    <meshStandardMaterial
                        emissive={"#d3463b"}
                        emissiveIntensity={10}
                        toneMapped={false}
                        transparent={true}
                        opacity={1}
                    ></meshStandardMaterial>
                </mesh>
                <mesh
                    ref={hotLedRef}
                    position={(cup.nodes.Hot_led as THREE.Mesh).position}
                    scale={0.0015}
                >
                    <sphereGeometry></sphereGeometry>
                    <meshStandardMaterial
                        emissive={"#d3463b"}
                        emissiveIntensity={10}
                        toneMapped={false}
                        transparent={true}
                        opacity={1}
                    ></meshStandardMaterial>
                </mesh>
            </group>

            {/* Smoke */}
            <mesh
                ref={smokeMeshRef}
                position={[0.495, 0.9, 0.489]}
                rotation={[0, Math.PI / 2, 0]}
                scale={[0.06, 0.2, 0.05]}
            >
                <primitive
                    object={smokeMeshGeometry}
                    attach="geometry"
                ></primitive>
                <shaderMaterial
                    ref={shaderMaterialRef}
                    // wireframe
                    side={THREE.DoubleSide}
                    transparent={true}
                    depthWrite={false}
                    vertexShader={coffeeSmokeVertexShader}
                    fragmentShader={coffeeSmokeFragmentShader}
                    uniforms={uniforms}
                ></shaderMaterial>
            </mesh>
        </>
    );
};

export default Cup;
