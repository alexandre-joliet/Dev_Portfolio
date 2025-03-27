import { create } from "zustand";

type IframeState = {
    showMobileIntro: boolean;
    updateShowMobileIntro: (value: boolean) => void;
    showDesktopIntro: boolean;
    updateShowDesktopIntro: (value: boolean) => void;
    showContent: boolean;
    updateShowContent: (value: boolean) => void;
    showAbout: boolean;
    showActivities: boolean;
    showSkills: boolean;
    showProjects: boolean;
    updateShowPage: (
        page: "Intro" | "About" | "Activities" | "Skills" | "Projects"
    ) => void;
    showEnterAnimation: boolean;
    showExitAnimation: boolean;
    updateShowAnimation: (value: "Enter" | "Exit") => void;
};

const useIframeStore = create<IframeState>((set) => ({
    showContent: false,
    updateShowContent: (value) => set({ showContent: value }),
    showMobileIntro: true,
    updateShowMobileIntro: (value) => set({ showMobileIntro: value }),
    showDesktopIntro: true,
    updateShowDesktopIntro: (value) => set({ showDesktopIntro: value }),
    showAbout: false,
    showActivities: false,
    showSkills: false,
    showProjects: false,
    updateShowPage: (page) =>
        set({
            showAbout: page === "About",
            showActivities: page === "Activities",
            showSkills: page === "Skills",
            showProjects: page === "Projects",
        }),
    showEnterAnimation: false,
    showExitAnimation: false,
    updateShowAnimation: (value) =>
        set({
            showEnterAnimation: value === "Enter",
            showExitAnimation: value === "Exit",
        }),
}));

export default useIframeStore;
