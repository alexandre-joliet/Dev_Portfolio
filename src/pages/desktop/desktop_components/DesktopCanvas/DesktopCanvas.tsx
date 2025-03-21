import "./DesktopCanvas.css";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import textMorphingVertexShader from "../../../../shaders/textMorphing/vertex.glsl";
import textMorphingFragmentShader from "../../../../shaders/textMorphing/fragment.glsl";

const DesktopCanvas = () => {
    const geometryRef = useRef<THREE.Points>(null);

    const sizes = {
        width: window.innerWidth,
        height: window.innerHeight,
        pixelRatio: Math.min(window.devicePixelRatio, 2),
    };

    // const points = useMemo(() => {
    //     // Create a sphere geometry and extract its vertices
    //     const geometry = new THREE.SphereGeometry(1, 26, 26);
    //     const positions = geometry.attributes.position.array;
    //     return new Float32Array(positions);
    // }, []);
    // const models = useGLTF("/models/textModels.glb");

    // useEffect(() => {
    //     const modelsPositions = models.scene.children.map((child) => {
    //         return (child as THREE.Mesh).geometry.attributes.position;
    //     });

    //     // Harmonizing number of vertices
    //     const particles: {
    //         maxCount?: number;
    //         positions?: THREE.Float32BufferAttribute[];
    //     } = {};
    //     particles.maxCount = 0;
    //     for (const position of modelsPositions) {
    //         if (position.count > particles.maxCount) {
    //             particles.maxCount = position.count;
    //         }
    //     }

    //     // Process positions
    //     particles.positions = [];
    //     for (const position of modelsPositions) {
    //         const originalArray = position.array;
    //         const newArray = new Float32Array(particles.maxCount * 3); // x3 for XYZ axis
    //         for (let i = 0; i < particles.maxCount; i++) {
    //             const i3 = i * 3;

    //             if (i3 < originalArray.length) {
    //                 newArray[i3 + 0] = originalArray[i3 + 0];
    //                 newArray[i3 + 1] = originalArray[i3 + 1];
    //                 newArray[i3 + 2] = originalArray[i3 + 2];
    //             } else {
    //                 newArray[i3 + 0] = 0;
    //                 newArray[i3 + 1] = 0;
    //                 newArray[i3 + 2] = 0;
    //             }
    //         }

    //         // particles.positions?.push(
    //         //     new THREE.Float32BufferAttribute(newArray, 3)
    //         // );

    //         return new THREE.Float32BufferAttribute(newArray, 3);
    //     }
    // });

    // Getting models positions

    // const points = useMemo(() => {
    //     // Create a sphere geometry and extract its vertices
    //     const geometry = new THREE.SphereGeometry(1, 20, 20);
    //     const positions = geometry.attributes.position.array;
    //     console.log(positions);

    //     return new Float32Array(positions);
    // }, []);

    return (
        <>
            <Canvas
                camera={{ fov: 50, near: 0.1, far: 1000, position: [0, 0, 3] }}
            >
                <OrbitControls></OrbitControls>
                <points ref={geometryRef}>
                    {/* <primitive object={}></primitive> */}
                    <shaderMaterial
                        vertexShader={textMorphingVertexShader}
                        fragmentShader={textMorphingFragmentShader}
                        uniforms={{
                            uSize: new THREE.Uniform(0.02),
                            uResolution: new THREE.Uniform(
                                new THREE.Vector2(
                                    sizes.width * sizes.pixelRatio,
                                    sizes.height * sizes.pixelRatio
                                )
                            ),
                        }}
                        blending={THREE.AdditiveBlending}
                        depthWrite={false}
                    ></shaderMaterial>
                </points>
                {/* <Points positions={points}>
                    <shaderMaterial
                        vertexShader={textMorphingVertexShader}
                        fragmentShader={textMorphingFragmentShader}
                        uniforms={{
                            uSize: new THREE.Uniform(0.02),
                            uResolution: new THREE.Uniform(
                                new THREE.Vector2(
                                    sizes.width * sizes.pixelRatio,
                                    sizes.height * sizes.pixelRatio
                                )
                            ),
                        }}
                        blending={THREE.AdditiveBlending}
                        depthWrite={false}
                    ></shaderMaterial>
                </Points> */}
            </Canvas>
        </>
    );
};

export default DesktopCanvas;
