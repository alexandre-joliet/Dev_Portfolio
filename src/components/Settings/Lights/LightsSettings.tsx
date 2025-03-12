import { useEffect, useRef } from "react";
import * as THREE from "three";

const LightsSettings = () => {
    const orangeLight = useRef<THREE.SpotLight>(null!);
    const whiteLight = useRef<THREE.SpotLight>(null!);

    useEffect(() => {
        setTimeout(() => {
            if (whiteLight.current) {
                whiteLight.current.target.position.set(-2, 1, 0);
                whiteLight.current.target.updateMatrixWorld();
            }
        }, 2000);
    }, []);

    return (
        <>
            <spotLight
                ref={orangeLight}
                position={[-3, 1.6, -0.9]}
                color="orange"
                intensity={20}
                penumbra={1}
                decay={8.5}
                shadow-bias={-0.001}
                // castShadow
            />
            <spotLight
                ref={whiteLight}
                position={[0.0, 2.5, 0.0]}
                color="white"
                intensity={0.25}
                angle={0.35}
                penumbra={1}
                shadow-bias={-0.001}
                castShadow
            />
        </>
    );
};

export default LightsSettings;
