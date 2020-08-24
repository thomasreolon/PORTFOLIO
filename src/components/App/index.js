import React from "react";
import contexts from "../../scripts/contexts";

import Navbar from "../Navbar";
import CssBaseline from "@material-ui/core/CssBaseline";

import { BrowserRouter as Router } from "react-router-dom";
import cmm from "../../scripts/common";

// App Component
function App() {
  return (
    <React.Fragment>
      <CssBaseline /> {/* global styles declared in material/theme.js*/}
      <Navbar />
      <Router to={cmm.ROUTES.LANDING}></Router>
    </React.Fragment>
  );
}

export default App;
