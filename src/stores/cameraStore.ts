import { create } from "zustand";

type CameraState = {
    defaultCameraPosition: boolean;
    laptopCameraPosition: boolean;
    phoneCameraPosition: boolean;
    updateCameraPosition: (position: "default" | "laptop" | "phone") => void;
    phoneScreenOn: boolean;
    phoneScreenOff: boolean;
    updateScreenOn: (value: "ON" | "OFF") => void;
};

const useCameraStore = create<CameraState>((set) => ({
    defaultCameraPosition: true,
    laptopCameraPosition: false,
    phoneCameraPosition: false,
    updateCameraPosition: (position) => {
        set({
            defaultCameraPosition: position === "default",
            laptopCameraPosition: position === "laptop",
            phoneCameraPosition: position === "phone",
        });
    },
    phoneScreenOn: false,
    phoneScreenOff: true,
    updateScreenOn: (value) =>
        set({
            phoneScreenOn: value === "ON",
            phoneScreenOff: value === "OFF",
        }),
}));

export default useCameraStore;
