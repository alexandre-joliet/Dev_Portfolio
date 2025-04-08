import { create } from "zustand";

type CameraState = {
    defaultCameraPosition: boolean;
    laptopCameraPosition: boolean;
    phoneCameraPosition: boolean;
    cupCameraPosition: boolean;
    updateCameraPosition: (
        position: "default" | "laptop" | "phone" | "coffee"
    ) => void;
    phoneScreenOn: boolean;
    phoneScreenOff: boolean;
    updateScreenOn: (value: "ON" | "OFF") => void;
};

const useCameraStore = create<CameraState>((set) => ({
    defaultCameraPosition: true,
    laptopCameraPosition: false,
    phoneCameraPosition: false,
    cupCameraPosition: false,
    updateCameraPosition: (position) => {
        set({
            defaultCameraPosition: position === "default",
            laptopCameraPosition: position === "laptop",
            phoneCameraPosition: position === "phone",
            cupCameraPosition: position === "coffee",
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
