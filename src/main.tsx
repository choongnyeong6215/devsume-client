import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { Global, ThemeProvider } from "@emotion/react";
import GlobalStyle from "@/styles/global";
import { lightTheme } from "@/styles/theme";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={lightTheme}>
      <Global styles={GlobalStyle} />
      <App />
    </ThemeProvider>
  </StrictMode>
);
