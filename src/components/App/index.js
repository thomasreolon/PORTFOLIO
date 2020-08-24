import React from "react";
import contexts from "../../scripts/contexts";
import { auth } from "../../scripts/firebase";

import Navbar from "../Navbar";
import CssBaseline from "@material-ui/core/CssBaseline";

// App Component
function App() {
  return (
    <React.Fragment>
      <CssBaseline />

      <FirebaseAuthUpdater />
      <Navbar />
    </React.Fragment>
  );
}

const FirebaseAuthUpdater = () => {
  // update firebase auth
  const [, dispatch] = contexts.user.useContext();
  React.useEffect(() => {
    const unsub = auth.onAuthStateChanged((authUser) => {
      dispatch({ type: "SET_USER", user: authUser || null });
    });

    return () => {
      unsub();
    };
  }, [dispatch]);
  return <div></div>;
};

export default App;
