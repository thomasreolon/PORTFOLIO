import React from "react";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { Badge, Menu, MenuItem, IconButton } from "@material-ui/core";

function PopupIcon(props) {
  const [nBadge, setNBadge] = React.useState(0); /// better using a context
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [msg, setMsg] = React.useState(
    <MenuItem onClick={handleClose}>
      You don't have any new notification
    </MenuItem>
  );
  const handleCloseAndReset = () => {
    setAnchorEl(null);
    setMsg(
      <MenuItem onClick={handleClose}>
        You don't have any new notification
      </MenuItem>
    );
    setNBadge(0);
  };
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setNBadge(1);
      setMsg(
        <MenuItem onClick={handleCloseAndReset}>
          Hey There! I'm just passing by!
        </MenuItem>
      );
    }, 10000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <IconButton
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <Badge badgeContent={nBadge} color="error">
          <NotificationsIcon style={{ color: "#fff" }} />
        </Badge>
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {msg}
      </Menu>
    </>
  );
}

export default PopupIcon;
