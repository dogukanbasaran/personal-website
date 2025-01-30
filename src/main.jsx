import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import "./index.css";
import "./assets/global.css";

import App from "./App.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
