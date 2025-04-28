import { Theme } from "@emotion/react";

export const lightTheme: Theme = {
  name: "light",
  color: {
    background: "#F2F4F6",
    section: "#ffffff",
    border: "#CED4DA",
    text: "#000000",
  },
  button: {
    filled: {
      color: "#ffffff",
      background: "#3182F6",
      border: "none",
      padding: "0 1.5rem",
    },
    outlined: {
      color: "#000000",
      background: "#FFFFFF",
      border: "1px solid #CED4D9",
      padding: "0 1.5rem",
    },
  },
  tooltip: {
    essential: {
      color: "#FA5252",
      background: "#FFF5F5",
      padding: "0 8px",
    },
    optional: {
      color: "#868E96",
      background: "#F8F9FA",
      padding: "0 8px",
    },
  },
  fontSize: {
    small: "0.75rem",
    medium: "1rem",
    large: "1.25rem",
  },
  borderRadius: {
    small: "0.25rem",
    medium: "0.5rem",
    large: "1rem",
  },
};
