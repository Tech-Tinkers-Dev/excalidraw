import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ExcalidrawApp from "../excalidraw-app";
import { registerSW } from "virtual:pwa-register";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "../excalidraw-app/sentry";
import List from "./list";
window.__EXCALIDRAW_SHA__ = import.meta.env.VITE_APP_GIT_SHA;
const rootElement = document.getElementById("root")!;
const root = createRoot(rootElement);
registerSW();

root.render(
  <BrowserRouter>
    <StrictMode>
      <div style={{ height: "100vh" }} className="App">
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/edit" element={<ExcalidrawApp />} />
        </Routes>
      </div>
    </StrictMode>
  </BrowserRouter>,
);
