import React from "react"
import Menu from "./Menu"
import { projects } from "../../../costants/projects"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"

import PopupIcon from "../PopupIcon"

const projList = Object.values(projects)

function MobileNav() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Menu projList={projList} />
        <div style={{ flex: 1 }}></div>
        <PopupIcon />
      </Toolbar>
    </AppBar>
  )
}

export default MobileNav
