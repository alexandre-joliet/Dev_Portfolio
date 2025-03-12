import { useEffect, useRef } from "react";
import useGeneralStore from "../../../stores/generalStore";

type AmbientSoundProps = {
    url: string;
    volume: number;
    loop: boolean;
};

const AmbientSound = ({ url, volume, loop }: AmbientSoundProps) => {
    const { playAmbientSound } = useGeneralStore();
    const audioRef = useRef<HTMLAudioElement | null>(null);
    // const audioContextRef = useRef<AudioContext | null>(null);
    // const gainNodeRef = useRef<GainNode | null>(null);

    // AudioParam API

    useEffect(() => {
        if (!audioRef.current) {
            audioRef.current = new Audio(url);
            audioRef.current.loop = loop;
            audioRef.current.volume = volume;
            // console.log(audioRef.current.volume);
        }

        // if (!audioContextRef.current) {
        //     audioContextRef.current = new AudioContext();
        //     const sourceAudioParam =
        //         audioContextRef.current.createMediaElementSource(
        //             audioRef.current
        //         );
        //     gainNodeRef.current = audioContextRef.current.createGain();
        //     gainNodeRef.current.gain.setValueAtTime(
        //         0,
        //         audioContextRef.current.currentTime
        //     );

        //     sourceAudioParam.connect(gainNodeRef.current);
        //     gainNodeRef.current.connect(audioContextRef.current.destination);
        // }

        // const gainNode = gainNodeRef.current;
        // const audioContext = audioContextRef.current;

        if (playAmbientSound) {
            // gainNode?.gain.exponentialRampToValueAtTime(
            //     1.0,
            //     audioContext.currentTime + 0.75
            // );
            audioRef.current.volume = volume;

            console.log(audioRef.current.volume);

            audioRef.current
                .play()
                .catch((error) =>
                    console.warn("Audio play has failed:", error)
                );
        } else {
            // gainNode?.gain.exponentialRampToValueAtTime(
            //     0.05,
            //     audioContext.currentTime + 2
            // );
            // Pause audio after fade-out delay
            // setTimeout(() => {
            //     audioRef.current?.pause();
            // }, 2000);
            audioRef.current.volume = 0;
        }

        return () => {
            audioRef.current?.pause(); // Ensures cleanup on unmount
        };
    }, [url, volume, loop, playAmbientSound]);

    return null;
};

export default AmbientSound;
