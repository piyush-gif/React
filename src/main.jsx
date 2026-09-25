import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { CountProvider } from "./context/CountContext.jsx";
import { ReducerProvider } from "./context/ReducerContext.jsx";
import "./index.css";
import App from "./App.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <CountProvider>
        <ReducerProvider>
          <App />
        </ReducerProvider>
      </CountProvider>
    </ThemeProvider>
  </StrictMode>,
);
