import { create } from "zustand";

type GeneralSate = {
    showWelcome: boolean;
    updateShowWelcome: (value: boolean) => void;
    showHeader: boolean;
    updateShowHeader: (value: boolean) => void;
    hasClickedCameraMenu: boolean;
    updateHasClickedCameraMenu: (value: boolean) => void;
    playAmbientSound: boolean;
    updatePlayAmbientSound: (value: boolean) => void;
    usePhone: boolean;
    updateUsePhone: (value: boolean) => void;
    useLaptop: boolean;
    updateUseLaptop: (value: boolean) => void;
    hideDefaultButton: boolean;
    updateHideDefaultButton: (value: boolean) => void;
};

const useGeneralStore = create<GeneralSate>((set) => ({
    showWelcome: true,
    updateShowWelcome: (value) => set({ showWelcome: value }),
    showHeader: false,
    updateShowHeader: (value) => set({ showHeader: value }),
    hasClickedCameraMenu: false,
    updateHasClickedCameraMenu: (value) => set({ hasClickedCameraMenu: value }),
    playAmbientSound: false,
    updatePlayAmbientSound: (value) => set({ playAmbientSound: value }),
    usePhone: false,
    updateUsePhone: (value) => set({ usePhone: value }),
    useLaptop: false,
    updateUseLaptop: (value) => set({ useLaptop: value }),
    hideDefaultButton: true,
    updateHideDefaultButton: (value) => set({ hideDefaultButton: value }),
}));

export default useGeneralStore;
