import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useRef } from "react";
import earthVertexShader from "../../../shaders/earth/vertex.glsl";
import earthFragmentShader from "../../../shaders/earth/fragment.glsl";

const Planet = () => {
    //** Model & textures */ */
    const planetTexture = useTexture(
        "/textures/planet/2k_makemake_fictional_opti.jpg"
    );
    planetTexture.colorSpace = THREE.SRGBColorSpace;

    const planetTextureNight = useTexture(
        "/textures/planet/2k_makemake_fictional_night_opti.jpg"
    );
    planetTextureNight.colorSpace = THREE.SRGBColorSpace;

    const planetParameters = {
        atmosphereDayColor: "#e38a84",
        atmosphereTwilightColor: "#ff6600",
    };

    //** Logic */
    const planetRef = useRef<THREE.Mesh>(null!);

    useFrame((_, delta) => {
        if (planetRef.current) {
            planetRef.current.rotation.y += delta / 25;
        }
    });

    return (
        <>
            <mesh
                ref={planetRef}
                position={[-3, 1.6, -0.9]}
            >
                <sphereGeometry args={[0.3, 32, 32]}></sphereGeometry>
                <shaderMaterial
                    vertexShader={earthVertexShader}
                    fragmentShader={earthFragmentShader}
                    uniforms={{
                        uPlanetTexture: new THREE.Uniform(planetTexture),
                        uPlanetTextureNight: new THREE.Uniform(
                            planetTextureNight
                        ),
                        uAtmosphereDayColor: new THREE.Uniform(
                            new THREE.Color(planetParameters.atmosphereDayColor)
                        ),
                        uAtmosphereTwilightColor: new THREE.Uniform(
                            new THREE.Color(
                                planetParameters.atmosphereTwilightColor
                            )
                        ),
                    }}
                ></shaderMaterial>
            </mesh>
        </>
    );
};

export default Planet;
