import React from "react";
import contexts from "../../scripts/contexts";
import Button from "@material-ui/core/Button";

const Navbar = (props) => {
  // update firebase auth
  const [{ user }] = contexts.user.useContext();
  return (
    <div style={{ backgroundColor: "lightcyan", textAlign: "center" }}>
      {user ? (
        `Hello, ${user?.email}`
      ) : (
        <Button variant="contained" color="secondary">
          sign in!
        </Button>
      )}
    </div>
  );
};

export default Navbar;
