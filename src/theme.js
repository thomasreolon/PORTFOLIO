import React from "react"
import {
  createMuiTheme,
  ThemeProvider,
  useTheme,
} from "@material-ui/core/styles"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import colors from "./costants/colors"
import contexts from "./contexts"

// more customization: https://material-ui.com/customization/default-theme/
//--------------------------------------------------------------- THEME COLORS -------

const light = {
  type: "light",
  background: { default: colors.light.bg_1 },
  text: { primary: colors.light.text },
}

const dark = {
  type: "dark",
  background: { default: colors.dark.bg_1, paper: colors.dark.bg_2 },
  text: { primary: colors.dark.text },
  primary: {
    main: "rgba(0,0,0,0.3)",
  },
  /*
  secondary: {
    main: "#fff",
  },*/
}

const withMaterializeTheme = Component => {
  const WithTheme = props => {
    const [{ darkMode }] = contexts.theme.useContext()
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
            overflowX: "hidden",
          },
        },
      },
    })

    return (
      <ThemeProvider theme={customTheme}>
        <Component {...props} />
      </ThemeProvider>
    )
  }

  return WithTheme
}

function useIsSmall() {
  const theme = useTheme()
  const isSmall = useMediaQuery(theme.breakpoints.down("xs"))
  return isSmall
}

export { withMaterializeTheme, useIsSmall }
