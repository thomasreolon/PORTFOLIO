import React from "react";

import Navbar from "../components/Navbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import contexts from "../scripts/contexts";
import { compose } from "recompose";
import { withTheme } from "../scripts/material/index";

// App Component
function App() {
  return (
    <>
      <CssBaseline /> {/* global styles declared in material/theme.js*/}
      <Navbar />
    </>
  );
}

const MyApp = compose(
  // list the context you want to use here
  contexts.user.withContext,
  contexts.theme.withContext,
  withTheme
)(App);

export default MyApp;
