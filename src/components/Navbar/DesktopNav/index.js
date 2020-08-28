import React from "react"
import { makeStyles, Typography } from "@material-ui/core"
import ToggableMenu from "./Menu"

import { projects } from "../../../costants/projects"
import PopupIcon from "../PopupIcon"

const projList = Object.values(projects)

const useStyles = makeStyles(() => ({
  nav: {
    backgroundColor: "transparent",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "5px 20px",
  },
}))

function DesktopNav() {
  const classes = useStyles()
  return (
    <nav className={classes.nav}>
      <ToggableMenu projList={projList} />
      <Typography variant="overline">Thomas Reolon</Typography>
      <PopupIcon />
    </nav>
  )
}

export default DesktopNav
