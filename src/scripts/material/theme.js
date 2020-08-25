import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import "fontsource-roboto";
import "fontsource-fredoka-one";

// more customization: https://material-ui.com/customization/default-theme/

const customTheme = createMuiTheme({
  //--------------------------------------------------------------- THEME COLORS -------
  palette: {
    primary: {
      main: "#03071e",
    },
    secondary: {
      main: "#003049",
    },
  },
  //--------------------------------------------------------------- THEME FONTS -------
  typography: {
    fontFamily: '"Fredoka One", "Roboto", "Helvetica", "Arial", sans-serif',
    body2: {
      fontFamily: '"Roboto", "Fredoka One", "Helvetica", "Arial", sans-serif',
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
        a: {
          textDecoration: "none",
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
