import { useTexture } from "@react-three/drei";

const BackgroundPlane = () => {
    const backgroundTexture = useTexture(
        "/environment/8k_stars_milky_way_opti.jpg"
    );

    return (
        <>
            <mesh
                rotation={[0.0, Math.PI / 2, 0.0]}
                position={[-4.0, 1.4, 0.0]}
            >
                <planeGeometry args={[10, 5]}></planeGeometry>
                <meshBasicMaterial map={backgroundTexture}></meshBasicMaterial>
            </mesh>
        </>
    );
};

export default BackgroundPlane;
