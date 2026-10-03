import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import LandingPage from "./pages/landing.page.tsx";
import ShowcasePage from "./pages/showcase.page.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/viewer" element={<ShowcasePage />} />
    </Routes>
  </BrowserRouter>,
);
