import React from "react";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { GitHub, Instagram } from "@material-ui/icons";

const menu = [
  [GitHub, "@thomasreolon", ".."],
  [Instagram, "@thomreo", "...."],
];

function MobileMenu(props) {
  return (
    <List>
      {menu.map(([ItemIcon, title, link]) => (
        <ListItem button key={title}>
          <ListItemIcon>{<ItemIcon />}</ListItemIcon>
          <ListItemText primary={title} />
        </ListItem>
      ))}
    </List>
  );
}

export default MobileMenu;
