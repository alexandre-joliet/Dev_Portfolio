import { Environment } from "@react-three/drei";

const EnvironmentSettings = () => {
    return (
        <Environment
            // preset="night"
            files={[
                "environment/spaceship3/px.png",
                "environment/spaceship3/nx.png",
                "environment/spaceship3/py.png",
                "environment/spaceship3/ny.png",
                "environment/spaceship3/pz.png",
                "environment/spaceship3/nz.png",
            ]}
            // environmentIntensity={0.5}
            environmentRotation={[0, Math.PI / 2, 0]}
        ></Environment>
    );
};

export default EnvironmentSettings;
