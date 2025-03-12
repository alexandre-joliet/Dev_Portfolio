import { useMemo, useRef } from "react";
import * as THREE from "three";
import loadingVertexShader from "../../../shaders/loading/vertex.glsl";
import loadingFragmentShader from "../../../shaders/loading/fragment.glsl";
// import { useProgress } from "@react-three/drei";
// import gsap from "gsap";

const Loader = () => {
    const meshRef = useRef<THREE.Mesh>(null);

    const uniforms = useMemo(
        () => ({
            uAlpha: new THREE.Uniform(1.0),
        }),
        []
    );

    // //! Drei
    // const { progress, active } = useProgress();

    // const setProgress = useLoadingStore((state) => state.setProgress);

    // setProgress(progress, active);

    // return <Html center>{Math.round(progress)} % loaded</Html>;

    // useEffect(() => {
    //     // console.log(uniforms.uAlpha.value);
    //     if (progress === 100) {
    //         gsap.to(uniforms.uAlpha, { duration: 3, value: 0 });
    //         // console.log(uniforms.uAlpha.value);
    //     }
    // });

    return (
        <>
            <mesh ref={meshRef}>
                <planeGeometry args={[2.0, 2.0, 1.0, 1.0]}></planeGeometry>
                <shaderMaterial
                    vertexShader={loadingVertexShader}
                    fragmentShader={loadingFragmentShader}
                    transparent={true}
                    uniforms={uniforms}
                ></shaderMaterial>
            </mesh>
        </>
    );
};

export default Loader;
