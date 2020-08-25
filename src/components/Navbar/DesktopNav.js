import React from "react";
import cmm from "../../scripts/common";

const useStyles = cmm.makeStyles((theme) => ({
  nav__bar: {
    display: "flex",
    width: "100%",
    backgroundColor: theme.palette.primary.main,
  },
}));

function DesktopNav(props) {
  const classes = useStyles();
  return <div className={classes.nav__bar}>NAVBAR BIG</div>;
}

export default DesktopNav;
