import React from "react";
import menuLinks from "./menuLinks";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  List,
  Divider,
  ListItem,
  ListItemIcon,
  Typography,
  IconButton,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import FolderIcon from "@material-ui/icons/Folder";

const Gradient = styled.div`
  border-radius: 100%;
  position: absolute;
  top: 50%;
  left: 21%;
  height: 32px;
  width: 32px;
  z-index: -1;
  transform: translate(-50%, -50%);
`;

const Text = styled(Typography)`
  background: -moz-linear-gradient(#f56217, #0b486b);
  background: -webkit-linear-gradient(#f56217, #0b486b);
  background: linear-gradient(#f56217, #0b486b);
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

function MobileMenu({ onClose }) {
  return (
    <List>
      <IconButton onClick={onClose} style={{ marginLeft: "12px" }}>
        <CloseIcon />
      </IconButton>
      <Divider />
      {menuLinks.projects.map(([title, link]) => (
        <a href={link} target="_blank" key={title}>
          <ListItem button>
            <ListItemIcon>
              <FolderIcon color="secondary" />
            </ListItemIcon>
            <Typography variant="h6" color="secondary">
              {title}
            </Typography>
          </ListItem>
        </a>
      ))}

      <Divider />
      {menuLinks.mobileLinks.map(([ItemIcon, title, link, color]) => {
        const grad = {
          background: `-moz-linear-gradient(${color})`,
          background: `-webkit-linear-gradient(${color})`,
          background: `linear-gradient( ${color})`,
          backgroundClip: "text",
        };
        return (
          <Link to={link} key={title}>
            <ListItem button>
              <ListItemIcon style={{ position: "relative" }}>
                {<ItemIcon style={{ color: "#fff" }} />}
                <Gradient style={grad}></Gradient>
              </ListItemIcon>
              <Text variant="h6">{title}</Text>
            </ListItem>
          </Link>
        );
      })}
      <Divider />
    </List>
  );
}

export default MobileMenu;
