import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

import contexts from "./scripts/contexts";
import { compose } from "recompose";
import { withTheme } from "./scripts/material/index";

const MyApp = compose(
  // list the context you want to use here
  contexts.user.withContext,
  withTheme
)(App);

ReactDOM.render(<MyApp />, document.getElementById("root"));
