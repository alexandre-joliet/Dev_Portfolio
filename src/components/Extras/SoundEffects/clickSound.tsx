import { useCallback } from "react";
import useGeneralStore from "../../../stores/generalStore";

const useClickSound = () => {
    const { playAmbientSound } = useGeneralStore();
    const playClickSound = useCallback(() => {
        const audio = new Audio(
            "/sounds/mixkit-alien-technology-button-3118.mp3"
        );
        audio.volume = 0.5;

        if (playAmbientSound) {
            audio.play();
        }
    }, [playAmbientSound]);

    return playClickSound;
};

export default useClickSound;
