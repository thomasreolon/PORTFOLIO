import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import contexts from "../contexts";

// more customization: https://material-ui.com/customization/default-theme/
//--------------------------------------------------------------- THEME COLORS -------

const light = {
  type: "light",
};

const dark = {
  type: "dark",
  background: { default: "#111" },
  /*text: { primary: "#fff" },
  primary: {
    main: "#000",
  },
  secondary: {
    main: "#fff",
  },*/
};

const withTheme = (Component) => {
  const WithTheme = (props) => {
    const [{ darkMode }, dispatch] = contexts.theme.useContext();
    const customTheme = createMuiTheme({
      palette: darkMode ? dark : light,
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
        overline: {
          fontFamily: 'Roboto", "Helvetica", "Arial", sans-serif',
          fontWeight: 400,
          fontSize: "1rem",
          lineHeight: 1.66,
          letterSpacing: "0.08333em",
          textTransform: "capitalize",
        },
      },
      //--------------------------------------------------------------- THEME FONTS -------
      overrides: {
        MuiCssBaseline: {
          "@global": {
            "html, body, #root": {
              height: "100%",
            },
            "*": {
              margin: "0",
              boxSizing: "border-box",
            },
            a: {
              textDecoration: "none",
              color: "inherit",
            },
          },
        },
      },
    });

    return (
      <ThemeProvider theme={customTheme}>
        <Component {...props} />
      </ThemeProvider>
    );
  };

  return WithTheme;
};

export { withTheme };
