import React from "react"
import Menu from "./Menu"
import { projects } from "../../../costants/projects"

const projList = Object.values(projects)

function MobileNav() {
  return (
    <>
      <Menu projList={projList} />
    </>
  )
}

export default MobileNav
