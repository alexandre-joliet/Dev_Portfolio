import "./Loading.css";
import { useEffect, useState } from "react";
import * as THREE from "three";
import gsap from "gsap";
import useGeneralStore from "../../stores/generalStore";

type LoadingProps = {
    setShowLoading: (data: boolean) => void;
};

const Loading = ({ setShowLoading }: LoadingProps) => {
    //** Loading details */
    const [, setItemsToLoad] = useState<number>(0);
    const [itemsLoaded, setItemsLoaded] = useState<number>(0);
    const [allLoaded, setAllLoaded] = useState<boolean>(false);
    const [progress, setProgress] = useState<number>(0);
    const [hasClicked, setHasCliked] = useState<boolean>(false);
    const { updatePlayAmbientSound } = useGeneralStore();

    // Loader
    useEffect(() => {
        THREE.DefaultLoadingManager.onStart = (_, itemsTotal) => {
            setItemsToLoad(itemsTotal);
            // console.log(`Items total on start: ${itemsTotal}`);
        };

        // Track overall loading progress with DefaultLoadingManager
        THREE.DefaultLoadingManager.onLoad = () => {};

        THREE.DefaultLoadingManager.onProgress = (
            _,
            itemsLoaded,
            itemsTotal
        ) => {
            const progressPercentage = (itemsLoaded / itemsTotal) * 100;
            setProgress(progressPercentage);
            setItemsLoaded(itemsLoaded);
            // console.log(itemsLoaded);
            // console.log(`Items total on progress: ${itemsTotal}`);
        };

        return () => {
            // Clean up
            THREE.DefaultLoadingManager.onLoad = () => {};
            THREE.DefaultLoadingManager.onProgress = () => {};
        };
    }, []);

    useEffect(() => {
        if (itemsLoaded === 73) {
            setAllLoaded(true);
        }
    }, [itemsLoaded]);

    //** Logic */
    const { updateShowHeader } = useGeneralStore();

    useEffect(() => {
        if (hasClicked) {
            gsap.to(".loading_screen-container", {
                duration: 1,
                opacity: 0,
            });
            updatePlayAmbientSound(true);
            setTimeout(() => {
                setShowLoading(false);
                updateShowHeader(true);
            }, 500);
        }
    }, [hasClicked, setShowLoading, updatePlayAmbientSound, updateShowHeader]);

    //** Style */
    const radius = 40;
    const circumference = 2 * Math.PI * radius; // Full circumference
    const strokeDashoffset = circumference - (progress / 100) * circumference; // Offset for progress

    useEffect(() => {
        if (allLoaded) {
            const loadingTimeline = gsap.timeline();
            loadingTimeline.to(".screen-content-svg-container", {
                duration: 2,
                opacity: 0,
                // yoyo: true,
                // repeat: -1,
            });
            loadingTimeline.to(
                ".loading_screen-loading-text",
                {
                    duration: 1,
                    ease: "power1.inOut",
                    opacity: 0,
                },
                "<"
            );
            loadingTimeline.to(
                ".loading_button-enter",
                {
                    duration: 1,
                    opacity: 1,
                    ease: "power1.inOut",
                },
                ">-0.6"
            );
        }
    }, [allLoaded]);

    return (
        <>
            <div className="loading_screen-container">
                <div className="loading_screen-content">
                    <svg
                        className="screen-content-svg-container"
                        viewBox="0 0 100 100"
                    >
                        {/* Background Circle */}
                        <circle
                            className="screen-content-svg-background"
                            cx="50"
                            cy="50"
                            r={radius}
                        />
                        {/* Progress Circle */}
                        <circle
                            className="screen-content-svg-progress"
                            cx="50"
                            cy="50"
                            r={radius}
                            strokeDasharray={circumference}
                            strokeDashoffset={strokeDashoffset}
                        />
                    </svg>

                    <div className="loading_screen-progress">
                        <p className="loading_screen-loading-text">
                            {/* {`${progress.toFixed(2)}%`} */}
                            LOADING
                        </p>

                        {allLoaded && (
                            <button
                                className="loading_button-enter"
                                onClick={() => setHasCliked(true)}
                                disabled={!allLoaded}
                            >
                                ENTER
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Loading;
