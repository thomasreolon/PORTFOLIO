import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import ToggableMenu from "./Menu";

const useStyles = makeStyles((theme) => ({
  nav: {
    backgroundColor: "transparent",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "5px 20px",
  },
}));

function DesktopNav(props) {
  const classes = useStyles();
  return (
    <>
      <nav className={classes.nav}>
        <ToggableMenu />
        <Typography variant="overline">Thomas Reolon</Typography>
      </nav>
    </>
  );
}

export default DesktopNav;
