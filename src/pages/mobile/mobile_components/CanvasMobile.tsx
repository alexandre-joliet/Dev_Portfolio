import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

const CanvasMobile = () => {
    const meshRef = useRef<THREE.Mesh>(null!);

    useFrame(({ clock }) => {
        const time = clock.getElapsedTime();

        if (meshRef.current) {
            meshRef.current.rotation.y = time / 2;
        }
    });

    return (
        <mesh ref={meshRef}>
            <sphereGeometry></sphereGeometry>
            <meshBasicMaterial wireframe></meshBasicMaterial>
        </mesh>
    );
};

export default CanvasMobile;
