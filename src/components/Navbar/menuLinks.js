import {
  GitHub,
  InsertDriveFile,
  Folder,
  RecentActors,
  Whatshot,
} from "@material-ui/icons";
import cmm from "../../scripts/common";
//----------------------------------

const links = {
  // icon, text, linkTo, color
  git: [
    GitHub,
    "@thomasreolon",
    cmm.ROUTES.ext.GITHUB,
    "rgb(245, 98, 23, 0.5),#0B486B",
  ],
  home: [Whatshot, "Home", cmm.ROUTES.LANDING, "rgb(245, 98, 23, 0.5),#0B486B"],
  contact: [
    RecentActors,
    "Contact Me",
    cmm.ROUTES.CONTACT,
    "rgba(195, 57, 49, 0.5),rgb(29, 67, 80)",
  ],
  resume: [
    InsertDriveFile,
    "Resume",
    cmm.ROUTES.RESUME,
    "rgba(195, 57, 49, 0.5),rgb(29, 67, 80)",
  ],
  projects: [
    Folder,
    "Projects",
    `${cmm.ROUTES.LANDING}#projects`,
    "#134E5E,#71B280",
  ],
};

const projects = [
  ["Amazon Clone", cmm.ROUTES.ext.AMAZON],
  ["Netflix Clone", cmm.ROUTES.ext.NETFLIX],
  ["Landing Page", cmm.ROUTES.ext.SOLAR],
];

const mobileLinks = [links.home, links.resume, links.contact, links.git];
const deskLinks = {
  left: [links.git, links.contact],
  right: [links.home, links.resume, links.projects],
};

export default { mobileLinks, deskLinks, projects };
