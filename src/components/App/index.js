import React from "react";
import contexts from "../../scripts/contexts";

import Navbar from "../Navbar";
import CssBaseline from "@material-ui/core/CssBaseline";

import { BrowserRouter as Router, Route } from "react-router-dom";
import cmm from "../../scripts/common";

// App Component
function App() {
  return (
    <Router>
      <CssBaseline /> {/* global styles declared in material/theme.js*/}
      <Navbar />
      <Route path={cmm.ROUTES.LANDING}></Route>
    </Router>
  );
}

export default App;
