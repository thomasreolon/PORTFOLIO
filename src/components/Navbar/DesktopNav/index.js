import React from "react"
import { makeStyles, Typography } from "@material-ui/core"
import ToggableMenu from "./Menu"

import { projects } from "../../../costants/projects"
import PopupIcon from "../PopupIcon"

const projList = Object.values(projects)

const useStyles = makeStyles(() => ({
  nav: {
    position: "absolute",
    top: 0,
    width: "100%",
    backgroundColor: "transparent",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "5px 20px",
    zIndex: 3000,
  },
  spacer: {
    height: "50px",
  },
}))

function DesktopNav() {
  const classes = useStyles()
  return (
    <>
      <nav className={classes.nav}>
        <ToggableMenu projList={projList} />
        <Typography variant="overline">Thomas Reolon</Typography>
        <PopupIcon />
      </nav>
      <div className={classes.spacer}></div>
    </>
  )
}

export default DesktopNav
