import React from "react"
import { makeStyles, Typography } from "@material-ui/core"

import { projects } from "../../../costants/projects"

import ToggableMenu from "./Menu"
import PopupIcon from "../PopupIcon"
import ThemeToggler from "../ThemeToggler"

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
        <div>
          <PopupIcon />
          <ThemeToggler />
        </div>
      </nav>
      <div className={classes.spacer}></div>
    </>
  )
}

export default DesktopNav
