import * as THREE from "three";
// import { Text3D } from "@react-three/drei";
import holographicVertexShader from "../../../shaders/holographic/vertex.glsl";
import holographicFragmentShader from "../../../shaders/holographic/fragment.glsl";
// import holographicTextVertexShader from "../../../shaders/holographicText/vertex.glsl";
// import holographicTextFragmentShader from "../../../shaders/holographicText/fragment.glsl";
import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { ShaderMaterial } from "three";

const Hologram = () => {
    //** Logic */
    const holoRef = useRef<ShaderMaterial>(null);
    const meshRef = useRef<THREE.Mesh>(null);

    // Keeping uniforms persistent. Otherwise, when the scene re-renders (e.g., moving the camera), the shaderMaterial component recreates its uniforms object, and holoRef.current.uniforms.uTime gets reset in the useFrame() function.
    const uniforms = useMemo(
        () => ({
            uTime: new THREE.Uniform(0),
            uColor: new THREE.Uniform(new THREE.Color("#e38a84")),
            uColorText: new THREE.Uniform(new THREE.Color("red")),
        }),
        []
    );

    useFrame(({ clock }) => {
        const time = clock.getElapsedTime();

        if (holoRef.current) {
            holoRef.current.uniforms.uTime.value = time;
        }
    });

    return (
        <>
            <mesh
                ref={meshRef}
                position={[0.521, 1, 1.292]}
            >
                <sphereGeometry args={[0.06, 32, 32]}></sphereGeometry>
                <shaderMaterial
                    ref={holoRef}
                    vertexShader={holographicVertexShader}
                    fragmentShader={holographicFragmentShader}
                    uniforms={uniforms}
                    transparent={true}
                    side={THREE.DoubleSide}
                    depthWrite={false}
                    blending={THREE.AdditiveBlending}
                ></shaderMaterial>
            </mesh>

            {/* <Text3D
                position={[0.521, 1.1, 1.39]}
                rotation={[0.0, Math.PI / 2, 0.0]}
                font="./fonts/helvetiker_regular.typeface.json"
                size={0.015}
                height={0.005}
                // curveSegments={32}
                // bevelEnabled
                // bevelSize={0.015}
                // bevelThickness={0.1}
            >
                Unknown Planet dicoverred
                <shaderMaterial
                    ref={holoRef}
                    vertexShader={holographicTextVertexShader}
                    fragmentShader={holographicTextFragmentShader}
                    uniforms={uniforms}
                    transparent={true}
                    // side={THREE.DoubleSide}
                    // depthWrite={false}
                    // blending={THREE.AdditiveBlending}
                ></shaderMaterial>
            </Text3D> */}
            {/* <Text3D
                position={[0.521, 1.075, 1.39]}
                rotation={[0.0, Math.PI / 2, 0.0]}
                font="./fonts/Dune_Rise_Regular.json"
                size={0.01}
                height={0}
                // curveSegments={32}
                // bevelEnabled
                // bevelSize={0.015}
                // bevelThickness={0.1}
            >
                Scanning in progress
                <shaderMaterial
                    ref={holoRef}
                    vertexShader={holographicTextVertexShader}
                    fragmentShader={holographicTextFragmentShader}
                    uniforms={uniforms}
                    transparent={true}
                    // side={THREE.DoubleSide}
                    // depthWrite={false}
                    // blending={THREE.AdditiveBlending}
                ></shaderMaterial>
            </Text3D> */}
        </>
    );
};

export default Hologram;
