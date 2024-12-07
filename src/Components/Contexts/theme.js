import { createTheme } from "@mui/material/styles";

// Light theme
export const lightTheme = createTheme({
  palette: {
    mode: "light", // Light mode
  },
  typography: {
    fontFamily: "Raleway, sans-serif", // Global font family
  },
});

// Dark theme
export const darkTheme = createTheme({
  palette: {
    mode: "dark", // Dark mode
    background: {
      default: "#0B0011", // Dark background color
      paper: "#0B0011", // Dark color for surfaces like cards, dialogs
    },
    text: {
      primary: "#FFFFFF", // Ensure text is readable on the dark background
    },
  },
  typography: {
    fontFamily: "Raleway, Arial, sans-serif", // Global font family
  },
});
