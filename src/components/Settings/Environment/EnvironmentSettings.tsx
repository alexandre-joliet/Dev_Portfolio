import { Environment } from "@react-three/drei";

const EnvironmentSettings = () => {
    return (
        <Environment
            // preset="night"
            files={[
                "environment/spaceship_alex/px.png",
                "environment/spaceship_alex/nx.png",
                "environment/spaceship_alex/py.png",
                "environment/spaceship_alex/ny.png",
                "environment/spaceship_alex/pz.png",
                "environment/spaceship_alex/nz.png",
            ]}
            // environmentIntensity={0.5}
            environmentRotation={[0, Math.PI / 2, 0]}
        ></Environment>
    );
};

export default EnvironmentSettings;
