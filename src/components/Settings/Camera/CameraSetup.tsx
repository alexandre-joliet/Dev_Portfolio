import { CameraControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

type Props = {
    cameraRef: React.MutableRefObject<CameraControls>;
};

const CameraSetup = ({ cameraRef }: Props) => {
    const isInitialized = useRef(false);

    useFrame(() => {
        if (cameraRef.current && !isInitialized.current) {
            cameraRef.current.setLookAt(3.5, 1, 0, 0, 1, 0, true);
            isInitialized.current = true;
        }
    });

    return null;
};

export default CameraSetup;
