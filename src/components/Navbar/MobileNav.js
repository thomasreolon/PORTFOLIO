import React from "react";
import cmm from "../../scripts/common";
import {
  Button,
  IconButton,
  Toolbar,
  AppBar,
  Typography,
  Drawer,
} from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";
import MobileMenu from "./MobileMenu";

const useStyles = cmm.makeStyles((theme) => ({
  nav__title: {
    flex: 2,
  },
}));

function MobileNav(props) {
  const classes = useStyles();
  const [drawerState, setDrawerState] = React.useState(false);

  const toggleDrawer = () => {
    setDrawerState(!drawerState);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton onClick={toggleDrawer}>
          <MenuIcon />
        </IconButton>
        <Typography className={classes.nav__title}>My portfolio</Typography>
        <Button>Login</Button>
      </Toolbar>

      <Drawer open={drawerState} onClose={toggleDrawer}>
        <MobileMenu />
      </Drawer>
    </AppBar>
  );
}

export default MobileNav;
