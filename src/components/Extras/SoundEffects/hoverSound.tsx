import { useCallback } from "react";
import useGeneralStore from "../../../stores/generalStore";

const useHoverSound = () => {
    const { playAmbientSound } = useGeneralStore();
    const playHoverSound = useCallback(() => {
        const audio = new Audio(
            "/sounds/mixkit-game-liquid-game-hit-3155-cut.mp3"
        );
        audio.volume = 0.25;

        if (playAmbientSound) {
            audio.play();
        }
    }, [playAmbientSound]);

    return playHoverSound;
};

export default useHoverSound;
