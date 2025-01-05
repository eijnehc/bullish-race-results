import { createRoot } from "react-dom/client";

import { StrictMode } from "react";

import App from "./App.tsx";
import "./index.css";

// Add dark class to html element on initial load
document.documentElement.classList.add("dark");

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
