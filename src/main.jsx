import { createRoot } from "react-dom/client";
import { StrictMode } from "react";

import "./assets/styles/global.css";
import "./assets/styles/variables.css";

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
