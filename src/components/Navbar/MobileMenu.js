import React from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@material-ui/core";

import menuLinks from "./menuLinks";

function MobileMenu(props) {
  return (
    <List>
      {menuLinks.cv.map(([ItemIcon, title, link]) => (
        <ListItem button key={title}>
          <ListItemIcon>{<ItemIcon />}</ListItemIcon>
          <ListItemText primary={title} />
        </ListItem>
      ))}
      <Divider />
      {menuLinks.socials.map(([ItemIcon, title, link]) => (
        <ListItem button key={title}>
          <ListItemIcon>{<ItemIcon />}</ListItemIcon>
          <ListItemText primary={title} />
        </ListItem>
      ))}
    </List>
  );
}

export default MobileMenu;
