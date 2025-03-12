import { create } from "zustand";

type IframeState = {
    showIntro: boolean;
    updateShowIntro: (value: boolean) => void;
    showContent: boolean;
    updateShowContent: (value: boolean) => void;
};

const useIframeStore = create<IframeState>((set) => ({
    showIntro: true,
    updateShowIntro: (value) => set({ showIntro: value }),
    showContent: false,
    updateShowContent: (value) => set({ showContent: value }),
}));

export default useIframeStore;
