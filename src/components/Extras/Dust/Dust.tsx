// import { Points } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import dustVertexShader from "../../../shaders/dust/vertex.glsl";
import dustFragmentShader from "../../../shaders/dust/fragment.glsl";
import { useFrame } from "@react-three/fiber";

const Dust = () => {
    //** Logic */
    const dustShaderRef = useRef<THREE.ShaderMaterial>(null);

    const dustGeometry = useMemo(() => {
        const geometry = new THREE.BufferGeometry();

        const dustCount = 150;
        const dustPositionArray = new Float32Array(dustCount * 3);
        const dustScaleArray = new Float32Array(dustCount);

        for (let i = 0; i < dustCount; i++) {
            dustPositionArray[i * 3 + 0] = (Math.random() - 0.2) * 2;
            dustPositionArray[i * 3 + 1] = (Math.random() - 0.5) * 2;
            dustPositionArray[i * 3 + 2] = (Math.random() - 0.5) * 4;

            dustScaleArray[i] = Math.random();
        }

        geometry.setAttribute(
            "position",
            new THREE.BufferAttribute(dustPositionArray, 3)
        );
        geometry.setAttribute(
            "aScale",
            new THREE.BufferAttribute(dustScaleArray, 1)
        );

        return geometry;
    }, []);

    useFrame(({ clock }) => {
        if (dustShaderRef.current) {
            dustShaderRef.current.uniforms.uTime.value = clock.elapsedTime;
        }
    });

    const uniforms = useMemo(
        () => ({
            uPixelRatio: new THREE.Uniform(
                Math.min(window.devicePixelRatio, 2)
            ),
            uPointSize: new THREE.Uniform(200),
            uTime: new THREE.Uniform(0),
        }),
        []
    );

    return (
        <>
            <points>
                <primitive
                    object={dustGeometry}
                    attach="geometry"
                ></primitive>
                <shaderMaterial
                    ref={dustShaderRef}
                    vertexShader={dustVertexShader}
                    fragmentShader={dustFragmentShader}
                    uniforms={uniforms}
                    // uniforms={{
                    //     uPixelRatio: {
                    //         value: Math.min(window.devicePixelRatio, 2),
                    //     },
                    //     uPointSize: { value: 150 },
                    //     uTime: new THREE.Uniform(0),
                    // }}
                    transparent={true}
                    depthWrite={false}
                ></shaderMaterial>
            </points>
            {/* <Points
                positions={dustPositionArray}
                scale={dustScaleArray}
            >
                <shaderMaterial
                    vertexShader={dustVertexShader}
                    fragmentShader={dustFragmentShader}
                    uniforms={{
                        uPixelRatio: {
                            value: Math.min(window.devicePixelRatio, 2),
                        },
                        uPointSize: { value: 100 },
                    }}
                    transparent={true}
                    depthWrite={false}
                ></shaderMaterial>
            </Points> */}
        </>
    );
};

export default Dust;
