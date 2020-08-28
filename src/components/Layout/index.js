import React from "react"
import contexts from "../../contexts"
import { compose } from "recompose"
import { withMaterializeTheme } from "../../theme"
import CssBaseline from "@material-ui/core/CssBaseline"

import Navbar from "../Navbar"

/**
 * this Component includes the navbar and the footer (which are present in the whole site)
 * moreover this Component adds the REACTS CONTEXTS
 */
const Layout = ({ children }) => {
  return (
    <>
      <CssBaseline /> {/* global styles declared in material/theme.js*/}
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
      <footer></footer>
    </>
  )
}

/**
 * context providers are added as a wrapper to the layout component
 */
export default compose(
  contexts.theme.withContext,
  contexts.user.withContext,
  withMaterializeTheme
)(Layout)
