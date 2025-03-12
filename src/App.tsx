import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";
import Home from "./pages/Home.tsx";
import PortfolioMobile from "./pages/mobile/PortfolioMobile.tsx";
import PortfolioDesktop from "./pages/desktop/PortfolioDesktop.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={<Home />}
                ></Route>
                <Route
                    path="/portfolio-mobile"
                    element={<PortfolioMobile />}
                ></Route>
                <Route
                    path="/portfolio-desktop"
                    element={<PortfolioDesktop />}
                ></Route>
            </Routes>
        </BrowserRouter>
    </StrictMode>
);
