import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

// more customization: https://material-ui.com/customization/default-theme/

const customTheme = createMuiTheme({
  //--------------------------------------------------------------- THEME COLORS -------
  palette: {
    primary: {
      main: "#9ffafa",
    },
    secondary: {
      main: "#500",
    },
    emph: {
      fill: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
      main: "#fff",
    },
  },
  //--------------------------------------------------------------- THEME FONTS -------
  typography: {
    fontFamily: 'Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: 'Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 300,
      fontSize: "5rem",
      lineHeight: 1.167,
      letterSpacing: "-0.01562em",
    },
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        html: {
          backgroundColor: "#fff",
        },
        "*": {
          margin: "0",
          boxSizing: "border-box",
        },
      },
    },
  },
});

const withTheme = (Component) => {
  const WithTheme = (props) => (
    <ThemeProvider theme={customTheme}>
      <Component {...props} />
    </ThemeProvider>
  );

  return WithTheme;
};

export { withTheme };
