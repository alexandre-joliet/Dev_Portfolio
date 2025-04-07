import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

const Emissions = () => {
    //** Models */
    const emissionsWhite = useGLTF("/models/emissions_white_draco.glb");
    const emissionsDeskButton = useGLTF(
        "/models/emissions_desk_button_draco.glb"
    );
    const emissionsHolo = useGLTF("/models/emissions_holo_draco.glb");

    return (
        <>
            <mesh
                geometry={
                    (emissionsWhite.nodes.AA_light_white as THREE.Mesh).geometry
                }
                position={
                    (emissionsWhite.nodes.AA_light_white as THREE.Mesh).position
                }
            >
                <meshStandardMaterial
                    emissive={"#DADADA"}
                    emissiveIntensity={2}
                    toneMapped={false}
                ></meshStandardMaterial>
            </mesh>

            <mesh
                geometry={
                    (emissionsDeskButton.nodes.Button as THREE.Mesh).geometry
                }
                position={
                    (emissionsDeskButton.nodes.Button as THREE.Mesh).position
                }
            >
                <meshStandardMaterial
                    emissive={"#e38a84"}
                    emissiveIntensity={4}
                    toneMapped={false}
                ></meshStandardMaterial>
            </mesh>

            <mesh
                geometry={
                    (emissionsHolo.nodes.Holo_device001 as THREE.Mesh).geometry
                }
                position={
                    (emissionsHolo.nodes.Holo_device001 as THREE.Mesh).position
                }
            >
                <meshBasicMaterial color={"white"}></meshBasicMaterial>
            </mesh>
        </>
    );
};

export default Emissions;
