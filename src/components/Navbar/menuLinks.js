import React from "react";
import {
  GitHub,
  Instagram,
  InsertDriveFile,
  Folder,
  RecentActors,
} from "@material-ui/icons";
import cmm from "../../scripts/common";

const socials = [
  [GitHub, "@thomasreolon", ".."],
  [Instagram, "@thomreo", "...."],
];

const cv = [
  [InsertDriveFile, "Resumee", cmm.ROUTES.ACCOUNT],
  [Folder, "Projects", "..."],
  [RecentActors, "Contact Me", "..."],
];

export default { socials, cv };
